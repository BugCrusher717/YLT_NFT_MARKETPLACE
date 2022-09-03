import styled from "styled-components"
import { css } from "styled-components"
import DT from "../../../static/design-token.json"
import { Link } from "react-router-dom"

export const OfferBoxContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 25rem;
  margin-top: 5rem;
  width: 100%;
  margin-bottom: 8rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    flex-direction: column;
    margin-bottom: 5rem;

    button {
      width: 70%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    margin-left: -15px;
    margin-right: -15px;
    flex-direction: column;
    height: 680px;
    margin-bottom: 10rem;

    button {
      width: 90%;
      margin: 0 auto;
      margin-left: 2.5rem;
    }

    a {
      font-size: 1.8rem;
      padding: 1rem 0%;
    }
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    flex-direction: column;
    height: 680px;
    margin-top: 2rem;
    width: 105%;

    button {
      width: 85%;
      margin: 0 auto;
    }
  }
`

export const OfferImageContainer = styled.div`
  position: relative;
  width: 70%;

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    width: 110%;
    margin-left: -20px;
    margin-right: -20px;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 103%;
    margin: 0;
  }
`

export const BgImage = styled.img`
  border-radius: 15px;
  position: absolute;
  top: 0;
  height: 27rem;
  width: 95%;
  background-color: #242424;

  @media screen and (max-width: ${DT.breakpoints.md}) {
    width: 100%;
  }
`

export const OfferImage = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 17rem;
  top: -6.25rem;
  left: -38rem;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 6;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    top: 430px;
  }
`
export const OfferImage2 = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 17rem;
  top: -3.5rem;
  left: -20rem;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 5;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    top: 430px;
  }
`
export const OfferImage3 = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 17rem;
  top: -1rem;
  left: -5rem;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 4;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    top: 430px;
  }
`
export const OfferImage4 = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 17rem;
  top: 3rem;
  left: 30rem;
  right: 20rem;
  bottom: 0;
  margin: auto;
  z-index: 3;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    top: 430px;
  }
`
export const OfferImage5 = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 17rem;
  top: 6rem;
  left: 32rem;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.md}) {
    top: 400px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    top: 430px;
  }
`

export const OfferTimerBox = styled.div`
  width: 33%;
  background-color: #292929;
  border-radius: 15px;
  position: absolute;
  padding: 1rem 1.5rem;
  right: 0;
  height: 27rem;

  @media screen and (max-width: ${DT.breakpoints.xl}) {
    width: 30%;
    margin-left: -13px;
    margin-right: 0px;
  }

  @media screen and (max-width: ${DT.breakpoints.sm}) {
    width: 108%;
    top: 400px;
    height: 55%;
    margin-left: -13px;
    margin-right: -14px;
    padding-top: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  @media screen and (max-width: ${DT.breakpoints.xs}) {
    width: 107%;
    top: 400px;
    height: 47%;
    margin-left: -13px;
    margin-right: -14px;
    padding-top: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`

export const OfferTimeTextHeading = styled.div`
  margin: 0rem auto;
  margin-top: 2rem;
  width: 80%;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 5px;
`

export const OfferTimerDiscountBox = styled.div`
  width: 80%;
  font: 2rem;
  background-color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border-radius: 12px;
  margin-top: 2rem;
`

export const OfferPrice = styled.p`
  font-size: 1.5rem;

  ${({ left }) =>
    left &&
    css`
      text-decoration: line-through;
      color: #a3a3a3;
      padding-left: 1rem;
    `}

  ${({ center }) =>
    center &&
    css`
      font-size: 2.2rem;
      color: #e5e91a;
    `}

  ${({ right }) =>
    right &&
    css`
      font-size: 1.6rem;
      color: #fff;
      background-color: #90e040;
      border-radius: 12px;
      padding: 0.5rem 1rem;
    `}
`

export const OfferBgImage = styled.img`
  border-radius: 15px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 0;
`

export const NavBtn = styled.button`
  border-radius: 10px;
  outline: none;
  border: none;
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  width: 60%;
  justify-content: center;
  z-index: 2;
`

export const OfferTimerInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 0.5rem 1rem;

  p {
    font-size: 2.5rem;
    color: #fff;
    font-weight: 500;
  }

  span {
    font-size: 0.5rem;
    font-weight: 200;
    color: #fff;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 8px;
  background: #e12626;
  white-space: nowrap;
  padding: 10px 30px;
  width: 100%;
  text-transform: uppercase;
  color: #fff;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`
