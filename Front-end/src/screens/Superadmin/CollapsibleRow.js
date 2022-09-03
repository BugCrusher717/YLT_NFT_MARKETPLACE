import {
  CaretDownOutlined,
  CaretUpOutlined,
  DeleteFilled,
} from "@ant-design/icons"
import useCollapse from "react-collapsed"
import Card from "./Card"
import {
  CardSection,
  CollapsibleDivStyling,
  Row,
  SubmitBtn,
} from "./SuperAdminStyling"
import { useForm } from "react-hook-form"
import { useMoralis, useMoralisWeb3Api } from "react-moralis"
import { changePermissionsFunc } from "utils/helpers"
import { useCallback, useEffect, useState } from "react"
import { readOptions } from "utils/readContract"

const CollapsibleRow = ({
  email,
  walletAddress,
  isAdmin,
  admin,
  id,
  users,
  setAdmin,
}) => {
  const { Moralis } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const config = {
    duration: 1000,
  }

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config)
  const [yltBalance, setYLTBalance] = useState(null)
  const memoizedCallback = useCallback(async () => {
    const bal = await Web3Api.account.getTokenBalances({
      address: walletAddress,
      chain: "bsc",
      token_addresses: ["0x77C32223FBD713dd321Eab47239Cba309573EA88"],
    })

    setYLTBalance(
      bal.length > 0
        ? bal[0]?.balance.slice(0, bal[0].balance.length - 18)
        : "0",
    )
  }, [Web3Api.account, walletAddress])

  useEffect(() => {
    if (isExpanded) {
      memoizedCallback()
    }
  }, [isExpanded, memoizedCallback])

  const handleCheck = () => {
    const formData = new FormData(document.getElementById("form1"))
    const checkbox1 = formData.get("admin-1")
    console.log(checkbox1)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    for (let funcName in data) {
      const transaction = await Moralis.executeFunction(
        changePermissionsFunc(walletAddress, funcName, data[funcName]),
      )
      console.log(transaction)
      await transaction.wait(3)
    }
  }
  // console.log(errors)

  return (
    <>
      <CollapsibleDivStyling>
        <div className="header" {...getToggleProps()}>
          <Row>
            <p className="email">{email}</p>
            <p className="address">{walletAddress}</p>
            <div>
              {isExpanded ? <CaretUpOutlined /> : <CaretDownOutlined />}
            </div>
          </Row>
        </div>
        <DeleteFilled style={{ marginRight: "20px", cursor: "pointer" }} />
        <form id={`form${id}`} style={{ border: "none", display: "flex" }}>
          <input
            type="checkbox"
            name={`admin-${id}`}
            id={`admin-${id}`}
            style={{ marginRight: "20px", cursor: "pointer" }}
            checked={isAdmin}
            onClick={() =>
              confirm("Are you sure you want to demote this admin to user")
            }
          />
        </form>
      </CollapsibleDivStyling>
      <CardSection onSubmit={handleSubmit(onSubmit)} {...getCollapseProps()}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Card
            title="accessMint"
            description="Admin can create (mint) an NFT at binance or at polygon , both erc-721 and 1155 standards."
          >
            <input
              type="checkbox"
              placeholder="accessMint"
              {...register("accessMint")}
            />
          </Card>
          <Card
            title="accessTransfer"
            description="Admin can transfer as a reward nfts to gamers (airdrops)"
          >
            <input
              type="checkbox"
              placeholder="accessTransfer"
              {...register("accessTransfer")}
            />
          </Card>
          <Card
            title="accessPause"
            description="Admin can pause the mint contract so nobody else can use it for the creation process."
          >
            <input
              type="checkbox"
              placeholder="accessPause"
              {...register("accessPause")}
            />
          </Card>
          <Card
            title="accessUnpause"
            description="Admin can impulse the mint contracts so anybody else can use it for the creation process"
          >
            <input
              type="checkbox"
              placeholder="accessUnpause"
              {...register("accessUnpause")}
            />
          </Card>
          <Card
            title="accessBurn"
            description="Admin can burn an NFT in case that it has been created by mistake or for any other reason do not need it anymore."
          >
            <input
              type="checkbox"
              placeholder="accessBurn"
              {...register("accessBurn")}
            />
          </Card>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </div>
        <div>
          <p style={{ fontWeight: "bold", textAlign: "center" }}>
            YLT Balance: {yltBalance}
          </p>
        </div>
      </CardSection>
    </>
  )
}

export default CollapsibleRow
