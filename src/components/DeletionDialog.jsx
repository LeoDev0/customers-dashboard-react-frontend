import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
  Stack
} from '@chakra-ui/react'
import { useRef } from 'react'
import { deleteCustomer } from '../services/client.js'
import { successNotification, errorNotification } from '../services/notification.js'

const DeletionDialog = ({ customerId, customerName, fetchCustomers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <Button
        mt={8}
        color={'white'}
        bg={'red.400'}
        rounded={'full'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        _focus={{
          bg: 'green.500'
        }}
        onClick={onOpen}
      >
        Delete
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete <strong>{customerName}</strong>? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' ml={3} onClick={() => {
                deleteCustomer(customerId)
                  .then((res) => { 
                    console.log(res)
                    successNotification(
                      'Customer deleted',
                      `Customer ${customerName} was successfully deleted`
                    )
                    fetchCustomers()
                  })
                  .catch((error) => { 
                    errorNotification(
                      error.code,
                      error?.response?.data?.message
                    )
                  })
                onClose()
              }}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeletionDialog
