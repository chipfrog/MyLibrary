import React, { useState } from 'react'
import { Search } from 'semantic-ui-react'

const Searchbar = () => { 
  const [text, setText] = useState()

  return (
    <Search />
  )
}

export default Searchbar
