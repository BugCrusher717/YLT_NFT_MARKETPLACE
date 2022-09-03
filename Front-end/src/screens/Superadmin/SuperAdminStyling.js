import styled from "styled-components"
import { css } from "styled-components"

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`

export const MainTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #242424;
  margin-bottom: 2rem;
`

export const InnerTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 2rem;
`

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    174deg,
    rgba(89, 89, 89, 1) 20%,
    rgba(210, 210, 210, 1) 50%,
    rgba(89, 89, 89, 1) 80%
  );
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CancelBtn = styled.button`
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  padding: 2rem;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
`

export const Form = styled.form`
  width: 30%;
  height: 40%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  background-color: transparent;
  top: 20%;
  box-shadow: 0px 0px 40px 3px rgba(0, 0, 0, 0.34);
  padding: 1rem;

  input {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
  }

  input[type="submit"] {
    background-color: #d2fa64;
  }
`

// Card styles
export const CollapsibleDivStyling = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  background-color: #ddd;
  border-radius: 10px;
  margin-bottom: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .header {
    background-color: #ddd;
    cursor: pointer;
    border-radius: 10px;
    width: 100%;
  }
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  margin: 10;
  padding-right: 1rem;
  padding-left: 1rem;

  p {
    font-size: 1.1rem;
    color: #000;
  }

  .email {
    width: 20%;
  }

  .address {
    width: 50%;
  }
`

export const CardSection = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  margin-bottom: 10px;
  background-color: #eee;
  flex-wrap: wrap;
  position: relative;

  input {
    width: 100%;
    margin: 0 auto;
  }
`

export const CardStyling = styled.label`
  width: 25%;
  height: 140px;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 16px;
  margin-top: 1rem;
  cursor: pointer;
  max-height: 140px;
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    left: 50%;
  }

  .title {
    border-bottom: 1px solid #000;
    text-align: center;
    text-transform: capitalize;
    font-weight: bold;
  }

  &:nth-child(4) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  &:nth-child(5) {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`
export const SubmitBtn = styled.button`
  width: 15rem;
  height: 3rem;
  border-radius: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  background-color: brown;
  color: #fff;
  outline: none;
  font-weight: bold;
  position: absolute;
  bottom: 0.3rem;
  right: 6.5rem;
`
