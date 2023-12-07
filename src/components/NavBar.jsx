import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <div>
            <Flex bg='gray.600' color='yellow.400'>

                <Box p='4' >
                    <Text fontSize='lg'>
                    Tienda del Buhonero
                    </Text>
                </Box>
                <Spacer />



                <Menu>
                    <MenuButton >
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Hierbas medicinales</MenuItem>
                        <MenuItem>Armas</MenuItem>
                        <MenuItem>Municiones</MenuItem>
                    </MenuList>
                </Menu>


                <Spacer />



                <Box p='4' >
                    <CartWidget />
                </Box>
            </Flex>


        </div>
    )
}

export default NavBar