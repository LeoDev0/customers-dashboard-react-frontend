import { Wrap, WrapItem, Spinner, Text } from '@chakra-ui/react'
import SideBarWithHeader from './components/shared/SideBar'
import CardWithImage from './components/Card'
import CreateCustomerDrawer from './components/CreateCustomerDrawer'
import { useEffect, useState } from 'react'
import { getCustomers } from './services/client'
import { errorNotification } from './services/notification'

const App = () => {

  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchCustomers = () => {
    setLoading(true)
    getCustomers().then((res) => {
      setCustomers(res.data)
    }).catch((err) => {
      console.log(err)
      setError(err.response.data.message)
      errorNotification(
        err.code,
        err.response.data.message
      )
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  if (loading) {
    return (
      <SideBarWithHeader>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </SideBarWithHeader> 
    )
  }

  if (error) {
    return (
      <SideBarWithHeader>
        <CreateCustomerDrawer fetchCustomers={fetchCustomers}/>
        <Text textAlign={'center'} verticalAlign={'middle'} mt={20}>Oops, there was an error</Text>
      </SideBarWithHeader>
    )
  }

  if (customers.length === 0) {
    return (
      <SideBarWithHeader>
        <CreateCustomerDrawer fetchCustomers={fetchCustomers}/>
        <Text textAlign={'center'} verticalAlign={'middle'} mt={20}>No customers found</Text>
      </SideBarWithHeader>
    )
  }

  return (
    <SideBarWithHeader>
      <CreateCustomerDrawer fetchCustomers={fetchCustomers}/>
      <Wrap justify={"center"} spacing={"30px"}>
        {customers.map((customer, index) => (
          <WrapItem key={index}>
            <CardWithImage
              {...customer}
              fetchCustomers={fetchCustomers}
            />
          </WrapItem>
        ))}
      </Wrap>
    </SideBarWithHeader>
  )
}

export default App
