import styled from "styled-components"
import { css } from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const FirstInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-bottom: 2rem;
  gap: 1rem;
`
