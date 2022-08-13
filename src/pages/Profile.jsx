import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import LogOutHelp from '../components/LogOutHelp'
import NavBar from '../components/NavBar'
import { bottomNavBarContainer, mainBoxesStyle } from '../style'
import im from './pfe.PNG'
const Profile = () => {
    const [file , setFile] = useState(im)
    console.log(file)
  return (
    <>
    <Box {...mainBoxesStyle('full')}>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
        <img src={file} alt='g'/>
        {file.toString()}
    </Box>
      <Flex {...bottomNavBarContainer}>
        <NavBar/>
      </Flex>
      <LogOutHelp />
      </>
  )
}

export default Profile