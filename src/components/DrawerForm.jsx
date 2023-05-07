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
import CreateCustomerForm from './CreateCustomerForm'

const AddIcon = () => "+"

const DrawerForm = ({ fetchCustomers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button
        leftIcon={<AddIcon/>}
        colorScheme={'teal'}
        onClick={onOpen}
      >
        Create customer
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <CreateCustomerForm fetchCustomers={fetchCustomers}/>
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

export default DrawerForm
