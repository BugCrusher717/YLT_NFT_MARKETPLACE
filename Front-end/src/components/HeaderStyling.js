import styled, { css } from "styled-components"
import DT from "../static/design-token.json"

export const HeaderStyling = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  max-width: 90rem;
  display: flex;
  height: 8vh;
  justify-content: space-around;
  align-items: center;
  font-family: Roboto, sans-serif;
  background-color: #fff;
  top: 0.5rem;
  border-radius: 10px;
  box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 1px 17px 1px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    height: 7vh;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    height: 5vh;
    width: 100vw;
  }
`

export const LogoContainer = styled.div`
  background-color: #242424;
  width: 10%;
  border-radius: 10px;
  clip-path: polygon(0 0, 100% 0%, 79% 100%, 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  height: 100%;

  @media screen and (max-width: 480px) {
    width: 22%;
  }
`

export const NavLogo = styled.img`
  width: 20%;
  position: absolute;
  left: 1.5rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 15%;
  }

  @media screen and (max-width: 480px) {
    width: 15%;
    left: 1rem;
  }
`

export const NavText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 1rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    right: 1.5rem;
  }
`

export const HeaderItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  margin-left: 5rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 40%;

    a {
      font-size: 0.5rem;
    }
  }

  @media (max-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`

export const HeaderItemText = styled.p`
  color: #242424;
  padding-bottom: 3px;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #90e040;
  cursor: pointer;
  margin-right: 30px;
  width: 100%;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    font: 0.5rem;
  }

  @media (max-width: ${DT.breakpoints.md}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`

export const BurgerMenuContainer = styled.div`
  top: 0.5rem;
  padding: 1rem;

  p {
    font-size: 1.2rem;

    &:hover {
      color: #ccc;
    }
  }
  @media (min-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`

export const BurgerMenuInnerContainer = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  backdrop-filter: blur(19px);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  border-radius: 10px;
`

export const CancelButton = styled.p`
  color: #fff;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  font-size: 1rem;

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    right: 100px;
  }
`

export const SubscribeBtn = styled.button`
  background-color: #3985f5;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #fff;
  outline: none;
  border: none;
  text-transform: uppercase;

  /* @media screen and (max-width: ${DT.breakpoints.xl}) {
    padding: 0.3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-right: 0.5rem;
  } */
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;

  @media (min-width: ${DT.breakpoints.xl2}) {
    width: 25%;
  }

  @media (max-width: ${DT.breakpoints.xl2}) {
    width: 25%;
  }

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 28%;
  }

  @media screen and (max-width: ${DT.breakpoints.lg}) {
    display: none;
  }
`
