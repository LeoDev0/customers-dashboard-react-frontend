import { Wrap, WrapItem, Spinner, Text } from '@chakra-ui/react'
import SideBarWithHeader from './components/shared/SideBar'
import CardWithImage from './components/Card'
import { useEffect, useState } from 'react'
import { getCustomers } from './services/client'

const App = () => {

  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getCustomers().then((res) => {
      setCustomers(res.data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
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

  if (customers.length === 0) {
    return (
      <SideBarWithHeader>
        <Text>No customers found</Text>
      </SideBarWithHeader>
    )
  }

  return (
    <SideBarWithHeader>
      <Wrap justify={"center"} spacing={"30px"}>
        {customers.map((customer, index) => (
          <WrapItem key={index}>
            <CardWithImage
              {...customer}  
            />
          </WrapItem>
        ))}
      </Wrap>
    </SideBarWithHeader>
  )
}

export default App
