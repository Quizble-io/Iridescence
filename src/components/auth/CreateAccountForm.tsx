import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  ModalContent,
} from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../../api/auth/auth";

interface Props {
  updateForm: (newState: number) => void;

}

function CreateAccountForm(props:Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [match, setMatch] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleMatchChange = (e: React.ChangeEvent<HTMLInputElement>) => setMatch(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setFormErrors({});
    
    // Validate fields
    const errors: { [key: string]: string } = {};
    if (username === "") errors.username = "Username is required.";
    if (email === "") errors.email = "Email is required.";
    if (password === "") errors.password = "Password is required.";
    if (match === "") errors.match = "Please verify your password.";
    if (password !== match) errors.match = "Passwords must match.";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);

    // TODO: once account is created open NEW component similiar to login popup that says Account Created! Log in below! or smth.
    try {
      await createUser({ username, email, password });
      // Handle successful account creation (e.g., redirect to login or show a success message)
    } catch (error) {
      // Handle API error (e.g., show an error message)
      console.error("Failed to create user", error);
    } finally {
      props.updateForm(3);
      setLoading(false);
    }
  };

  return (
    <Flex py={20} >
      <Box px={9} textAlign="center" backgroundColor="white">
        <Box textAlign="center">
          <Heading color="black" fontFamily="Quizble, sans-serif" fontSize="40px">Create an Account</Heading>
          <Text mt={2} color="black">
            Or <Link color="gray.600">Sign In to Your Account</Link>
          </Text>
        </Box>
        <Box my={8} textAlign="left" mb={0}>
          <form onSubmit={handleSubmit}>
            <FormControl isInvalid={!!formErrors.username}>
              <FormLabel color="black">Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={handleUserChange}
                borderRadius={10}
                borderColor="gray.300"
              />
              {formErrors.username && (
                <FormErrorMessage>{formErrors.username}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4} isInvalid={!!formErrors.email}>
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
              <FormLabel color="black">Create a Password</FormLabel>
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
            <FormControl mt={4} isInvalid={!!formErrors.match}>
              <FormLabel color="black">Confirm Password</FormLabel>
              <Input
                type="password"
                value={match}
                onChange={handleMatchChange}
                borderRadius={10}
                borderColor="gray.300"
              />
              {formErrors.match && (
                <FormErrorMessage>{formErrors.match}</FormErrorMessage>
              )}
            </FormControl>
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
              Create Account
            </Button>
          </form>
        </Box>
        </Box>
    </Flex>
  );
}

export default CreateAccountForm;
