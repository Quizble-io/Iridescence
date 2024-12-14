import { Stack, Menu, MenuButton, MenuList, MenuItem, Flex, Heading, Avatar, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, IconButton, AvatarGroup, HStack } from "@chakra-ui/react";
import { userInfo } from "../../models/user/userModels";
import { fetchUserInfo } from "../../api/user/UserAPI";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import UserInfo from "./UserInfo";

function User({}) {

  const user = async ():Promise<userInfo> => {
    const userData:userInfo = await fetchUserInfo()
    return await userData
  }

  const [userData, setUserData] = useState<userInfo | null>(null)

  useEffect(() => {
    if (Cookies.get("refreshToken")) {
      async function getData() {
        const userData:userInfo = await fetchUserInfo()
        await setUserData(userData)
      }
      getData()
    }
    
  }, [Cookies.get("refreshToken")]) 
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main>
      <Menu>
        <MenuButton 
          as={Button}
          fontFamily="Quizble, sans-serif"
          display="flex"
          fontSize="20px"
          textColor="white"
          pr="5"
          pl="5"
          pt="6"
          pb="6"
          backgroundColor="black">
          {/* <Avatar size="sm" src="avater-1.png" /> */}

          <HStack>
            <AvatarGroup>
              <Avatar color="white" bg="gray.500" variant="outline" size="sm" name={userData?.username} fontFamily="Arial"></Avatar>
            </AvatarGroup>
            <Heading as="h3" size="sm" fontFamily="Quizble, sans-sarif">
              {userData?.username}
            </Heading>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem color="red">Logout</MenuItem>
        </MenuList>
      </Menu>
      

      <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent  borderRadius={10} position="fixed" top="10vh" backgroundColor="white">
            <ModalCloseButton color="black">
            </ModalCloseButton>
            <UserInfo />
            </ModalContent>
        </Modal>
    </main>
  );
}

export default User;
