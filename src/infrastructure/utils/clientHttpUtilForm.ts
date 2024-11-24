export default class HttpClientUtilForm{
    private baseUrl: string = "http://localhost:3001/api";

    private async getHeader() {
        const headers: { [key: string]: string } = {
          "Content-Type": "application/json",
        };
        return headers;
      }    

    constructor(urlClient?: string) {
      this.baseUrl = urlClient ? urlClient : this.baseUrl;
    }

    private async manageResponse(response:Response){
        console.log(response, response);
        if(!response.ok){
            throw new Error("Error with the method manageResponse")
        }
        return await response.json();
    }

    async post<T, B>(url:string, request:T):Promise<B>{
        const headers = await this.getHeader()
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers,
            credentials: "include",
            method: "POST",
            body: JSON.stringify(request)
        });
        return await this.manageResponse(response);
    }

    async postImage<B>(request: FormData):Promise<B>{
        const response = await fetch(`${this.baseUrl}`,{
            method: "POST",
            body: request
        });
        return await this.manageResponse(response);
    }

    async update<T,B>(url:string, request:T):Promise<B>{
        const response = await fetch(`${this.baseUrl}/${url}`,{
            method: "PUT",
            body: JSON.stringify(request)
        });
        return await this.manageResponse(response);
    }
}