/* eslint-disable prettier/prettier */
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"

import {
  AttrsBoxStyling,
  AttrsGrid,
  DropFileStyle,
  FormLabel,
  FormLabelContainer,
  FormStyling,
  InputField,
  SelectField,
  SelectLabel,
  SubmitBtn,
  TextAreaField,
  TitleField,
  TitleSeparator,
} from "./styles/CreateNFTStyles"
import attachSvg from "../../images/attach.svg"
import { attrs, NFTTypes, sports } from "./dummyData"
import { countries } from "./countries"
import { readOptions } from "utils/readContract"

import {lazyMintNft} from "utils/writeContract1"

import {
  useChain,
  useMoralis,
  useMoralisQuery,
  useMoralisWeb3Api,
  useNewMoralisObject,
} from "react-moralis"
import { createNFT } from "utils/createNFT"
import { sendOptions } from "utils/writeContract"
import { lazy } from "react"

export const FormNFTCard = () => {
  const [files, setFiles] = useState([])
  const [showMulti, setShowMulti] = useState(false)
  const { Moralis } = useMoralis()
  const { save } = useNewMoralisObject("_User")
  const { user } = useMoralis()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)
    const network = formData.get("network")
    const sport = formData.get("sport")
    const type = formData.get("nftType")
    const standard = formData.get("standard")
    const amount = showMulti ? formData.get("amount") : 1
    const nftName = formData.get("nftName")
    const nftDesc = formData.get("nftDesc")
    const characteristics = attrs.map((_, idx) =>
      formData.get(`characteristic${idx + 1}`),
    )
    const athleteBirthday = formData.get("athleteBirthday")
    const athleteCountry = formData.get("athleteCountry")
    const athleteRegion = formData.get("athleteRegion")
    const athleteTeam = formData.get("athleteTeam")
    const biography = formData.get("biography")

    const object = {
      network,
      sport,
      type,
      standard,
      amount,
      nftName,
      nftDesc,
      characteristics,
      athleteBirthday,
      athleteCountry,
      athleteRegion,
      athleteTeam,
      biography,
    }

    console.log("object", object);

    const file = new Moralis.File("file.json", {
      base64: btoa(JSON.stringify(object)),
    })
    const response = await file.saveIPFS()
    const metadata_hash = response._hash

    console.log("metadata_has", metadata_hash);

    const data = files[0]
    const image = new Moralis.File(data.name, data)
    const img = await image.saveIPFS()
    const img_hash = img._hash

    console.log("img", img_hash);

    // const result = await Moralis.executeFunction(
    //   createNFT(img_hash, metadata_hash),
    // )
    
    const result = await Moralis.executeFunction(
      lazyMintNft(metadata_hash, sport, "1")
    )

    console.log("result:", result);
    console.log(files)
  }

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  ))
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  const changeData = async () => {
    console.log(user.attributes)
    user.set("isAdmin", true)
    await user.save()
  }

  const getSomething = async () => {
    const message = await Moralis.executeFunction(sendOptions)
    console.log(message)
  }

  return (
    <FormStyling id="createNFTForm" onSubmit={onSubmit}>
      <TitleField>Select Network</TitleField>
      <SelectField name="network">
        {["Polygon", "Binance"].map((item, idx) => (
          <option key={idx} value={item} name="sportKind">
            {item}
          </option>
        ))}
      </SelectField>
      <button type="button" onClick={changeData}>
        Click me
      </button>
      <SelectLabel>
        <TitleField>Select kind of sport</TitleField>
        <SelectField name="sport">
          {sports.map(({ id, value }) => (
            <option key={id} value={value} name="sportKind">
              {value}
            </option>
          ))}
        </SelectField>
      </SelectLabel>

      <SelectLabel>
        <TitleField>Select type of NFT</TitleField>
        <SelectField name="nftType">
          {NFTTypes.map(({ id, value }) => (
            <option key={id} value={value} name="nftType">
              {value}
            </option>
          ))}
        </SelectField>
      </SelectLabel>

      <TitleField>Select NFT-standard</TitleField>
      <FormLabelContainer>
        <FormLabel>
          <input
            type="radio"
            value="ERC-721"
            name="standard"
            onClick={() => setShowMulti(false)}
          />
          <p>ERC-721</p>
        </FormLabel>
        <FormLabel>
          <input
            type="radio"
            name="standard"
            value="ERC-1155"
            onClick={() => setShowMulti(true)}
          />
          <p>ERC-1155</p>
        </FormLabel>
      </FormLabelContainer>

      {showMulti && (
        <SelectLabel>
          <TitleField>Amount of NFT</TitleField>
          <InputField type="number" placeholder="Amount of NFT" name="amount" />
        </SelectLabel>
      )}

      <SelectLabel>
        <TitleField>NFT name</TitleField>
        <InputField type="text" placeholder="NFT Name" name="nftName" />
      </SelectLabel>

      <TitleField>NFT description</TitleField>
      <TextAreaField
        name="nftDesc"
        rows={5}
        cols={1}
        placeholder="Description"
      />

      <TitleField>
        Enter media to upload to IPFS <br />
        <span>The file must be PNG, and no more than 3 MB</span>
      </TitleField>

      <DropFileStyle {...getRootProps()}>
        <input
          type="url"
          placeholder="Enter media to upload to IPFS"
          {...register("Enter media to upload to IPFS", {})}
          {...getInputProps()}
        />
        <p>Drop files here</p>
        <div>
          <img src={attachSvg} alt="attach" />
          <span>Attach file</span>
        </div>
        <aside>{thumbs}</aside>
      </DropFileStyle>

      <TitleSeparator>Characteristics and attributes</TitleSeparator>
      <TitleField>Enter characteristics</TitleField>

      <AttrsGrid>
        {attrs.map(({ type, name, id, required, min, max }, idx) => {
          return (
            <AttrsBoxStyling key={id}>
              <p>{name}</p>
              <input
                key={id}
                required
                type={type}
                defaultValue="1"
                min="1"
                name={`characteristic${idx + 1}`}
              />
            </AttrsBoxStyling>
          )
        })}
      </AttrsGrid>

      <TitleField>Enter athlete's birthday</TitleField>
      <InputField
        type="date"
        placeholder="Enter your birthday"
        name="athleteBirthday"
        required
        color="#f5f5f5"
      />

      <TitleField>Select athlete's country</TitleField>
      <SelectLabel>
        <SelectField name="athleteCountry" required>
          {countries.map(({ value }) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </SelectField>
      </SelectLabel>

      <TitleField>Type athlete's region</TitleField>
      <InputField
        required
        type="text"
        placeholder="Select your region"
        name="athleteRegion"
      />

      <TitleField>Enter team</TitleField>
      <InputField
        type="text"
        placeholder="Enter team"
        name="athleteTeam"
        required
      />

      <TitleField>Player biography</TitleField>
      <TextAreaField rows={5} name="biography" placeholder="Text" required />

      <SubmitBtn type="submit" placeholder="PUBLISH" />
    </FormStyling>
  )
}
