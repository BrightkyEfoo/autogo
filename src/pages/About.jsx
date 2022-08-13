import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import LogOutHelp from '../components/LogOutHelp';
import NavBar from '../components/NavBar';
import { bottomNavBarContainer, mainBoxesStyle } from '../style';

const About = () => {
  return (
    <>
      <Box {...mainBoxesStyle('full')}>About</Box>
      <Flex {...bottomNavBarContainer}>
        <NavBar />
      </Flex>
      <LogOutHelp />
    </>
  );
};

export default About;
