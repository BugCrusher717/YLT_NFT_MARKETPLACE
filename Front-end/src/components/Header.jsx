/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Account from "./Account/Account"
import {
  HeaderItemsContainer,
  HeaderItemText,
  HeaderStyling,
  LogoContainer,
  NavLogo,
  NavText,
  RightContainer,
  SubscribeBtn,
} from "./HeaderStyling"
import { MobileMenu } from "./MobileMenu"

function Header({ setShowChatBox, showChatBox }) {
  const [openMenu, setOpenMenu] = useState(false)

  const headerItems = [
    "MARKETPLACE",
    "TRANSFERS",
    "MY ACCOUNT",
    "COLLECTION",
    "SWAP",
    "CHAT",
    "ADMIN",
  ]
  return (
    <HeaderStyling>
      <LogoContainer>
        <NavLogo src={require("../images/Logo.svg").default} />
        <NavText>ylg</NavText>
      </LogoContainer>
      <HeaderItemsContainer className="shadow bottom">
        {headerItems.map((item, index) => {
          if (item === "MARKETPLACE") {
            return (
              <NavLink to="/nftMarket" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
          if (item === "TRANSFERS") {
            return (
              <NavLink to="/transfers" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
          if (item === "COLLECTION") {
            return (
              <NavLink to="/collection" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
          if (item === "MY ACCOUNT") {
            return (
              <NavLink to="/myaccount" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
          if (item === "SWAP") {
            return (
              <a href="https://swap.yourlifegames.com" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </a>
            )
          }
          if (item === "CHAT") {
            return (
              <NavLink to="/chat" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
          if (item === "ADMIN") {
            return (
              <NavLink to="/admin" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          } else {
            return (
              <NavLink to="/nftBalance" key={index}>
                <HeaderItemText>{item}</HeaderItemText>
              </NavLink>
            )
          }
        })}
      </HeaderItemsContainer>
      <RightContainer>
        <div>
          <SubscribeBtn>Join Newsletter</SubscribeBtn>
        </div>
        <Account />
      </RightContainer>
      <MobileMenu
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        headerItems={headerItems}
      />
    </HeaderStyling>
  )
}

export default Header
