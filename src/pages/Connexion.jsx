import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Image,
  Flex
} from "@chakra-ui/react";
import {Link , useHistory } from 'react-router-dom'
import axios from "axios";
import { useDispatch , useSelector} from "react-redux"
import { postAPIConnectionURL } from "../Data";
import Logo from '../components/logo.svg'
import { headerActions } from "../rtk/features/BearerToken/HeaderSlice";
// import store from "../rtk/app/Store";
// import { useState } from "react";
import { UserActions } from "../rtk/features/BearerToken/UserSlice";

export default function App() {
  const navigate = useHistory()
  // const [ErrorMessage , SetErrorMessage] = useState('')
  const handlePasswordExit = (e)=>{
    e.preventDefault()
    document.getElementById('wrongPasswordContainer').style.top='-120vh'
    // document.getElementById('wrongPasswordContainer').style.display='none'
  } 
    const headerState = useSelector((state) => state.header.token)
    const dispatch = useDispatch()
    return (
    <VStack bg="gray.100" align="center" justify="center" h="100vh" position='relative' spacing={5} pb={10} >
      
      <Flex id='wrongPasswordContainer' bgColor = '#716c6cae' h='100vh' w='100vw' position='fixed' align="center" justify="center" top='-150vh' transition='all ease 700ms' zIndex={5} onClick={(e)=>handlePasswordExit(e)} >
          <Flex h={50} w={300} id='wrongPassword' align="center" justify="center" rounded='2xl' bgColor ='#ffffffff'  color='red' fontSize={25} fontWeight={700} transition='all ease 700ms'>
            <Text>Mot de passe incorrect</Text>
          </Flex>
      </Flex>
      <Link to='/'>
            <Image  src={Logo} alt="logo" borderRadius='full' boxSize='100px' bgColor='transparent'/>
      </Link>      <Box bg="white" p={7} rounded="lg" w={350}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={async (values) => {
            await axios.post(postAPIConnectionURL , values)
              .then(res => {
                // console.log(res.data.msg,'\n token : ',res.data.token)
                dispatch(headerActions.set('Bearer ' + res.data.token))
                dispatch(UserActions.set(res.data.user))
                console.log(headerState)
                navigate.push('/account')
              })
              .catch(err => {
                console.log(err.response.data.msg)
                dispatch(headerActions.set(''))
                console.log(headerState)
                // SetErrorMessage(headerState)
                document.getElementById('wrongPasswordContainer').style.top='0px'
                // document.getElementById('wrongPasswordContainer').style.display='flex'
              })
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start" >
                <Text>Connectez vous via votre email</Text>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
                <Text cursor='pointer'>J'ai oublié mon mot de passe</Text>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
      <Link to='/inscription'>
        <Text mb="5">Je m'inscris</Text>
      </Link>
    </VStack>
  );
}
