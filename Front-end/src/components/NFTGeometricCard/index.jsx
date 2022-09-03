import React, { useState } from "react"

import greenLogo from "../../images/green_logo.webp"
import {
  ButtonGroup,
  ButtonSelector,
  ColorBrick,
  ColorBrickContainer,
  GeometricCard,
  Graphics,
  IconImg,
  NameBlock,
  PlayerImage,
  PlayerName,
  PlayerStats,
  StatItem,
  TextBrick,
  TextBrickContainer,
  USDValue,
  ValueWrapper,
  WeightText,
  YLTToken,
} from "./styles/CardElements"

const PlayerStat = ({ iconType, weight }) => {
  return (
    <StatItem>
      <IconImg
        src={require(`../../images/account/collection/${iconType}.svg`).default}
      />
      <WeightText>{weight}</WeightText>
    </StatItem>
  )
}

const DynamicSvg = ({ svgName, active }) => {
  switch (svgName) {
    case "Up":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g opacity={active === "Up" ? "1" : "0.16"}>
            <path
              d="M12.9997 7.828V20H10.9997V7.828L5.63568 13.192L4.22168 11.778L11.9997 4L19.7777 11.778L18.3637 13.192L12.9997 7.828Z"
              fill={active === "Up" ? "#b9fd02" : "#242424"}
            />
          </g>
        </svg>
      )
    case "DoubleRectangle":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g opacity={active === "DoubleRectangle" ? "1" : "0.16"}>
            <path
              d="M5 15V17C5 18.054 5.95 19 7 19H10V21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V15H5ZM17 3C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V9H19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H14V3H17Z"
              fill={active === "DoubleRectangle" ? "#b9fd02" : "#242424"}
            />
            <rect
              x="2"
              y="2"
              width="9"
              height="11"
              rx="2"
              fill={active === "DoubleRectangle" ? "#b9fd02" : "#242424"}
            />
            <rect
              x="13"
              y="11"
              width="9"
              height="11"
              rx="2"
              fill={active === "DoubleRectangle" ? "#b9fd02" : "#242424"}
            />
          </g>
        </svg>
      )
    case "Bag":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g opacity={active === "Bag" ? "1" : "0.16"}>
            <path
              d="M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8V9H22V11H20.833L20.076 20.083C20.0552 20.3329 19.9413 20.5658 19.7568 20.7357C19.5723 20.9055 19.3308 20.9999 19.08 21H4.92C4.66925 20.9999 4.4277 20.9055 4.24322 20.7357C4.05875 20.5658 3.94481 20.3329 3.924 20.083L3.166 11H2V9H6V8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2ZM18.826 11H5.173L5.84 19H18.159L18.826 11ZM13 13V17H11V13H13ZM9 13V17H7V13H9ZM17 13V17H15V13H17ZM12 4C10.9738 4 9.98677 4.39444 9.24319 5.10172C8.4996 5.80901 8.05631 6.77504 8.005 7.8L8 8V9H16V8C16 6.97376 15.6056 5.98677 14.8983 5.24319C14.191 4.4996 13.225 4.05631 12.2 4.005L12 4Z"
              fill={active === "Bag" ? "#b9fd02" : "#242424"}
            />
          </g>
        </svg>
      )
    default:
      return null
  }
}

const NFTGeometricCard = ({
  brickColor,
  text,
  playerName,
  usdValue,
  imageUrl,
  cryptoValue,
  isTeam,
  speed,
  dexterity,
  stamina,
  dribbling,
  finishing,
}) => {
  const [activeButton, setActiveButton] = useState("Up")
  return (
    <GeometricCard isTeam={isTeam}>
      <Graphics isTeam={isTeam}>
        <PlayerStats isTeam={isTeam}>
          {speed !== undefined && (
            <PlayerStat isTeam={isTeam} iconType="Run" weight={speed} />
          )}
          {dexterity !== undefined && (
            <PlayerStat isTeam={isTeam} iconType="Wheel" weight={dexterity} />
          )}
          {stamina !== undefined && (
            <PlayerStat isTeam={isTeam} iconType="Stamina" weight={stamina} />
          )}
        </PlayerStats>
        <PlayerImage src={imageUrl} alt="playerImage" />
        <PlayerStats isTeam={isTeam}>
          {dribbling !== undefined && (
            <PlayerStat isTeam={isTeam} iconType="Run" weight={dribbling} />
          )}
          {finishing !== undefined && (
            <PlayerStat isTeam={isTeam} iconType="Wheel" weight={finishing} />
          )}
        </PlayerStats>
      </Graphics>
      <NameBlock>
        <PlayerName isTeam={isTeam}>{playerName}</PlayerName>
        <ValueWrapper>
          <YLTToken src={greenLogo} /> {cryptoValue}
          <USDValue>{` ($ ${usdValue})`}</USDValue>
        </ValueWrapper>
      </NameBlock>
      <ColorBrickContainer isTeam={isTeam}>
        <ColorBrick color={brickColor} />
      </ColorBrickContainer>
      <TextBrickContainer isTeam={isTeam}>
        <TextBrick isTeam={isTeam}>{text}</TextBrick>
      </TextBrickContainer>
      <ButtonGroup>
        <ButtonSelector onClick={() => setActiveButton("Up")} leftCorner="20px">
          <DynamicSvg svgName="Up" active={activeButton} />
        </ButtonSelector>
        <ButtonSelector onClick={() => setActiveButton("DoubleRectangle")}>
          <DynamicSvg svgName="DoubleRectangle" active={activeButton} />
        </ButtonSelector>
        <ButtonSelector
          onClick={() => setActiveButton("Bag")}
          rightCorner="20px"
        >
          <DynamicSvg svgName="Bag" active={activeButton} />
        </ButtonSelector>
      </ButtonGroup>
    </GeometricCard>
  )
}

export default NFTGeometricCard
