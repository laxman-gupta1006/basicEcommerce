import React from 'react'
import { Input, InputGroup,Icon } from 'rsuite'

export const Search = () => {
   return (
      <div className="search">
      <InputGroup size="sm">
      <Input placeholder="search item"/>
      <InputGroup.Button>
        <Icon icon="search" />
      </InputGroup.Button>
    </InputGroup>
    </div>
   )
}
