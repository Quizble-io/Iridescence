import CreateAccountForm from "./CreateAccountForm.tsx";
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

function CreateAccount(props:Props) {

  return (
    <main>
      <Modal isOpen={ props.form === 1 } onClose={() => props.updateForm(0)}>
        <ModalOverlay />
        <ModalContent px={2} borderRadius={10} backgroundColor="white">
          {/* <Image
          src="/CreateAccount.png"
          position="absolute"
          objectFit="fill"
          zIndex={-1}/> */}
          <ModalCloseButton color="black"> 
          </ModalCloseButton>
          <CreateAccountForm updateForm={props.updateForm}/>
        </ModalContent>
      </Modal>
    </main>
  );
}

export default CreateAccount;
