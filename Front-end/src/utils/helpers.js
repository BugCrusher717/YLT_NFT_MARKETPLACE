import { ABI } from "./writeContract"

export const changePermissionsFunc = (walletAddress, funcName, checked) => {
  return {
    contractAddress: "0xb6097a8F9c2674Bd22468EfCeF87C2782BC2A208",
    functionName: funcName,
    abi: ABI,
    params: {
      _address: walletAddress,
      _value: checked,
    },
  }
}
