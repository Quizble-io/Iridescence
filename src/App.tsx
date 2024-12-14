import { Moon, Sun } from "react-feather";
import Cookies from 'js-cookie';
import './fonts.css';
import SideBar from "./components/leftNav/LeftNav.tsx";
import Auth from "./components/auth/Auth.tsx";
import User from "./components/user/User.tsx";
import Home from "./components/home/Home.tsx";
import {
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Quizzes from "./components/quizzes/Quizzes.tsx";
import StudySets from "./components/studySets/StudySets.tsx";
import Settings from "./components/settings/Settings.tsx";

function App() {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "black");

  const [ token, setToken ] = useState();
  const [ refreshToken, setRefreshToken ] = useState();

  function getRefreshTokenCookie() {
    console.log('here')
    return Cookies.get('refreshToken');
  }


  const mainStates = {
    home: 0,
    studyset: 1,
    quizes:2,
    settings:3,
  }
  const [selectedMain, setMain] = useState(mainStates.home)

  const updateMain = (state:number) => {
    setMain(state)
  }

  const displaymain = () => {
    switch (selectedMain) {
      case 0:
        return <Home colorMode={colorMode}></Home>;
      case 1:
        return <StudySets colorMode={colorMode}></StudySets>;
      case 2:
        return <Quizzes></Quizzes>;
      case 3: 
        return <Settings></Settings>
    }
  }

  return (
    <main>
      <Flex
        h="100vh"
        pos="fixed"
        display="flex"
        alignItems="flex-end"
        zIndex={0}
        backgroundColor={bg}
      >
        <Image
          objectFit="fill"
          src={colorMode === "light" ? "/dark.png" : "/light.png"}
        />
      </Flex>
      <IconButton
        pos="fixed"
        bottom="1rem"
        left="1rem"
        aria-label="toggle color"
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        onClick={toggleColorMode}
        zIndex={3}
      ></IconButton>
      <SideBar colorMode={colorMode} updateMain={updateMain}/>
      {displaymain()}
      <Flex
        display="flex"
        flexDir="column"
        position="absolute"
        right="1rem"
        top="1rem"
        alignItems="flex-end"
      >
      {getRefreshTokenCookie() && <User></User>}

      {!getRefreshTokenCookie() && <Auth></Auth>}
      </Flex>
    </main>
  );
}

export default App;
