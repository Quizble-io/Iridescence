import { Flex, Text, Image, Link, Menu, MenuButton } from "@chakra-ui/react";

interface Props {
  title: React.ReactNode
  icon: string
  active: React.ReactNode
  colorMode: React.ReactNode
}

function NavItem( props: Props) {
  const {title} = props
  const {icon} = props
  const {active} = props
  const {colorMode} = props

  return (
    <Flex
      mt={2}
      flexDir="column"
      w="100%"
      alignItems= "center"
    >
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={30}
          _hover={{ textDecor: "none", background: "rgb(157, 157, 168, 0.40)" }}
          w="100%"
        >
          <MenuButton w="100%">
            <Flex
              alignItems="center"
              justifyContent={!isHover ? "center" : "none"}
            >
              {active && !isHover && (
                <Image
                  boxSize="48px"
                  objectFit="contain"
                  src={
                    colorMode === "light" ? "bubble.png" : "bubble-light.png"
                  }
                  z-index={2}
                  position="fixed"
                />
              )}
              <Image
                boxSize="30px"
                objectFit="contain"
                src={icon}
                z-index={1}
              />
              <Text ml={5} display={!isHover ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;
