import { useCallback, useEffect, useRef, useState } from "react"
import { useMoralis, useMoralisWeb3Api } from "react-moralis"
import { toast } from "react-hot-toast"
import {
  AccountBalance,
  AccountInfoDetailsStyling,
  ArrowRight,
  BackgroundImage,
  BalanceContainer,
  ButtonTopUp,
  Camera,
  CashBalance,
  FirstRow,
  LeftSide,
  MyNFTCardsContainer,
  MyNFTCardsImage,
  NFTCardsTitle,
  NFTTitleContainer,
  ProfileImage,
  ProfileName,
  RightSide,
  SecondRow,
  SettingsIcon,
  SettingsText,
  TokenBalance,
  TokenSymbol,
} from "./styles/AccountInfoDetailsStyling"

function AccountInfoDetails({
  profileName = "Add profile name",
  accountBalance = "0.055",
  cashBalance = "($6 564,23)",
}) {
  const cameraInpRef = useRef(null)
  const [cameraClick, setCameraClick] = useState(false)
  const [yltBalance, setYLTBalance] = useState(null)
  const { Moralis } = useMoralis()
  const { user } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [profilePicture, setProfilePicture] = useState(null)
  const [tempProfileName, setTempProfileName] = useState(null)
  const memoizedCallback = useCallback(async () => {
    if (user) {
      const bal = await Web3Api.account.getTokenBalances({
        address: user.attributes.accounts[0],
        chain: "bsc",
        token_addresses: ["0x77C32223FBD713dd321Eab47239Cba309573EA88"],
      })
      setYLTBalance(
        bal.length > 0
          ? bal[0]?.balance.slice(0, bal[0].balance.length - 18)
          : "0",
      )
    }
  }, [Web3Api.account, user])

  useEffect(() => {
    memoizedCallback()
  }, [memoizedCallback])

  useEffect(() => {
    if (cameraClick) {
      cameraInpRef.current.click()
      setCameraClick(false)
    }
  }, [cameraClick])
  const handleFileInput = async () => {
    if (cameraInpRef.current.files.length > 0) {
      const img = cameraInpRef.current.files[0]
      const file = new Moralis.File(img.name, img)
      await file.saveIPFS()
      user.set("profile_picture", file._ipfs)
      await user.save()
      setProfilePicture(file._ipfs)
      toast.success("Your profile picture has been updated successfully")
    }
  }
  const editProfile = async () => {
    const name = prompt("Please enter a new nickname")
    if (name) {
      user.set("nickname", name)
      await user.save()
      setTempProfileName(name)
      toast.success("Your nickname has been updated successfully")
    }
  }
  return (
    <AccountInfoDetailsStyling>
      <BackgroundImage />
      <FirstRow>
        <LeftSide>
          <ProfileImage
            src={
              profilePicture ||
              user?.attributes.profile_picture ||
              require("../../../images/account/Ellipse 58.png").default
            }
          />
          <Camera
            src={require("../../../images/account/camera.svg").default}
            onClick={() => setCameraClick(true)}
          />
          <input
            type="file"
            style={{ display: "none" }}
            ref={cameraInpRef}
            accept="image/*"
            onChange={handleFileInput}
          />
          <ProfileName>
            <p>{tempProfileName || profileName}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="black"
              style={{ cursor: "pointer", height: "20px" }}
              onClick={editProfile}
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </ProfileName>
        </LeftSide>
      </FirstRow>
      <SecondRow>
        <AccountBalance>
          <BalanceContainer>
            <TokenSymbol
              src={require("../../../images/account/coin.svg").default}
            />
            <TokenBalance>{yltBalance + " YLT"}</TokenBalance>
          </BalanceContainer>
          <CashBalance>{cashBalance}</CashBalance>
          <ButtonTopUp>top up</ButtonTopUp>
        </AccountBalance>

        <MyNFTCardsContainer>
          <NFTTitleContainer>
            <NFTCardsTitle>my nft cards</NFTCardsTitle>
            <ArrowRight
              src={require("../../../images/account/arrowRight.svg").default}
            />
            <MyNFTCardsImage
              src={require("../../../images/account/cards.png").default}
            />
          </NFTTitleContainer>
        </MyNFTCardsContainer>
      </SecondRow>
    </AccountInfoDetailsStyling>
  )
}

export default AccountInfoDetails
