import { DragDropUploader } from "components/DragDropUploader"
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { FormNFTCard } from "./FormNFTCard"

import {
  BackOption,
  Form,
  FormLabel,
  LeftSide,
  MainContainer,
  MainHeading,
  RightSide,
} from "./styles/CreateNFTStyles"

const CreateNFT = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <MainContainer>
      <LeftSide>
        <BackOption>&#8592; Back</BackOption>
      </LeftSide>
      <RightSide>
        <MainHeading>Create NFT</MainHeading>
        <hr style={{ marginTop: "1rem", marginBottom: "2rem" }} />
        <FormNFTCard />
      </RightSide>
    </MainContainer>
  )
}

export default CreateNFT
