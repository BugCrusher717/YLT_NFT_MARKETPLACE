import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { filtersOptions } from "../dummy-data"
import "../styles/accordionStyling.css"
import { CheckboxContainer } from "../styles/FiltersStyling"

const Filters = () => {
  return (
    <Accordion>
      {filtersOptions.map((filter) => (
        <AccordionItem key={filter.id}>
          <AccordionItemHeading>
            <AccordionItemButton>{filter.name}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {filter.options.map((option) => (
              <CheckboxContainer key={option.id}>
                <p>{option.name}</p>
                <input type="checkbox" name={option.name} id={option.name} />
              </CheckboxContainer>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default Filters
