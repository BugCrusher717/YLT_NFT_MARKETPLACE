import React, { StrictMode } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { MoralisProvider } from "react-moralis"
import "./index.css"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import NFTBalance from "components/NFTBalance"
import { Toaster } from "react-hot-toast"
const APP_ID = "4Fx2JqqD8VL7AmLrSVtkAXxfWbjDEBuFCRhBR52k"
const SERVER_URL = "https://ihmsvytaqkdp.usemoralis.com:2053/server"
// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL

const Application = () => {
  const isServerInfo = APP_ID && SERVER_URL ? true : false
  //Validate
  if (!APP_ID || !SERVER_URL)
    throw new Error(
      "Missing Moralis Application ID or Server URL. Make sure to set your .env file.",
    )
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Toaster />
        <App isServerInfo />
      </MoralisProvider>
    )
  else {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NFTBalance />
      </div>
    )
  }
}

ReactDOM.render(
  <StrictMode>
    <Application />,
  </StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()
