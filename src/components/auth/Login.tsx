import LoginForm from "./LoginForm.tsx";
import {
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  updateForm: (newState: number) => void;
  form: React.ReactNode;

}

function Login(props:Props) {
  return (
    <main>
      <Modal isOpen={ props.form === 2 } onClose={() => props.updateForm(0)}>
        <ModalOverlay />
        <ModalContent  borderRadius={10} position="fixed" top="10vh" backgroundColor="white">
          <ModalCloseButton color="black">
          </ModalCloseButton>
          <LoginForm />
        </ModalContent>
      </Modal>
    </main>
  );
}

export default Login;
