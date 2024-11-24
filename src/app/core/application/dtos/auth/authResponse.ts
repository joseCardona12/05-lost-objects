
export interface IAuthResponseSuccess{
    statusCode:number,
    message:string,
    user: IUser,
    token:string
}

export interface IUser{
    id:number,
    name:string,
    email:string,
    password:string,
    birthDate:string,
    role_id:number
}

export interface IAuthResponseError{
    message:string,
    statusCode:number
}