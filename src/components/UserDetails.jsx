import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { BsCheck, BsPencil, BsTrash } from 'react-icons/bs';
import { GrFormAdd } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../rtk/features/BearerToken/UserSlice';
import './style1.css';
const UserDetails = ({
  nom,
  prenom,
  birthDate,
  status,
  phone,
  email,
  courses,
}) => {
  const disptach = useDispatch();
  const UserDets = useSelector(state => state.user);
  const Token = useSelector(state => state.header.token);
  const [modifyName, setModifyName] = useState(false);
  const [modifyPrename, setModifyPrename] = useState(false);
  const [modifyBirth, setModifyBirth] = useState(false);
  const [modifyEmail, setModifyEmail] = useState(false);
  const [modifyNumero, setModifyNumero] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [userInfos, setUserInfos] = useState({
    nom,
    prenom,
    birthDate,
    status,
    email,
    courses,
    numero: phone,
  });
  const handleSumbmitProfile = ()=>{

  }
  let putData = {};
  const [loading, setLoading] = useState('0');
  const t = {
    nom: setModifyName,
    prenom: setModifyPrename,
    birthDate: setModifyBirth,
    email: setModifyEmail,
    numero: setModifyNumero,
  };
  const states = {
    nom: modifyName,
    prenom: modifyPrename,
    birthDate: modifyBirth,
    email: modifyEmail,
    numero: modifyNumero,
  };
  const handleClick = a => {
    t[a](true);
  };
  const handleChange = (e, a) => {
    switch (a) {
      case 'nom':
        setUserInfos({
          ...userInfos,
          nom: e.target.value,
        });
        break;
      case 'prenom':
        setUserInfos({
          ...userInfos,
          prenom: e.target.value,
        });
        break;
      case 'birthDate':
        setUserInfos({
          ...userInfos,
          birthDate: e.target.value,
        });
        break;
      case 'email':
        setUserInfos({
          ...userInfos,
          email: e.target.value,
        });
        console.log(e.target.value);
        if (
          !/^[a-zA-Z][0-9a-zA-Z._-]+@[a-zA-Z][a-zA-Z0-9_.-]+\.[a-zA-Z]{2,4}$/i.test(
            e.target.value
          )
        ) {
          setEmailErr(true);
          console.log('email invalide');
        } else {
          setEmailErr(false);
        }
        break;
      default:
        break;
    }
  };
  const handleSubmit = a => {
    setLoading(a);
    putData = { ...UserDets, ...userInfos };
    console.log(putData);

    console.log(Token.split(' ')[1]);
    axios
      .put('http://localhost:9000/api/setuser', putData, {
        headers: {
          authorization: Token,
        },
      })
      .then(res => {
        disptach(UserActions.set(putData));
        setLoading(0);
        t[a](false);
      })
      .catch(err => {
        setLoading(0);
        t[a](false);
        document.getElementById('account' + a).style.backgroundColor =
          '#ec6d6dff';
        setTimeout(
          () =>
            (document.getElementById('account' + a).style.backgroundColor =
              'transparent'),
          2000
        );
      });
  };
  const handleCancel = a => {
    t[a](false);
    setUserInfos({
      nom,
      prenom,
      birthDate,
      status,
      email,
      courses,
      numero: phone,
    });
  };

  const formCon = (a, type) => {
    return (
      <FormControl>
        <InputGroup w={500}>
          <InputLeftAddon
            w={110}
            children={a}
            bgColor="blue.500"
            color="white"
            fontWeight={700}
          />
          <Input
            id={'account' + a}
            type={type}
            value={userInfos[a].toLowerCase()}
            pr={20}
            readOnly={states[a] ? false : true}
            onChange={e => handleChange(e, a)}
            transition="all ease 300ms"
            borderColor={emailErr && type === 'email' ? 'red' : 'blue.400'}
            borderWidth={emailErr && type === 'email' ? 2 : 1}
            _focusVisible={{
              borderColor: emailErr && type === 'email' ? 'red' : 'blue.400',
              borderWidth: emailErr && type === 'email' ? 2 : 1,
            }}
          />
          {states[a] ? (
            <InputRightElement
              w="fit-content"
              children={
                <HStack pr={2}>
                  {loading === a ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.100"
                      color="blue.500"
                      size="sm"
                    />
                  ) : (
                    <Icon
                      as={BsCheck}
                      color="white"
                      bgColor={
                        emailErr && type === 'email' ? 'gray' : 'blue.400'
                      }
                      rounded="md"
                      p={1}
                      fontSize={30}
                      onClick={
                        type === 'email'
                          ? () => (emailErr ? null : handleSubmit(a))
                          : () => handleSubmit(a)
                      }
                    />
                  )}
                  <Icon
                    as={BsTrash}
                    color="white"
                    bgColor="red"
                    rounded="md"
                    p={1}
                    fontSize={30}
                    onClick={() => handleCancel(a)}
                  />
                </HStack>
              }
            />
          ) : (
            <InputRightElement
              children={
                <Icon
                  as={BsPencil}
                  color="white"
                  bgColor="gray"
                  rounded="md"
                  p={1}
                  fontSize={30}
                  onClick={() => handleClick(a)}
                />
              }
            />
          )}
        </InputGroup>
      </FormControl>
    );
  };

  return (
    <VStack w="100%" mt={10}>
      <Heading>Informations</Heading>
      <VStack align="start">
        <Heading>Photo de profil</Heading>
        <Text>
          Avec une photo à jour, votre enseignant(e) vous identifiera plus
          facilement sur son planning.
        </Text>
      </VStack>
      <HStack w="100%" justify="center" spacing={15}>
        <VStack justify="start" p={6}>
          {formCon('nom', 'text')}
          {formCon('prenom', 'text')}
          {formCon('birthDate', 'date')}
          {formCon('email', 'email')}
          {formCon('numero', 'text')}
        </VStack>
        <VStack bgColor="transparent" justify="start" align="start">
          <Flex
            w={250}
            h={250}
            rounded="xl"
            bgColor="gray.300"
            justify="center"
            align="center"
            fontSize={100}
            fontWeight={700}
            color="white"
          >
            <Text>
              {nom.toUpperCase()[0]} {prenom.toUpperCase()[0]}
            </Text>
          </Flex>
          <Button colorScheme="purple" w={250}>
            <HStack onClick={()=>handleSumbmitProfile()}>
              <Icon as={GrFormAdd} color="white" fontSize={25} />
              <Text>Ajoutez une photo</Text>
            </HStack>
          </Button>
          <Input type="file" id="submitProfile"/>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default UserDetails;
