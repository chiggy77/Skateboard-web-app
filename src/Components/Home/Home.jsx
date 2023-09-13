import { AspectRatio, Box, Button, Flex, Img, Input, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import Img1 from "../Photos/Home_page/2.jpg"
import Img7 from "../Photos/Home_page/7.jpg"
import Img8 from "../Photos/Home_page/8.jpg"
import Img3 from "../Photos/Home_page/3.jpg"
import Img6 from "../Photos/Home_page/6.jpg"
import Img4 from "../Photos/Home_page/4.jpg"
const Home = () => {
  return (
    <>
    
      

      <Box bg={"#e6e6e6"}>


        <Box bgImg={[Img8, Img8, 'none']} backgroundRepeat="no-repeat" backgroundPosition="center" bgSize="90%">
          <Text color={'black'} mb={'-30px'} textAlign={'center'} fontSize={['10vh', '20vh', '30vh']} fontWeight={800}>CARVER</Text>
          <Text fontSize={'20px'} w={"80%"} textAlign={'right'}>Since 1997</Text>
          <Box textAlign={'center'} >
            <Box mt={'60px'} display={'flex'} justifyContent={'space-around'}>
              <Box display={['none', 'none', 'block']} w={'15%'} m={5}><img src={Img7} /></Box>
              <Box mb={["30vh", "30vh", 0]}>
                <h5>Make waves</h5>
                <Text fontSize={'40px'} fontWeight={600}>
                  NEW COLLECTION
                  <br />
                  SUMMER
                  <br />
                  twenty 22
                  <br />
                  CURATED BY
                  <br />
                  CARVER
                </Text>
                <Link>GO SHOPPING</Link>
              </Box>
              <Box display={['none', 'none', 'block']} w={'20%'} m={5}><img src={Img8} /></Box>
            </Box>
          </Box>
        </Box>

        <Box >
          <AspectRatio maxW='1500px' maxH={"500px"} m={'auto'} my={10}>
            <iframe
              src="https://www.youtube.com/embed/yn-TfAzobDI"
              title="YouTube video player"
              allowFullScreen />
          </AspectRatio>
        </Box>




        <Box textAlign={['center', 'center', 'left']} >
          <Box mt={'60px'} display={'flex'}>
            <Box display={['none', 'none', 'block']} w={'100%'} m={5}><img src={Img1} /></Box>
            <Box textAlign={['center', 'center', 'left']}>
              <Box fontSize={'40px'} fontWeight={400}><h2>ABOUT CARVER</h2></Box>
              <Text fontSize={'20px'} w={['80%', '80%', '100%']} m={'auto'}>
                It all started one quiet summer in Venice,California in 1995.Greg flak and Neil Carner had been surfing all winter, and were pumped to surf the warner waters of the Breakwater during the long days of summer, but it was as flat as a puddle. Not even a longboard ripple to justify getting wet.
              </Text>
              <Link>VIEW MORE</Link>
            </Box>
            <Box display={['none', 'none', 'block']} w={'50%'} m={'auto'} mx={10}><img src={Img3} /></Box>
          </Box>
          <Box m={'auto'} display={['block', 'block', 'none']} w={'60%'} ><img src={Img1} /></Box>
        </Box>



        <Box textAlign={['center', 'center', 'right']} >
          <Box mt={'60px'} display={'flex'}>
            <Box display={['none', 'none', 'block']} w={'50%'} m={5}><img src={Img4} /></Box>
            <Box textAlign={['center', 'center', 'right']}>
              <Box fontSize={'40px'} fontWeight={400}><h2>FOLLOW US <br /> IN INSTAGRAM</h2></Box>
              <Text fontSize={'20px'} w={['80%', '80%', '100%']} m={'auto'} >
                It all started one quiet summer in Venice,California in 1995.Greg flak and Neil Carner had been surfing all winter, and were pumped to surf the warner waters of the Breakwater during the long days of summer, but it was as flat as a puddle. Not even a longboard ripple to justify getting wet.
              </Text>
              <Link>VIEW MORE</Link>
            </Box>
            <Box display={['none', 'none', 'block']} w={'100%'} m={'auto'} mx={10}><img src={Img6} /></Box>
          </Box>
          <Box m={'auto'} display={['block', 'block', 'none']} w={'60%'} p={5}><img src={Img6}  /></Box>
        </Box>


      </Box>


      
    </>
  )
}

export default Home