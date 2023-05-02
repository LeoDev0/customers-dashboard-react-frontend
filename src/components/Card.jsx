import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { capitalizeFirstLetter } from '../helpers/Utils'

export default function CardWithImage({ id, name, email, age, gender }) {
  const genderForPic = gender === "MALE" ? "men" : "women"

  return (
    <Center py={6}>
      <Box
        _hover={{
          transform: 'scale(1.05)',
          transition: 'transform .2s',          
        }}
        transition='transform .2s'
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              `https://randomuser.me/api/portraits/${genderForPic}/${id}.jpg`
            }
            alt={'Customer'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={2} align={'center'} mb={15}>
            <Tag borderRadius={'full'}>{id}</Tag>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'gray.500'}>{email}</Text>
            <Text color={'black'}><strong>Age</strong>: {age}</Text>
            <Text color={'black'}><strong>Gender</strong>: {capitalizeFirstLetter(gender)}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
