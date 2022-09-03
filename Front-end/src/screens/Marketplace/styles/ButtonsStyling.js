import styled, { css } from "styled-components"

export const ButtonsContainer = styled.div`
  position: absolute;
  left: 27.5%;
  background-color: #242424;
  border-radius: 1rem;
  width: 69.5%;
  height: 4rem;
`

export const LeftButton = styled.button`
  background-color: #242424;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 50%;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #90e040;
  }

  ${({ active }) =>
    active === "left" && active !== "right"
      ? `background-color: #90e040;; border-top-right-radius: 30px; border-bottom-right-radius: 48px;`
      : `background-color: #242424;`}
`

export const RightButton = styled.button`
  background-color: #242424;
  color: #fff;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 100%;
  font-size: 1.5rem;
  text-transform: uppercase;
  width: 50%;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: #90e040;
  }

  ${({ active }) =>
    active === "right" && active !== "left" && active !== ""
      ? `background-color: #90e040;; border-top-left-radius: 30px; border-bottom-left-radius: 48px;`
      : `background-color: #242424;`}
`
