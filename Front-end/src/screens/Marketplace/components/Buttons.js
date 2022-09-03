import React, { useState } from "react"
import {
  ButtonsContainer,
  LeftButton,
  RightButton,
} from "../styles/ButtonsStyling"

const Buttons = () => {
  const [active, setActive] = useState("")
  return (
    <ButtonsContainer>
      <LeftButton
        active={active}
        type="button"
        onClick={() => setActive("left")}
      >
        official offer
      </LeftButton>
      <RightButton
        active={active}
        type="button"
        onClick={() => setActive("right")}
      >
        auction
      </RightButton>
    </ButtonsContainer>
  )
}

export default Buttons
