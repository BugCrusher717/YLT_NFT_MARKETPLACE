/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import NFTGeometricCard from "components/NFTGeometricCard"
import React from "react"
import { useEffect, useState } from "react"
// import { nftCards } from "../dummy-data"
// import { CardsContainer } from "../styles/InfoElements"
import { useChain, useMoralis, useMoralisWeb3Api } from "react-moralis"
import { set } from "react-hook-form"
import axios from "axios"

const OfferCards = () => {
  const { Moralis } = useMoralis()
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState("not-loaded")

  useEffect(() => {
    loadNFTs()
   }, [])

  const ABI = [
    {
      inputs: [],
      name: "fetchMarketItems",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "itemId",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "seller",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
            {
              internalType: "enum YLNFTMarketplace.State",
              name: "state",
              type: "uint8",
            },
          ],
          internalType: "struct YLNFTMarketplace.MarketItem[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ]

  const ABI1 = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ]

  async function loadNFTs() {
    
    const sendOptions = {
      contractAddress: "0x89Be7FcC0c5deB6dAfDBA4013e3D78bAC7210556",
      functionName: "fetchMarketItems",
      abi: ABI,
    }

    
    const data = await Moralis.executeFunction(sendOptions);
    
    if(data)
    {
      console.log("data", data);
    }
    const items = await Promise.all(
      data.map(async (i) => {
        const sendOptions1 = {
          contractAddress: "0x90B8897ab06CBd4b9211bf2E679394651cfF2264",
          functionName: "tokenURI",
          abi: ABI1,
          params: {
            tokenId: i.tokenId,
          },
        }

        const tokenUri = await Moralis.executeFunction(sendOptions1)
        const metaTokenUri = "https://gateway.moralisipfs.com/ipfs/" + tokenUri
        const meta = await axios.get(metaTokenUri)
        const imgSrc = "https://gateway.moralisipfs.com/ipfs/" + meta.data.image
        const price = i.price + " BNB"
        const dprice = "300"
        let item = {
          id: i.itemId,
          imgSrc: imgSrc,
          sport: meta.data.sport,
          title: meta.data.nftName,
          price: price, //BNB
          priceUSD: dprice,
          speed: meta.data.characteristics[0],
          dexterity: meta.data.characteristics[2],
          finishing: meta.data.characteristics[4],
        }
        return item
      }),
    )
    
    setNfts(items);
    setLoadingState("loaded");
    alert("update");
  }

  if (loadingState === "loaded" && !nfts.length)
    return <h1 className="py-10 px-20 text-3xl">No assets owned</h1>
  return (
    <>
      {nfts.map((card) => (
        <NFTGeometricCard
          key={card.id}
          text={card.sport}
          playerName={card.title}
          usdValue={card.priceUSD}
          imageUrl={card.imgSrc}
          cryptoValue={card.price}
          speed={card.speed}
          stamina={card.stamina}
          finishing={card.finishing}
        />
      ))}
    </>
  )
}

export default OfferCards
