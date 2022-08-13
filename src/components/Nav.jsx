import { Box, Flex, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navStyle } from '../style';
import { topNavView } from '../Data';
import SearchBar from './SearchBar';
import { defaultEqualityCheck } from 'reselect';
import axios from 'axios';
import { CoursesActions } from '../rtk/features/BearerToken/CoursesSlice';
import { UsersActions } from '../rtk/features/BearerToken/UsersSlices';

const Nav = ({ scrolled }) => {
  const navigate = useHistory()
  const id = useSelector(state => state.user.id);
  const Token = useSelector(state => state.header.token);
  const dispatch = useDispatch();
  const tab = topNavView(id);
  const handleClick = (a,route) => {
    if (a === 2) {
        axios
          .get('http://localhost:9000/api/courses', {
            headers: {
              authorization: Token,
            },
          })
          .then(res => {
            console.log(res);
            dispatch(CoursesActions.setAll(res.data.data));
            axios
              .get('http://localhost:9000/api/users', {
                headers: {
                  authorization: Token,
                },
              })
              .then(res => {
                dispatch(UsersActions.setAll(res.data.data));// ici, tout a fini de charger
                navigate.push(route)
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
        
    }else {
      navigate.push(route)
    }
  };
  const t = tab.map(element => {
    return (
      <Link key={'navSection' + tab.indexOf(element)} >
        <Box
          id={'navSection' + tab.indexOf(element)}
          onClick={() => handleClick(tab.indexOf(element),element.route)}
        >
          {element.title}
        </Box>
      </Link>
    );
  });
  return (
    <HStack {...navStyle(scrolled)}>
      <Flex flexGrow={1} align="center" justify="start">
        <SearchBar />
      </Flex>

      {t}
    </HStack>
  );
};

export default Nav;
