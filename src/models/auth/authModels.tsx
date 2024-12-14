interface userCreateInfo {
    username:string;
    email:string;
    password:string;
}

interface loginRequst {
    email:string,
    password:string,
}




export type { 
    userCreateInfo, 
    loginRequst,
}