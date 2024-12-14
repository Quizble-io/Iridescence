import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import Cookies from 'js-cookie';

import { logInUser } from "../../api/auth/auth";



function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    const errors: { [key: string]: string } = {};
    if (email === "") errors.email = "Email is required.";
    if (password === "") errors.password = "Password is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    try {
      const tokens = await logInUser({ email, password });
      console.log(tokens);
      // ideal but can't use https for dev 
      //       Cookies.set('token', tokens.token, { expires: 1, secure: true, sameSite: 'Strict' });

      Cookies.set('token', tokens.token, { expires: 1, sameSite: 'Strict' });
      Cookies.set('refreshToken', tokens.refreshToken, { expires: 1, sameSite: 'Strict' });

      console.log("Login successful")
    } catch (error) {
      console.log(error);
      setFormErrors({
        genral: "Failed to sign in. Please check your credentials.",
      });
    } finally {
      setLoading(false);
      window.location.reload()
    }
  };

  return (
    <Flex py={20} width="full" align="center" justifyContent="center">
      <Box px={5} width="full" maxWidth="500px" textAlign="center">
        <Box textAlign="center">
          <Heading color="black" fontFamily="Quizble, sans-serif" fontSize="40px">Log In</Heading>
          <Text mt={2} color="black">
            Or <Link color="gray.600">Create an Account</Link>
          </Text>
        </Box>
        <Box my={8} textAlign="left" mb={0}>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!formErrors.email}>
              <FormLabel color="black">Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={handleEmailChange}
                borderRadius={10}
                borderColor="gray.300"
              />
              {formErrors.email && (
                <FormErrorMessage>{formErrors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.password}>
              <FormLabel color="black">Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                borderRadius={10}
                borderColor="gray.300"
              />
              {formErrors.password && (
                <FormErrorMessage>{formErrors.password}</FormErrorMessage>
              )}
            </FormControl>
            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox color="black" borderColor="gray.300">
                  Remember Me
                </Checkbox>
              </Box>
              <Box>
                <Link color="gray.600">Forgot your password?</Link>
              </Box>
            </Stack>
            {formErrors.general && (
              <Text color="red.500" mt={4}>
                {formErrors.general}
              </Text>
            )}
            <Button
              type="submit"
              width="full"
              mt={8}
              borderRadius={10}
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "gray.700" }}
              isLoading={loading}
            >
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginForm;
