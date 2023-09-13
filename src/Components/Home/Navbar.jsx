import { Box, Button, Flex, Img, Input, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from "../Photos/Home_page/1.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const [burger, setBurger] = useState(true);
  const changeBurger = () => {
    if (burger === true) {
      setBurger(false);
    }
    else {
      setBurger(true);
    }
  }
  
  const navigate = useNavigate();
  const handleSearch=()=>{
     setToggle(true) ;
     navigate('/products');
  }

  const links = [
    { path: '/decks', title: "Decks" },
    { path: '/accessories', title: "Accessories" },
    { path: '/skatebags', title: "Skateboard" },
    { path: '/wheels', title: "Wheels" },
  ]


  return (
    <>
      <Flex bg={'black'} color={'white'} fontWeight={500} fontSize={"13px"}>
        <Box display={['block', 'block', 'none']} my={'auto'} fontSize={'20px'} mx={'10px'} onClick={changeBurger}>{burger ? <GiHamburgerMenu /> : <RxCross2 />}</Box>
        <Box w={["100%", "100%", "15%"]}><Img m={'auto'} src={Logo} /></Box>
        <Spacer />
        
        <Flex display={['none', 'none', 'flex']}>
          {
            links.map((e,i) => {
              return (
                <Box m={'auto'}justifyContent={'center'}w={'10vh'}key={i}>
                  <Link key={e.path} to={e.path} >{e.title}</Link>
                </Box>
              )
            })
          }
        </Flex>
        <Spacer />
        <Flex display={['none', 'none', 'flex']} m={'auto'} cursor={'pointer'}>
          {
            toggle ? <Text m={'auto'} onClick={() => setToggle(false)}>SEARCH</Text> : <Flex>
              <Input color={'black'} w={'70%'} h={'4vh'} bg={'white'} placeholder={"Search SkateBoard"} borderRadius={0} />
              <Button borderRadius={0} h={"4vh"} w={'20%'} onClick={handleSearch}>Search</Button>
            </Flex>
          }
        <Link to='/Cart'><Text m={'auto'} px={5} >BAG</Text></Link>
        </Flex>
         <Link to='/Login'><Text m={'auto'} px={5}>LogIn</Text></Link> 
      </Flex>
      {
        burger ? "" : (
          <Box position={'absolute'} bg={'black'} color={'white'} w={"100%"} textAlign={"center"} fontWeight={600} p={5}>
            <Text>DECKS</Text>
            <Text>SKATEBOARD</Text>
            <Text>WHEELS</Text>
            <Text>SPARE PARTS</Text>
            <Text>WISHLIST</Text>
            <Box m={'auto'} w={"50%"}>
              {
                toggle ? <Text onClick={() => setToggle(false)}>SEARCH</Text> : <Flex>
                  <Input textAlign={'center'} ml={10} color={'black'} w={'70%'} h={'4vh'} bg={'white'} placeholder={"Search SkeateBoard"} borderRadius={0} />
                  <Button borderRadius={0} h={"4vh"} w={'20%'} onClick={() => setToggle(true)}>Search</Button>
                </Flex>
              }
            </Box>
          </Box>
        )
      }
    </>
  )
}

export default Navbar