import LoginForm from "./LoginForm.tsx";
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
  updateForm: (newState: number) => void;
  form: React.ReactNode;

}



function CreatedLogin(props:Props) {
  return (
    <main>
      <Modal isOpen={ props.form === 3 } onClose={() => props.updateForm(0)}>
        <ModalOverlay />
        <ModalContent minWidth="38vw" position="fixed" top="10vh" backgroundColor="white" dropShadow="none">
          Account Created! Now login
          <ModalCloseButton color="black">
          </ModalCloseButton>
          <LoginForm />
        </ModalContent>
      </Modal>
    </main>
  );
}

export default CreatedLogin;
