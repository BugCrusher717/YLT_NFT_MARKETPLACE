import FileUploader from "components/FileUploader"
import React from "react"
import { FirstInnerContainer, MainContainer } from "./styles/AdminScreenStyles"
import { UserCard } from "./UserCard"
import { AdminOptions } from "./AdminOptions"
import { options } from "./utils/adminOptions"

import madisen from "../../images/marketplace/offerCards/players/Madisen_Manning_common.webp"
import tokenImage from "../../images/green_logo.webp"
import OptionsBox from "./OptionsBox"
import ChatBar from "components/ChatBar"
import Chat from "screens/Chat"

const dummyData = {
  userImage: madisen,
  userName: "Madisen Manning",
  tokenValue: "0.055",
  tokenValueUSD: "$6 564,23",
}

const AdminScreen = ({
  userName = dummyData.userName,
  userImage = dummyData.userImage,
  tokenImg = tokenImage,
  tokenValue = dummyData.tokenValue,
  tokenValueUSD = dummyData.tokenValueUSD,
}) => {
  return (
    <MainContainer>
      <FirstInnerContainer>
        <UserCard
          userImage={userImage}
          userName={userName}
          tokenImg={tokenImg}
          tokenValue={tokenValue}
          tokenValueUSD={tokenValueUSD}
        />
        <AdminOptions options={options} />
        <OptionsBox action="create nft" to="/admin/createNFT" />
      </FirstInnerContainer>
      <Chat />
    </MainContainer>
  )
}

export default AdminScreen
