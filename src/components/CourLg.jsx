import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const CourLg = ({nom , preview , created, nomProf,prenom}) => {
  return (
    <Box w={600}>
        <Heading textAlign='start'>{nom}</Heading>
        <Heading textAlign='start' as='h6' fontSize={12}><em>cree le {created.split('T')[0]+' à '+created.split('T')[1].split('.')[0]}</em></Heading>
        <Text>{preview}</Text>
        <Text textAlign='end'>Enseignant : {nomProf.toUpperCase()} {prenom}</Text>
    </Box>
  )
}

export default CourLg