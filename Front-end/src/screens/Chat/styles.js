import styled from "styled-components"
import DT from "../../static/design-token.json"

export const ChatHeaderTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: #242424;
  border-bottom: 1px solid #242424;
  text-transform: uppercase;
`

export const ChatContainer = styled.div`
  display: flex;
  height: 67vh;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  text-transform: uppercase;
`

export const UsersTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: #242424;
  margin-bottom: 1rem;
`
export const ChatLeftContainer = styled.div`
  flex: 0.25;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  border-right: 1px solid #242424;
  height: 100%;
`
export const ChatRightContainer = styled.div`
  flex: 0.75;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-left: 1rem;
  justify-content: space-between;
  height: 95%;
`
export const User = styled.button`
  font-size: large;
  font-weight: bold;
  color: #242424;
  margin-bottom: 1.2rem;
  text-align: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ChatContainerHeader = styled.h1`
  font-size: large;
  font-weight: bold;
  color: #242424;
  margin-bottom: 1.2rem;
`
export const ChatTextInput = styled.input`
  outline: none;
  width: 90%;
  padding: 0.5rem;
  background-color: #242424;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: large;
`
export const ChatForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`
export const ChatSendButton = styled.button`
  outline: none;
  background-color: #242424;
  border-radius: 10px;
  border: none;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
  cursor: pointer;
`
export const Chats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
export const YourMessage = styled.div`
  align-self: flex-end;
  background-color: #128c7e;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`
export const OtherMessage = styled.div`
  align-self: flex-start;
  background-color: #242424;
  color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`
