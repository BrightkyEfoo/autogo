import { Box, HStack, Icon, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiReloadGunBarrel } from 'react-icons/gi';
const SearchBar = () => {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);
  const [searchBarValue, setsearchBarValue] = useState('');
  const [searchBarLengthState, setSearchBarLengthState] = useState(null);
  const handleClick = () => {
    setSearchBarDisplay(!searchBarDisplay);
  };
  const handleChange = e => {
    if (e.target.value === ' ') {
      setsearchBarValue(null);
    } else {
      setsearchBarValue(e.target.value);
    }
    if (searchBarValue.length < 3) {
      setSearchBarLengthState('false');
    } else {
      setSearchBarLengthState('true');
    }
  };
  return (
    <HStack
      id="search"
      w="fit-content"
      borderColor="white"
      borderWidth={searchBarDisplay && 2}
      p={2}
      h={10}
    >
      <Icon
        as={FaSearch}
        color="white"
        onClick={() => handleClick()}
        cursor="pointer"
      />
      {searchBarDisplay && (
        <>
          <Input
            type="text"
            w={300}
            h={8}
            borderStyle="none"
            placeholder="eg : les paneaux"
            value={searchBarValue}
            color='white'
            onChange={e => handleChange(e)}
            _focusVisible={{ border: 'none' }}
          />
          {searchBarLengthState &&
            (searchBarLengthState === 'true' ? (
              <Box position="fixed" top={61} left={8} color="white">
                results
              </Box>
            ) : (
              <Box color="white" position="fixed" top={61} left={8}  w={300}>
                veuillez saisir plus de 3 caracteres
              </Box>
            ))}
        </>
      )}
    </HStack>
  );
};

export default SearchBar;
