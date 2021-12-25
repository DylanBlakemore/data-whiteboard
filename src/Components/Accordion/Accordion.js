import './Accordion.scss'

import React from 'react'
import lodash from 'lodash'
import {
  Accordion as AccessibleAccordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion'

export default function Accordion({ items }) {
  return <AccessibleAccordion allowMultipleExpanded allowZeroExpanded>
    {lodash.map(items, ({ title, key, body }) => {
      return <AccordionItem key={ key }>
        <AccordionItemHeading>
          <AccordionItemButton>
            { title }
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          { body }
        </AccordionItemPanel>
      </AccordionItem>
    })}
  </AccessibleAccordion>
}
