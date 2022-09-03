import React from "react"
import { sports } from "./dummy_data"
import SportTag from "./SportTag"
import {
  ColleactionHeaderTitle,
  CollectionContainer,
  SportContainer,
  SportTagList,
} from "./styles/CollectionElements"

const CollectionHeader = () => {
  return (
    <CollectionContainer>
      <SportContainer>
        <ColleactionHeaderTitle>COLLECTION</ColleactionHeaderTitle>
        <SportTagList>
          {sports.map((sport) => (
            <SportTag name={sport.name} key={sport.id} />
          ))}
        </SportTagList>
      </SportContainer>
    </CollectionContainer>
  )
}

export default CollectionHeader
