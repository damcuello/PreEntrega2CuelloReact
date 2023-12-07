import { Center } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Center p='10'>
        {greeting}
    </Center>
  )
}

export default ItemListContainer