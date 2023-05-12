import {
  Button, 
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { useRef } from 'react'
import UpdateCustomerForm from './UpdateCustomerForm.jsx'

const UpdateCustomerDrawer = ({ customerId, customer, fetchCustomers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button
        mt={8}
        bg={'gray.200'}
        onClick={onOpen}
        color={'black'}
        rounded={'full'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        _focus={{
          bg: 'green.500'
        }}
      >
        Update
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xl'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update {customer.name}</DrawerHeader>

          <DrawerBody>
            <UpdateCustomerForm customer={customer} customerId={customerId} fetchCustomers={fetchCustomers}/>
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme={'teal'}
              onClick={onClose}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default UpdateCustomerDrawer;
