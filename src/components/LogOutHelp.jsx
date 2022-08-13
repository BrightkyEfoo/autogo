import { Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { UserActions } from '../rtk/features/BearerToken/UserSlice'
import { headerActions } from '../rtk/features/BearerToken/HeaderSlice'
import {logOutHelpIconStyle} from '../style'
const LogOutHelp = () => {
    const dispacth = useDispatch()
    const handleLogOut = ()=>{
        dispacth(UserActions.clear())
        dispacth(headerActions.clear())
    }
    const id = useSelector(state => state.user.id)
  return (
    <Flex justify='space-between' align='center' direction='column' h='full' p ={6} w={20} position='fixed' top={0} right={0} zIndex={5}>
        <Link to='/help'>
            <Icon {...logOutHelpIconStyle('HelP')} />
        </Link>
        <Link to='/connexion' onClick={()=>handleLogOut()}>
            {id===0?  <Icon {...logOutHelpIconStyle('login')} /> : <Icon {...logOutHelpIconStyle('logOut')} />}
        </Link>
    </Flex>
  )
}

export default LogOutHelp