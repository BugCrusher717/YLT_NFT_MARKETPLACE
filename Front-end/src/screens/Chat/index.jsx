import React, { useState, useEffect, useMemo } from "react"
import {
  useMoralis,
  useMoralisCloudFunction,
  useMoralisQuery,
} from "react-moralis"
import {
  ChatContainer,
  ChatContainerHeader,
  ChatForm,
  ChatHeaderTitle,
  ChatLeftContainer,
  ChatRightContainer,
  Chats,
  ChatSendButton,
  ChatTextInput,
  OtherMessage,
  User,
  UsersTitle,
  YourMessage,
} from "./styles"

function Chat() {
  const { data } = useMoralisCloudFunction("getUsers")
  const { user, Moralis } = useMoralis()
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState([])
  const [messages, setMessages] = useState([])
  const [receiver, setReceiver] = useState({})
  const {
    data: messagesData,
    isLoading,
    error,
  } = useMoralisQuery("Messages", (query) => query.ascending("createdAt"), [], {
    live: true,
  })
  useEffect(() => {
    if (data) {
      let arr = []
      data.forEach((elem, idx) => {
        if (user.attributes.ethAddress !== elem.attributes.ethAddress) {
          arr.push(elem.attributes)
        }
      })
      setUsers(arr)
    }
  }, [data, user])
  useMemo(() => {
    let arr = []
    messagesData.map((message) => {
      if (
        (message.attributes.ethAddress === user.attributes.ethAddress &&
          message.attributes.receiver === receiver.ethAddress) ||
        (message.attributes.ethAddress === receiver.ethAddress &&
          message.attributes.receiver === user.attributes.ethAddress)
      ) {
        arr.push(message.attributes)
      }
    })
    setMessages(arr)
  }, [user, receiver, messagesData])
  const sendMessage = (e) => {
    e.preventDefault()
    if (message.length <= 0) return
    const Messages = Moralis.Object.extend("Messages")
    const messages = new Messages()
    messages
      .save({
        message,
        username: user?.getUsername(),
        ethAddress: user?.get("ethAddress"),
        receiver: receiver?.ethAddress,
      })
      .then(() => {
        setMessage("")
        // endOfMessageRef?.current?.scrollIntoView({ behavior: "smooth" })
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <ChatHeaderTitle>Chat with your friends</ChatHeaderTitle>
      <ChatContainer>
        <ChatLeftContainer>
          <UsersTitle>Friends</UsersTitle>
          {users.map((user, idx) => (
            <User
              onClick={() => {
                setReceiver(user)
              }}
              key={idx}
            >
              {user.nickname
                ? user.nickname
                : user.accounts
                ? user.accounts[0]
                : user.username}
            </User>
          ))}
        </ChatLeftContainer>
        {receiver?.username && (
          <ChatRightContainer>
            <ChatContainerHeader>
              Your Chat with{" "}
              {receiver.nickname
                ? receiver.nickname
                : receiver.accounts
                ? receiver.accounts[0]
                : receiver.username}
            </ChatContainerHeader>
            <Chats>
              {messages.map((message, idx) => (
                <>
                  {message.ethAddress === user.attributes.ethAddress ? (
                    <YourMessage>{message.message}</YourMessage>
                  ) : (
                    <OtherMessage>{message.message}</OtherMessage>
                  )}
                </>
              ))}
            </Chats>
            <ChatForm>
              <ChatTextInput
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              />
              <ChatSendButton onClick={sendMessage}>Send</ChatSendButton>
            </ChatForm>
          </ChatRightContainer>
        )}
      </ChatContainer>
    </>
  )
}

export default Chat
