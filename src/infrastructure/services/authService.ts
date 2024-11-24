import { ILoginRequest, IAuthResponseError, IAuthResponseSuccess, IRegisterRequest } from "@/app/core/application/dtos/auth";
import { PAuth } from "@/app/core/application/ports";
import { HttpClientUtilForm } from "../utils";

class AuthService implements PAuth {
    private complementUrl: string = "auth";
    private httpClientUtil: HttpClientUtilForm;
    
    constructor(){
        this.httpClientUtil = new HttpClientUtilForm();
    }
    public async login(credentials: ILoginRequest): Promise<IAuthResponseError | IAuthResponseSuccess> {
        const data: IAuthResponseError | IAuthResponseSuccess = await this.httpClientUtil.post(`${this.complementUrl}/login`, credentials);
        console.log("------", data);
        return data;
    }
    public async register(credentials: IRegisterRequest): Promise<IAuthResponseError | IAuthResponseSuccess> {
        const data: IAuthResponseError | IAuthResponseSuccess = await this.httpClientUtil.post(`${this.complementUrl}/register`, credentials);
        return data;
    }
}

export default new AuthService();