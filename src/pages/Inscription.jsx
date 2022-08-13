import { Box, Button, Flex, FormControl , FormLabel, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text, VStack } from '@chakra-ui/react'
import {Link , useHistory} from "react-router-dom";
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useDispatch /*, useSelector*/} from "react-redux"
import {useFormik} from 'formik'
import axios from 'axios'
import { useState } from 'react'
import { postAPIInscriptionURL } from '../Data'
import {MdEmail} from 'react-icons/md'
import {AiFillEye , AiFillEyeInvisible} from 'react-icons/ai'
import { headerActions } from '../rtk/features/BearerToken/HeaderSlice';
import { UserActions } from '../rtk/features/BearerToken/UserSlice';
import Logo from '../components/logo.svg'
const formsErrorsStyle = {
    fontSize : 15,
    color : 'red'
}

let canSubmit = false;
const inputColorStyle = {
    bgColor :'white',
    mb : 5
}

const Inscription = () => {
    const dispatch = useDispatch()
    const navigate = useHistory()
    const formik = useFormik({
        initialValues:{
            password: "",
            nom: "",
            prenom: "",
            birthDate: "",
            phone: "",
            email:"",
            password2 :"",
            status : false //0 signifie prof et 1 enseignant
        },
        onSubmit: (values) =>{
            // e.preventDefault()
            setSubmitLoad(true)
            values.phone = phoneState
            console.log(values);
            axios.post(postAPIInscriptionURL,values)
                .then(response =>{
                    console.log(response.data.msg , response.data.token)
                    dispatch(headerActions.set('Bearer ' + response.data.token))
                    dispatch(UserActions.set(response.data.user))
                    navigate.push('/account')
                    setSubmitLoad(false)
                })
                .catch(err => {
                    setErrorPostState(err.response.data.msg)
                    setSubmitLoad(false)
                    document.getElementById('errorContainer').style.top = '0px'
                })
        },
        validate:values=>{
            let errors = {}
            canSubmit=true
            if(values.password.length < 8){
                errors.password = 'Au moins 8 characteres'
                canSubmit = false
            }
            if(!(/^[a-zA-Z][0-9a-zA-Z._-]+@[a-zA-Z][a-zA-Z0-9_.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))){
                errors.email = 'veuillez saisir un email valide'
                canSubmit &&= false
            }
            if(values.password !== values.password2){
                errors.password2 = 'pas de concordance'
                canSubmit &&= false
            }
            return errors
        },
        // validationSchema
    })
    const [phoneState ,setPhoneState] = useState('')
    const [errorPostState , setErrorPostState] = useState('')
    const [passState , setPassState] = useState(false)
    const [submitLoad , setSubmitLoad] = useState(false)
    const [passType , setPassType] = useState('password')
    const phoneHandleChange = ()=>{
        let a = document.querySelectorAll('.form-control')[0]
        setPhoneState(a.value)
    }
    const handleBlurError = ()=>{
        document.getElementById('errorContainer').style.top='-150vh'
    }
    const handleDisableView = ()=>{
        setPassState(false)
        setPassType('password')
        // document.getElementById('password').
    }
    const handleView = ()=>{
        setPassState(true)
        setPassType('text')
    }
    console.log(formik.errors)
  return (
    <VStack bg="white" align="center" justify="center"  spacing={5} pb={10} pt={10} >
        <Flex w='100vw' h='100vh' onClick={()=>handleBlurError()} bgColor='#6967679b' id='errorContainer' align='center' justify='center' zIndex={999} position='fixed' top='-150vh' transition='all ease 700ms'>
            <Flex h = {50} w= {300} id='errorBlock' color='red' fontSize={25} bgColor='white' rounded='lg'  align='center' justify='center'><Text textAlign='center'>{errorPostState}</Text></Flex>
        </Flex>
        <Link to='/'>
            <Image src={Logo} alt="logo" borderRadius='full' boxSize='100px' bgColor='transparent'/>
        </Link>
        <Text>Nouveau chez autogo?</Text>
        <VStack bgColor='gray.100' p={5} spacing={5} rounded='xl'>
            <form onSubmit={(e)=>{
                e.preventDefault()
                return formik.handleSubmit()}}>
                <FormControl isRequired>
                    <FormLabel htmlFor='nom'>Nom</FormLabel>
                    <Input type='text' id='nom' name='nom' {...inputColorStyle} onChange={formik.handleChange} value={formik.values.nom}/>

                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor='prenom'>Prenom</FormLabel>
                    <Input type='text' id='prenom' name='prenom' {...inputColorStyle} onChange={formik.handleChange} value={formik.values.prenom}/>

                </FormControl>
                <FormControl id='phone' isRequired zIndex={45} mb={5}>
                    <FormLabel htmlFor='phone'>phone</FormLabel>
                    
                    <PhoneInput
                    country={'us'}
                    value={ phoneState}
                    onChange={()=>phoneHandleChange() }
                    type='text' 
                    name='phone'/>
                    {/* <Input type='phone' id='phone' name='phone' onChange={formik.handleChange} value={formik.values.phone}/> */}

                </FormControl>
                <FormControl >
                    <FormLabel htmlFor='email'>email</FormLabel>
                    <InputGroup>
                        <InputLeftElement
                            children = {<MdEmail/>}
                        />
                        <Input type='email' id='email' name='email' {...inputColorStyle} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
                    </InputGroup>
                    {formik.errors.email&& formik.touched.email ? <Box {...formsErrorsStyle}>{formik.errors.email}</Box> : null}

                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='birthDate'>date de naissance</FormLabel>
                    <Input type='date' id='birthDate' name='birthDate' {...inputColorStyle} onChange={formik.handleChange} value={formik.values.birthDate}/>

                </FormControl>
                <FormControl>

                    <FormLabel htmlFor='password'>mot de passe</FormLabel>
                    <InputGroup>
                    
                        <Input type={passType} id='password' name='password' {...inputColorStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                        <InputRightElement children={!passState?<AiFillEye id='openEye' onClick={()=>handleView()} transition = 'all ease 350ms' />:<AiFillEyeInvisible id='closeEye' onClick={()=>handleDisableView()} transition = 'all ease 350ms' />}/>
                    </InputGroup>
                    {formik.errors.password && formik.touched.password ? <Box {...formsErrorsStyle}>{formik.errors.password}</Box> : null}
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password2'>retapez votre mot de passe</FormLabel>
                    <Input type='password' id='password2' name='password2' {...inputColorStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password2} />
                    {formik.errors.password2 && formik.touched.password2 ? <Box {...formsErrorsStyle}>{formik.errors.password2}</Box> : null}
                </FormControl>
                <FormControl>
                    <HStack align='center' spacing ={2}><Text fontSize={18}>Je suis un enseignant</Text> <input type='checkbox' id='status' name='status' onChange={formik.handleChange} value={formik.values.status}/> </HStack>
                    
                </FormControl>
                <Button type='submit' w='full' rounded='3xl' bgColor = 'blue.400' color='white' fontWeight='500' {...{disabled :  canSubmit ? false : 'disabled' }}  _hover = {{bgColor : canSubmit ? 'blue.500' : 'red.300'}}>{submitLoad ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.100' color='blue.500' size='md' /> : 'Valider'}</Button>
            </form>
        </VStack>
        <Link to='/connexion'>
            <Text cursor='pointer'>Non j'ai deja un compte</Text>
        </Link>
    </VStack>
  )
}

export default Inscription