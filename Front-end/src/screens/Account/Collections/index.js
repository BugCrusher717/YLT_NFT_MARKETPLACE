import React from "react"
import Cards from "./Cards"
import CollectionHeader from "./CollectionHeader"
import { CollectionPage } from "./styles/CollectionElements"

const CollectionNftCards = () => {
  return (
    <CollectionPage>
      <CollectionHeader />
      <Cards />
    </CollectionPage>
  )
}

export default CollectionNftCards
