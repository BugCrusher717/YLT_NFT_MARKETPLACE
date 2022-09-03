import NFTGeometricCard from "components/NFTGeometricCard"
import React from "react"
import { nftCards } from "screens/Marketplace/dummy-data"
import OfferCards from "../../../OfferCards";
// import OfferCars from "../../../OfferCards";

import {
  CardOptions,
  CardsContainer,
  CollectionContainer,
} from "./styles/CollectionElements"

const Cards = () => {
  return (
    <CollectionContainer>
      <CardsContainer>
        {/* {nftCards.map((card) => (
          <NFTGeometricCard
            key={card.id}
            brickColor={card.brickColor}
            text={card.sport}
            imageUrl={card.imgSrc}
            playerName={card.title}
            usdValue={card.priceUSD}
            cryptoValue={card.price}
            speed={card.speed}
            dexterity={card.dexterity}
            stamina={card.stamina}
            dribbling={card.dribbling}
            finishing={card.finishing}
          />
        ))} */}
        <OfferCards />
      </CardsContainer>
    </CollectionContainer>
  )
}

export default Cards
