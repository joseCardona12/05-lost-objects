import { IAuthResponseError, IAuthResponseSuccess, ILoginRequest, IRegisterRequest } from "../dtos/auth"

export interface PAuth {
    login(credentials:ILoginRequest):Promise<IAuthResponseError | IAuthResponseSuccess>
    register(credentials: IRegisterRequest):Promise<IAuthResponseError | IAuthResponseSuccess>
}