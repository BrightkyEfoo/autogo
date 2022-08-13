import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import LogOutHelp from '../components/LogOutHelp';
import Main from '../components/Main';
import Nav from '../components/Nav';
import NavBar from '../components/NavBar';

const Home = ({scrolled}) => {
  return (
    <Box position="relative" h="100vh" w="100vw">
      <Main />
      <LogOutHelp />
      <Nav scrolled = {scrolled} />

      <Flex
        position="fixed"
        w="100vw"
        align="center"
        justify="center"
        bottom={6}
        left={0}
        zIndex={3}
        pt={5}
      >
        <NavBar />
      </Flex>
    </Box>
  );
};

export default Home;
