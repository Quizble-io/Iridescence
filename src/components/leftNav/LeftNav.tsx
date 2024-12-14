import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import "./css/LeftNav.css";
import NavHoverBox from "./components/NavHoverBox";

interface Props {
  colorMode: React.ReactNode;
  updateMain: (newState: number) => void;
}

function SideBar(props: Props) {
  const { colorMode } = props;

  const [selected, setSelected] = useState(0);

  const updateItem = (place:number) => {
    props.updateMain(place);
    setSelected(place);
  }

  return (
    <Flex
      pos="fixed"
      paddingLeft="8"
      paddingRight="8"
      h="100vh"
      boxShadow="0 4px 12px 0
      rgba(0,0,0,0.05)"
      flexDir="column"
      backgroundColor={colorMode === "light" ? "white" : "black"}
      zIndex={1}
      borderRight={
        colorMode === "light" ? "3px solid black" : "3px solid white"
      }
    >
      <Image
        cursor="pointer"
        boxSize="85px"
        top-margin="2vh"
        objectFit="contain"
        src={colorMode === "light" ? "/logo-dark.png" : "/logo-light.png"}
      />
      <Flex
        marginTop="25vh"
        pt={2}
        flexDir="column"
        as="nav"
        alignItems="center"
      >
        <div
          onClick={() => updateItem(0)}
          className="selectItemContainer"
        >
          <Image
            className="selectItem"
            boxSize="60px"
            objectFit="contain"
            src={colorMode === "light" ? "/home-dark.png" : "/home-light.png"}
            z-index={1}
            p={3}
            borderRadius={30}
            _hover={{
              textDecor: "none",
              background: "rgb(157, 157, 168, 0.40)",
            }}
          />
          {selected === 0 ?<NavHoverBox colorMode={colorMode}></NavHoverBox> :null }
        </div>
        <div onClick={() => updateItem(1)} className="selectItemContainer">
          <Image
            boxSize="60px"
            className="selectItem"
            objectFit="contain"
            src={colorMode === "light" ? "/sets-dark.png" : "/sets-light.png"}
            z-index={1}
            p={3}
            borderRadius={30}
            _hover={{
              textDecor: "none",
              background: "rgb(157, 157, 168, 0.40)",
            }}
          />
          {selected === 1 ?<NavHoverBox colorMode={colorMode}></NavHoverBox> :null }

        </div>
        <div onClick={() => updateItem(2)} className="selectItemContainer">
          <Image
            className="selectItem"
            boxSize="60px"
            objectFit="contain"
            src={colorMode === "light" ? "/quiz-dark.png" : "/quiz-light.png"}
            z-index={1}
            p={3}
            borderRadius={30}
            _hover={{
              textDecor: "none",
              background: "rgb(157, 157, 168, 0.40)",
            }}
          />
          {selected === 2 ?<NavHoverBox colorMode={colorMode}></NavHoverBox> :null }
        </div>
        <div onClick={() => updateItem(3)} className="selectItemContainer">
          <Image
            className="selectItem"
            boxSize="60px"
            objectFit="contain"
            src={
              colorMode === "light"
                ? "/settings-dark.png"
                : "/settings-light.png"
            }
            z-index={1}
            p={3}
            borderRadius={30}
            _hover={{
              textDecor: "none",
              background: "rgb(157, 157, 168, 0.40)",
            }}
          />
          {selected === 3 ?<NavHoverBox colorMode={colorMode}></NavHoverBox> :null }
        </div>
      </Flex>
    </Flex>
  );
}

export default SideBar;
