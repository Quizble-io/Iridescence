import { Image } from "@chakra-ui/react";
import "../css/LeftNav.css";

interface Props {
  colorMode: React.ReactNode;
}

const NavHoverBox = (props:Props) => {

  const {colorMode} = props

  return <Image
  className="selectItem"
  boxSize="80px"
  objectFit="contain"
  src={colorMode === "light" ? "/bubble.png" : "/bubble-light.png"}
  p={3}
  borderRadius={30}
/>;
};

export default NavHoverBox;
