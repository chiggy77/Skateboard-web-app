import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, MenuDivider, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Img1 from '../Photos/Product_Page/1.png'
import Img2 from "../Photos/Product_Page/2.png"
import Img3 from "../Photos/Product_Page/3.png"
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate('/products');
  };

  return (
    <Flex w={'90%'}p={10}m={'auto'} display={['block','block','flex']}>
    <Card  bg={"#e6e6e6"}w={['fit-content','fit-content','40vh']}mt={5}shadow={'none'}mr={5}>
      <CardBody >
        <Box bg={'#cbc7c6'}>
        <Image
          m={'auto'}
          src={Img1}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text>
          A medium concave deck made of seven layers of 100% Canadian maple wood. The graphic is made by Goan artist ‘Malcolm Rebello’. The board is available in different sizes. A guide is provided below to help you pick your first board but it is not necessary to follow it strictly.
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 2399.00
          </Text>
        </Stack>
      </CardBody>
    </Card>
    <Card bg={"#e6e6e6"}w={['fit-content','fit-content','40vh']}mt={5}shadow={'none'}mr={5}>
      <CardBody >
        <Box bg={'#cbc7c6'}>
        <Image
          m={'auto'}
          src={Img2}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text>
          A medium concave deck made of seven layers of 100% Canadian maple wood. The board is available in different sizes. A guide is provided below to help you pick your first board but it is not necessary to follow it strictly.
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 2299.00
          </Text>
        </Stack>
      </CardBody>
    </Card>
    <Box w={['fit-content','fit-content','35vh']}mt={10}textAlign={['center','center','left']}>
      <Text fontSize={'30px'}fontWeight={600}>TOP PRODUCTS</Text>
      <Text>Carver has always been about surfing and of capturing that joyous that joyous feeling of flow on a skateboard.</Text>
      <Button onClick={navigateToProduct} borderRadius={0} bg={'#e4fc01'}mt={5} w={'25vh'}_hover={'none'}>Go shopping</Button>
    </Box>
    <Card bg={"#e6e6e6"}w={['fit-content','fit-content','40vh']}mt={5}shadow={'none'}mr={5}>
      <CardBody >
        <Box bg={'#cbc7c6'}>
        <Image
          m={'auto'}
          src={Img3}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text >
          This set up is specifically made for Cruising in the streets of India. It comes with 58mm 83A hardness Cruising Wheels, 6mm Riser pads & 1.25in Hardware .
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 7,099.00
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </Flex>
  )
}

export default Product