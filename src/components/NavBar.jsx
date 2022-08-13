import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {GoHome} from 'react-icons/go'
import {FaUserAstronaut} from 'react-icons/fa'
import {GiBlackBook} from 'react-icons/gi'
import {MdChat} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { NavBarActions } from '../rtk/features/BearerToken/NavBarSlice'
import store from '../rtk/app/Store'



let iconStyle = {
    cursor:'pointer',
    w :'60px',
    p:2,
    h:'60px',
    _hover:{
        bgColor : 'gray.300',
        w : 50, 
        h : 50,
        borderRadius : '50%'
    },
    transition: 'all ease 500ms'
}
const NavBar = () => {

    const dispatch = useDispatch()
    const [selected , setSelected] = useState('')
    // const handleDisplayChatBox = ()=>{
    //     document.getElementById('chatBox').style.top = 0;
    //     document.getElementById('chatBox').style.right = '20px';
    // }
    const handleMouseOver = ()=>{
        document.getElementById('navbar').style.opacity='1'
    }
    const handleMouseLeave = ()=>{
        setTimeout(()=>{
            document.getElementById('navbar').style.opacity='0.2'
        },1000)
    }
    const handleLoaded = ()=>{
        document.getElementById('navbar').style.bottom='20px'
        document.getElementById('navbar').style.opacity='0.2'
    }
    setTimeout(handleLoaded, 1000)
    setTimeout(() => {
        document.getElementById('navbar').style.bottom='-40px' 
    }, 1500);
    setTimeout(() => {
        document.getElementById('navbar').style.bottom='-30px' 
    }, 2000);
  return (
    
    <HStack spacing={7} align='center' justify='center' id = 'navbar' position='absolute' bottom='-500px' transition='all ease 500ms' p={3} pb={0} rounded='full' bgColor='gray.100' onMouseLeave={()=> handleMouseLeave()} onMouseOver={()=> handleMouseOver()}>
        <Link to='/'>
            <VStack {...iconStyle} onClick={()=>{
            setSelected('')
            dispatch(NavBarActions.set('ic1'))
            }}>
                <Icon id='ic1' as = {GoHome}  pt= {1} title='home' { ...{transform : store.getState().navBar.id === 'ic1' ? 'scale(1.2)' : 'scale(2)'}}/>
                {store.getState().navBar.id === 'ic1' ? <Text fontSize={10}>home</Text> : null}
            </VStack>
        </Link>

        <Link to='/account' onClick={()=>{
            setSelected('')
            dispatch(NavBarActions.set('ic2'))
            }}>
            <VStack {...iconStyle} spacing={1} >
                <Icon id='ic2' pt= {1} as = {FaUserAstronaut}  title='account' { ...{transform : store.getState().navBar.id === 'ic2' ? 'scale(1.2)' : 'scale(2)'}}/>
                {store.getState().navBar.id === 'ic2' ? <Text fontSize={10}>profile</Text> : null}
            </VStack>
        </Link>
        <Link to='/courses' onClick={()=>{
            setSelected('')
            dispatch(NavBarActions.set('ic3'))
            }}> 
            <VStack {...iconStyle} spacing={1} >
                <Icon id='ic3' as = {GiBlackBook} pt= {1}  title='courses' { ...{transform : store.getState().navBar.id === 'ic3' ? 'scale(1.2)' : 'scale(2)'}}/>
                {store.getState().navBar.id === 'ic3' ? <Text fontSize={10}>courses</Text> : null}
            </VStack>
        </Link>
        <VStack {...iconStyle} spacing={1} onClick={()=>{
            setSelected('ic4')
            dispatch(NavBarActions.set('ic4'))
            }}>
            <Icon id='ic4' as = {MdChat} pt= {1} title='chat' { ...{transform : store.getState().navBar.id === 'ic4' ? 'scale(1.2)' : 'scale(2)'}}/>
            {selected === 'ic4' ? <Text fontSize={10}>chat</Text> : null}
        </VStack>
    </HStack>
  )
}

export default NavBar