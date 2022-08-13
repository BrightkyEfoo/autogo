import { Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Advantages = ({icone , titre , preview , iconeColor , iconeBg , botom}) => {
  return (
    <HStack justify='start' spacing={14} p={5} bgColor='rgba(255,255,255,0.5)' rounded='2xl'>
        <Icon as={icone} fontSize={70} p={3} borderRadius='50%' bgColor={iconeBg} color={iconeColor} />
        <VStack align='start'>
            <Heading>{titre}</Heading>
            <Text textAlign='start'>{preview}
            </Text>
            {botom}
        </VStack>
    </HStack>
  )
}

export default Advantages