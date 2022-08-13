import { Box, Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import LogOutHelp from '../components/LogOutHelp';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import { GrContactInfo, GrScorecard, GrBook } from 'react-icons/gr';
import UserDetails from '../components/UserDetails';
import { containerStyle } from '../Data';
import { AccountSectionSelectorStyle, c } from '../style.js';
import UserCourses from '../components/UserCourses';
const Account = () => {
  const [selected, setSelected] = useState(1);
  const userData = useSelector(state => state.user);
  const allCourses = useSelector(state => state.courses);
  const userCourses = userData.courses;
  console.log(userData);
  console.log(allCourses);
  console.log(userCourses);
  return (
    <>
      <Flex position="relative" h="100vh" w="100vw" pt={65}>
        <VStack
          w="fit-content"
          align="start"
          justify="center"
          ml={2}
          pr={5}
          h="100vh"
          spacing={5}
          position="sticky"
          flexShrink={0}
        >
          <HStack {...AccountSectionSelectorStyle(selected, setSelected, 1)}>
            <Icon as={GrContactInfo} />
            <Text>User details</Text>
          </HStack>

          <HStack {...AccountSectionSelectorStyle(selected, setSelected, 2)}>
            <Icon as={GrBook} />
            <Text>My courses</Text>
          </HStack>
          <HStack {...AccountSectionSelectorStyle(selected, setSelected, 3)}>
            <Icon as={GrScorecard} />
            <Text>Scorebord</Text>
          </HStack>
        </VStack>
        <Flex {...containerStyle}>
          <Box flexGrow={1}>{selected === 1 && <UserDetails {...userData} />}
          {selected === 2 && <UserCourses {...allCourses}/>}</Box>
        </Flex>
        <LogOutHelp />
      </Flex>
      <Flex position="fixed" w="100vw" {...c} bottom={6} left={0}>
        <NavBar />
      </Flex>
    </>
  );
};

export default Account;
