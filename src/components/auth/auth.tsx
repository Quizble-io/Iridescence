// this is going to be the main auth componenet with switchers between menus 
import { useState } from "react";
import Login from "./Login.tsx";
import CreateAccount from "./CreateAccount.tsx";
import CreatedLogin from "./CreatedLogin.tsx";
import {
  Button,
  VStack,
} from "@chakra-ui/react";

function Auth() {

    const mainStates = {
        none: 0,
        createAccount: 1,
        login: 2,
        accountCreatedLogin:3,
    }

    const [selectedForm, setForm] = useState(mainStates.none)

    

    const displaymain = () => {
        switch (selectedForm) {
        case 0:
            return;
        case 1:
            return <CreateAccount updateForm={setForm} form={selectedForm}></CreateAccount>;
        case 2:
            return <Login updateForm={setForm} form={selectedForm}></Login>;
        // created login goes here 
        case 3:
            console.log('here')
            return <CreatedLogin updateForm={setForm} form={selectedForm}></CreatedLogin>;

        }
    }

    return (
        <VStack align="end" paddingRight="5">
            <Button
                onClick={() => setForm(1)}
                objectFit="contain"
                fontFamily="Quizble, sans-serif"
                fontSize="20px"
                textColor="white"
                backgroundColor="black"
                borderRadius="30"
            >Create Account</Button>
            <Button
                onClick={() => setForm(2)}
                objectFit="contain"
                fontFamily="Quizble, sans-serif"
                fontSize="20px"
                textColor="white"
                backgroundColor="black"
                borderRadius="30"
            >Log In</Button>
            {displaymain()}
        </VStack>
        
    );

}


export default Auth;

