import react, { useState } from "react"
import { useMoralis } from "react-moralis"
import { getEllipsisTxt } from "helpers/formatters"
import Blockie from "../Blockie"
import { Button, Card, Modal } from "antd"
import Address from "../Address/Address"
import { SelectOutlined } from "@ant-design/icons"
import { getExplorer } from "helpers/networks"
import Text from "antd/lib/typography/Text"
import { connectors } from "./config"
import Dropdown from "../Dropdown"
import {
  AccountContainer,
  AccountText,
  AccountText2,
  ConnectorContainer,
  ConnectorInnerContainer,
  Icon,
  InnerContainer,
} from "./styles/AccountElements"
import { useHistory } from "react-router"

function Account() {
  const { authenticate, isAuthenticated, account, chainId, logout } =
    useMoralis()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [dropdown, seTdropdown] = useState(false)
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false)
  const history = useHistory()
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      seTdropdown(false)
    } else {
      seTdropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      seTdropdown(false)
    } else {
      seTdropdown(false)
    }
  }

  const authUser = async () => {
    await authenticate({
      provider: "web3Auth",
      chainId: "0x61",
      theme: "light",
      appLogo: "/applogo.webp",
      clientId:
        "BKNZR_vNmy3w-Ni4p2q1-RX-xq00yFvutjahw_TuAQJps7Xd-2d_dV9AlRO_Mz7tSWgjMjdcbfhrQ9QNXXouWNI",
    })
    history.push("/myaccount")
  }
  if (!isAuthenticated || !account) {
    return (
      <>
        <div onClick={authUser}>
          <AccountText>Authenticate</AccountText>
        </div>
        <Modal
          visible={isAuthModalVisible}
          footer={null}
          onCancel={() => setIsAuthModalVisible(false)}
          bodyStyle={{
            padding: "15px",
            fontSize: "17px",
            fontWeight: "500",
          }}
          style={{ fontSize: "16px", fontWeight: "500", zIndex: 100 }}
          width="340px"
        >
          <InnerContainer>Connect Wallet</InnerContainer>
          <ConnectorContainer>
            {connectors.map(({ title, icon, connectorId }, key) => (
              <ConnectorInnerContainer
                key={key}
                onClick={async () => {
                  try {
                    await authenticate({ provider: connectorId })
                    window.localStorage.setItem("connectorId", connectorId)
                    setIsAuthModalVisible(false)
                  } catch (e) {
                    console.error(e)
                  }
                }}
              >
                <Icon src={icon} alt={title} />
                <Text style={{ fontSize: "14px" }}>{title}</Text>
              </ConnectorInnerContainer>
            ))}
          </ConnectorContainer>
        </Modal>
      </>
    )
  }

  return (
    <>
      {/* <button
        onClick={async () => {
          try {
            console.log("change")
            await web3._provider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x38" }],
            });
            console.log("changed")
          } catch (e) {
            console.error(e);
          }
        }}
      >
        Hi
      </button> */}

      <AccountContainer>
        <Blockie currentWallet scale={3} />
        <AccountText2 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <span onClick={() => setIsModalVisible(true)}>
            {getEllipsisTxt(account, 6)}
          </span>
          {dropdown && <Dropdown />}
        </AccountText2>
      </AccountContainer>
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        bodyStyle={{
          padding: "15px",
          fontSize: "17px",
          fontWeight: "500",
        }}
        style={{ fontSize: "16px", fontWeight: "500" }}
        width="400px"
      >
        Account
        <Card
          style={{
            marginTop: "10px",
            borderRadius: "1rem",
          }}
          bodyStyle={{ padding: "15px" }}
        >
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>
          </div>
        </Card>
        <Button
          size="large"
          type="primary"
          style={{
            width: "100%",
            marginTop: "10px",
            borderRadius: "0.5rem",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={async () => {
            await logout()
            window.localStorage.removeItem("connectorId")
            setIsModalVisible(false)
          }}
        >
          Disconnect Wallet
        </Button>
      </Modal>
    </>
  )
}

export default Account
