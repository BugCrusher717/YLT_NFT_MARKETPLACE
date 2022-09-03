/* eslint-disable prettier/prettier */
import { Layout, Tabs } from "antd"
import "antd/dist/antd.css"
import Account from "components/Account/Account"
import Chains from "components/Chains"
import DEX from "components/DEX"
import FooterComponent from "components/footerComponent"
import Header from "components/Header"
import NativeBalance from "components/NativeBalance"
import NFTBalance from "components/NFTBalance"
import SearchCollections from "components/SearchCollection"
import TokenPrice from "components/TokenPrice"
import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import CollectionNftCards from "screens/Account/Collections"
import MenuItems from "./components/MenuItems"
import AccountScreen from "./screens/Account/CoachRoom"
import MyTeams from "screens/Account/MyTeams"
import Marketplace from "./screens/Marketplace"
import Transfers from "./screens/Transfers"

import "react-toastify/dist/ReactToastify.css"
const { Footer } = Layout
import "./style.css"
import AdminScreen from "screens/Admin/AdminScreen"
import CreateNFT from "screens/Admin/CreateNFT"
import SuperAdmin from "screens/Superadmin/SuperAdmin"
import CoachesRoom from "./screens/Account/CoachRoom"
import Messages from "components/Messages"
import { MessagesInput } from "screens/Marketplace/components/MessagesInput"
import AllUsers from "components/AllUsers"
import Chat from "screens/Chat"
import ChatBar from "components/ChatBar"
import { MainContainer } from "static/AppStyles"
import { AirdropNFT } from "screens/Admin/AirdropNFT"

const App = ({ isServerInfo }) => {
  const {
    account,
    isWeb3Enabled,
    enableWeb3,
    isAuthenticated,
    isWeb3EnableLoading,
  } = useMoralis()
  const [showChatBox, setShowChatBox] = useState(false)
  const { user } = useMoralis()

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId")
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled])

  return (
    <Layout
      style={{
        backgroundColor: "#f6f6f7",
        maxWidth: "1440px",
        margin: "0 auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Header setShowChatBox={setShowChatBox} showChatBox={showChatBox} />

        <MainContainer>
          <Switch>
            <Route exact path="/nftBalance">
              <NFTBalance isServerInfo={isServerInfo} />
            </Route>

            <Route path="/1inch">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/admin" exact>
              <AdminScreen />
            </Route>
            <Route path="/nftMarket">
              <Marketplace />
              {/* <NFTTokenIds
                collectionId={inputValue}
                setInputValue={setInputValue}
              />*/}
            </Route>
            <Route path="/transfers">
              <Transfers />
            </Route>
            <Route path="/nftTransactions">
              <NFTBalance />
            </Route>
            <Route path="/myaccount">
              <AccountScreen nickname={user?.attributes.nickname} />
            </Route>
            <Route path="/collection">
              <CollectionNftCards />
            </Route>
            {/* <Route path="/myteams">
              <MyTeams />
            </Route> */}
            {/* <Route path="/coach">
              <CoachesRoom />
            </Route> */}
            <Route exact path="/admin/createNFT">
              <CreateNFT />
            </Route>

            <Route exact path="/admin/super">
              <SuperAdmin />
            </Route>
            
            <Route exact path="/chat">
              <Chat />
            </Route>
            <Route path="/">
              <Redirect to="/nftMarket" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </MainContainer>
        {showChatBox && <AllUsers />}
        {isAuthenticated && account && <ChatBar />}
        <FooterComponent />
      </Router>
    </Layout>
  )
}

export default App
