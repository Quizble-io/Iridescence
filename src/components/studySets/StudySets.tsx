import { Flex, Heading, Text, Image } from "@chakra-ui/react";

interface Props {
  colorMode: React.ReactNode;
}

function Home(props: Props) {
  const { colorMode } = props;
  return (
    <main>
      <Image
            boxSize="50px"
            objectFit="contain"
            src={colorMode === "light" ? "bubble.png" : "bubble-light.png"}
            z-index={2}
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
        <Heading as="h1" fontFamily="Quizble, sans-serif" fontSize="40px">Study Sets</Heading>
        <Text sx={{ mt: 3, mb: 3 }}>
          A place to view a list of study sets made by you or others
        </Text>
      </Flex>
    </main>
  );
}

export default Home;
