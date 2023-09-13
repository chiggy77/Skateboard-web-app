import React from 'react'
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, MenuDivider, Stack, Text } from '@chakra-ui/react'
import Img4 from '../Photos/Product_Page/4.png'
import Img5 from '../Photos/Product_Page/5.png'
import Img6 from '../Photos/Product_Page/6.png'
import { useNavigate } from 'react-router-dom'

const Accessories = () => {

  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate('/*');
  };

  return (
    <Flex w={'90%'}p={10}m={'auto'} display={['block','block','flex']}>
    <Card  bg={"#e6e6e6"}w={['fit-content','fit-content','40vh']}mt={5}shadow={'none'}mr={5}>
      <CardBody >
        <Box bg={'#cbc7c6'}>
        <Image
          m={'auto'}
          src={Img4}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text>
          One tool that multi tasks to loosen or tighten every nut and bolt in your setup. This T-tool will adjust your kingpin, axle nuts and your hardware, and also has Phillips and Allen screw driver heads. It is very handy and easy to use anytime you need to change wheels, bearings or just tighten/loosen your trucks
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 490.00,
          </Text>
        </Stack>
      </CardBody>
    </Card>
    <Card bg={"#e6e6e6"}w={['fit-content','fit-content','40vh']}mt={5}shadow={'none'}mr={5}>
      <CardBody >
        <Box bg={'#cbc7c6'}>
        <Image
          m={'auto'}
          src={Img5}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text>
          This is the Perfect Cruiser Wheel for the Indian streets. The diameter of this wheel is 58mm and the hardness is 83A. It has round edge on outside for better durability.  Say no to the vibrations! and enjoy the softer ride :). This wheel is specifically designed for cruising so doing tricks will be a bit harder, and due to lower softness it will be tough to power slide.
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 1999.00,
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
          src={Img6}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          h={'40vh'}
        />
        </Box>
        <Stack mt='6' >
          <Text >
          Mizo skatewax is finally available in our store, hailing all the way from Mizoram. This wax is guaranteed to make your slides smoother and much more in control. Just rub the bar generously under the board, or on the ledge or rail you want to grind or slide on. Grab one before it gets sold out!
          </Text>
          <Text color='blue.600' fontSize='sm'>
            Rs. 200.00,
          </Text>
        </Stack>
      </CardBody>
    </Card>
    </Flex>
  )
}

export default Accessories