import React from "react"
import { NavLink } from "react-router-dom"
import {
  BurgerMenuContainer,
  BurgerMenuInnerContainer,
  CancelButton,
  HeaderItemText,
} from "./HeaderStyling"

export const MobileMenu = ({ openMenu, setOpenMenu, headerItems }) => {
  return (
    <BurgerMenuContainer>
      {openMenu ? (
        <BurgerMenuInnerContainer>
          <CancelButton onClick={() => setOpenMenu(false)}>X</CancelButton>
          {headerItems.map((item, index) => {
            if (item === "TRANSFERS") {
              return (
                <NavLink to="/transfers">
                  <HeaderItemText>{item}</HeaderItemText>
                </NavLink>
              )
            }
            if (item === "COLLECTION") {
              return (
                <NavLink to="/collection">
                  <HeaderItemText>{item}</HeaderItemText>
                </NavLink>
              )
            } else {
              return (
                <NavLink to="/nftBalance">
                  <HeaderItemText>{item}</HeaderItemText>
                </NavLink>
              )
            }
          })}
        </BurgerMenuInnerContainer>
      ) : (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            width={80}
            src={require("../images/mobile_menu.svg").default}
            alt="left"
          />
        </div>
      )}
    </BurgerMenuContainer>
  )
}
