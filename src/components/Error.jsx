import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = ({message}) => {
  return (
    <Alert status='error' position={'fixed'} left={'50%'} transform={'translate(-50%)'} top={'47%'}  width={'container.lg'}>
      <AlertIcon />
      {message}
    </Alert>
  )
}

export default Error