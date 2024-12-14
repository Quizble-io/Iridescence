import dotenv from "dotenv";

dotenv.config();

interface loginRequest {
    email: String,
    password: String, 
}

interface tokenResponse {
    status:number,
    token: String,
    refreshToken: String
}

async function Authenticate(loginRequest:loginRequest) {
    const URL = process.env.LOGIN_PATH

    const response = await fetch(URL, {
        method: 'POST',
        headers: {'Content-Type': "application/json", 'Accept': "application/json" }, 
        body: JSON.stringify(loginRequest),
    })

    console.log(response)
    console.log("----------")
    console.log(response.body)
    console.log("-----------")
    console.log(response.json)

    // if (response.status == 400 && response.body !== null) {
    //     const tokenResponse:tokenResponse = {
    //         status: response.status,
    //         token: await response.json.token,
    //         refreshToken: 
    //     }
    // }
}

