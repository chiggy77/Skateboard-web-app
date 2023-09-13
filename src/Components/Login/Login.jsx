import React from 'react';
import { Box, Heading, Text, Center, Flex, HStack, FormControl, Input, Button, Stack, VStack, Card, CardBody, Link } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';




const Login = (props) => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('*Email is required'),
    password: Yup.string().required('*Password is required')
  });

  // Define initial form values
  const initialValues = {
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // Retrieve user details from local storage
    const UserJSON = localStorage.getItem('user');
    const User = UserJSON ? JSON.parse(UserJSON) : null;

    if (User && User.email === values.email && User.password === values.password) {
      alert('Login successful!');
      // Redirect to homepage
      window.location.href = '/';
    } else {
      alert('Invalid email or password');
    }

    // Reset the form
    setSubmitting(false);
  };

  return (
    <Box>
      <Heading as="h2" fontWeight="700" fontSize="35px" letterSpacing="-0.2px" color="#00a6c7">
        Login
      </Heading>
      <Text>Please enter your e-mail and password</Text>
      <br />
      <Center>
        <Flex>
          <HStack spacing="20">
          <Center>
        <Flex>
          
        </Flex>
      </Center>
          </HStack>
        </Flex>
      </Center>
      <br />
      <br />
      <Center>
        <Stack spacing="4">
          <VStack as="header" spacing="6" mt="8"></VStack>
          <Card w="400px">
            <CardBody>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Stack spacing="4">
                      <FormControl marginBottom="10px">
                        <Field
                          type="text"
                          name="email"
                          placeholder="E-mail"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="30px"
                        />
                        
                        <ErrorMessage name="email" component="div" color="#515151" />
                      </FormControl>
                      <FormControl marginBottom="10px">
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          as={Input}
                          w="100%"
                          bg="white"
                          borderColor="#d8dee4"
                          size="lg"
                          padding="10px"
                          borderRadius="30px"
                        />
                        <ErrorMessage name="password" component="div" color="#515151" />
                      </FormControl>
                      <HStack justifyContent="end">
                        <Button
                          className="fp"
                          as="a"
                          href="#"
                          variant="link"
                          size="xs"
                          fontWeight="500"
                          fontSize="15"
                          display="flex"
                          alignItems="end"
                          color="#515151"
                        >
                          Forgot password?
                        </Button>
                      </HStack>
                      <br />
                      <Button
                        className="login"
                        type="submit"
                        bg="#009aab"
                        color="white"
                        width="105%"
                        padding="10px"
                        borderRadius="30px"
                        size="lg"
                        fontSize="15"
                        isLoading={isSubmitting}
                        _hover={{
                          bg: 'white',
                          color: '#009aab',
                         transition: 'background-color 0.3s ease-in-out'
                        }}
                      >
                        Log in
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
          <br />
        </Stack>
      </Center>
      <br />

      <Center as="footer" mt="16">
        <HStack spacing="4" pt="2">
          <Button onClick={() => props.onFormSwitch('register')} className="fp" isExternal color="#515151" to='/signup' fontSize="xs"
          border="none" bg="#DBE6E6">
            Don’t have an account?
          </Button>
        </HStack>
      </Center>
    </Box>
  );
};

export default Login;