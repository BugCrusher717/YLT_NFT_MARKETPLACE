import { PlusOutlined } from "@ant-design/icons"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useMoralisCloudFunction } from "react-moralis"
import CollapsibleRow from "./CollapsibleRow"
import {
  CancelBtn,
  Form,
  InnerTitle,
  MainContainer,
  MainTitle,
  ModalBackground,
} from "./SuperAdminStyling"
import { useMoralis } from "react-moralis"
import AdminScreen from "screens/Admin/AdminScreen"

export default function SuperAdmin() {
  const [newUser, setNewUser] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [visible, setVisible] = useState(false)
  const { data } = useMoralisCloudFunction("getUsers")
  const [users, setUsers] = useState([])
  const { Moralis } = useMoralis()

  useEffect(() => {
    if (data) {
      let arr = []
      data.forEach((elem, idx) => {
        arr.push(elem.attributes)
      })
      setUsers(arr)
    }
  }, [data])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <MainContainer>
      <MainTitle>Super Admin Page</MainTitle>
      <AdminScreen />

      {users.map(
        (
          { username, ethAddress, smartContactsFunctions, isAdmin, nickname },
          idx,
        ) => (
          <CollapsibleRow
            key={idx}
            id={idx}
            email={nickname || username}
            walletAddress={ethAddress}
            smartContactsFunctions={smartContactsFunctions}
            isAdmin={isAdmin}
            admin={admin}
            setAdmin={setAdmin}
            users={users}
          />
        ),
      )}
    </MainContainer>
  )
}
