import styled from "styled-components"
import DT from "../../../static/design-token.json"

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 1px solid #292929;
  padding: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`
export const IconImg = styled.img`
  height: 0.7rem;
  width: 0.7rem;
`

export const WeightText = styled.p`
  color: #242424;
  font-size: xx-small;
  /* @media only screen and (max-width: ${DT.breakpoints.sm}) {
    color: red;
  } */
`

export const ButtonGroup = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
`

export const ButtonSelector = styled.button`
  width: 33.33%;
  display: flex;
  border-radius: 10px;
  border-bottom-left-radius: ${(props) => props.leftCorner};
  border-bottom-right-radius: ${(props) => props.rightCorner};
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover {
    background: #bebebe;
  }
`

export const NameBlock = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayerName = styled.p`
  text-transform: uppercase;
  font-size: larger;
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;
`
export const ValueWrapper = styled.div`
  color: #eb0555;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
`

export const YLTToken = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
`

export const USDValue = styled.span`
  color: #646464;
`

export const Graphics = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`

export const PlayerImage = styled.img`
  height: 12rem;
  margin-bottom: 1rem;
`

export const PlayerStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const GeometricCard = styled.div`
  height: 22rem;
  width: 16.5rem;
  padding-top: 1rem;
  border: 1px solid #bebebe;
  border-radius: 20px;
  position: relative;
`

export const ColorBrickContainer = styled.div`
  height: 3rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 2rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: #f6f6f7;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
`
export const TextBrickContainer = styled.div`
  height: 8rem;
  width: 1rem;
  position: absolute;
  left: -1px;
  top: 8rem;
  border: 1px solid #bebebe;
  border-left: none;
  background-color: #f6f6f7;
  border-radius: 1px;
  display: flex;
  align-items: center;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
`
export const ColorBrick = styled.div`
  background-color: ${(props) => props.color};
  padding-right: 3px;
  border-top-right-radius: 60px 20px;
  border-bottom-right-radius: 60px 20px;
  width: 70%;
  height: 80%;
`
export const TextBrick = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  width: 70%;
  text-align: center;
  font-weight: bold;
  color: #000;
  height: 80%;
  text-transform: uppercase;
  font-size: 9px;
`
