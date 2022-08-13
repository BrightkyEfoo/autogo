import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourLg from '../components/CourLg';
import LogOutHelp from '../components/LogOutHelp';
import NavBar from '../components/NavBar';
import { bottomNavBarContainer, mainBoxesStyle } from '../style';

const Courses = () => {
  const dispatch = useDispatch();
  const Token = useSelector(state => state.header.token);
  const courses = useSelector(state => state.courses.courses) 
  const users = useSelector(state => state.users.Users)
  console.log(users)
  return (
    <Box {...mainBoxesStyle('full')}>
      {courses.map(cours => (
        <CourLg {...cours} nomProf={users.filter(user => user.id === cours.teacher_id)[0].nom} prenom={users.filter(user => user.id === cours.teacher_id)[0].prenom} />
      ))}
      <Flex {...bottomNavBarContainer}>
        <NavBar />
      </Flex>
      <LogOutHelp />
    </Box>
  );
};

export default Courses;
