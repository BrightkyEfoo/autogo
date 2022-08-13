import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import LogOutHelp from '../components/LogOutHelp'
import NavBar from '../components/NavBar'
import { bottomNavBarContainer, mainBoxesStyle } from '../style'

const Services = () => {
  return (
    <>
    <Box {...mainBoxesStyle('full')}>Services</Box>
    <Flex {...bottomNavBarContainer}>
        <NavBar />
      </Flex>
      <LogOutHelp />
    </>
  )
}

export default Services