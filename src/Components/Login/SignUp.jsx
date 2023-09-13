import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);


  const handleSignUp = (e) => {
    e.preventDefault();
  
    if (!firstName || !lastName || !email || !password || !privacyAccepted) {
      alert("Please fill in all fields and accept the privacy policy.");
      return;
    }
  
    const user = {
      firstName,
      lastName,
      email,
      password
    };
  
    // Convert user object to JSON string
    const userJSON = JSON.stringify(user);
  
    // Store the user details in local storage
    localStorage.setItem("user", userJSON);
  
    
    if (firstName || lastName || email || password || privacyAccepted) {
      alert("User signed up successfully!");
      props.onFormSwitch('login')
      return;
    }
  
  
    // Reset the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPrivacyAccepted(false);
  };
  

  return (
    <Box>
      <Heading as="h2" fontWeight="700" color="#00a6c7" fontSize="35px" letterSpacing="-0.2px">
        Create Account
      </Heading>
      <Text> Please fill in the information below</Text>

      <br />
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8"></VStack>
          <Card w="400px">
            <CardBody>
              <form onSubmit={handleSignUp}>
                <Stack spacing="4">
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="First Name"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="Last Name"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="text"
                      placeholder="E-mail"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      
                    />
                  </FormControl>
                  <FormControl marginBottom="10px">
                    <Input
                      type="password"
                      placeholder="Password"
                      w="100%"
                      bg="white"
                      borderColor="#d8dee4"
                      size="lg"
                      padding="10px"
                      borderRadius="30px"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      
                    />
                  </FormControl>
                  <label>
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                     
                    />
                    I have read and I accept the privacy policy
                  </label>

                  <br />
                  <Button
                   className="SignUp"
                    type="submit"
                    bg="#009aab"
                    color="white"
                    width="105%"
                    padding="10px"
                    borderRadius="30px"
                    size="lg"
                    fontSize="15"
                    cursor="pointer"
                    _hover={{
                      bg: 'white',
                      color: '#009aab',
                     transition: 'background-color 0.3s ease-in-out'
                    }}
                  >
                    Create my Account
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Button
            onClick={() => props.onFormSwitch('login')}
            className="fp"
            isExternal
            color="#515151"
            to="/login"
            fontSize="xs"
            border="none"
            bg="#DBE6E6"
          >
            Already registered? Log in!
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default SignUp;