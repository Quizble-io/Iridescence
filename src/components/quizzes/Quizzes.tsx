import { Flex, Heading, Text, Image } from "@chakra-ui/react";

function Quizzes() {
  return (
    <main>
    <Image
          boxSize="50px"
          objectFit="contain"
          position="fixed"
          top="19rem"
          left="50px"
        />
    <Flex
      pos="absolute"
      left="60vh"
      marginTop="15vh"
      w="40%"
      alignContent="center"
      flexDir="column"
    >
      <Heading as="h1" fontFamily="Quizble, sans-serif" fontSize="40px">Quizzes</Heading>
      <Text sx={{ mt: 3, mb: 3 }}>
        This is where you can interact with other peoples public quizzes
      </Text>
    </Flex>
  </main>
  );
}

export default Quizzes;
