
export default class HttpClientUtil {
  private baseUrl: string = "https://maintenancesystembc-production.up.railway.app/api/v1";

  constructor(urlClient?: string) {
    this.baseUrl = urlClient ?  urlClient : this.baseUrl;
  }

  private async getHeader() {
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    return headers;
  }

  private async handleResponse(response: Response) {
    return await response.json();
  }

  async get<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    console.log("url" + url, "header", headers)
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "GET",
      cache: "no-store",
    });
    return this.handleResponse(response);
  }

  async delete<T>(url: string): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "DELETE",
    });
    console.log("-----",response)
    return this.handleResponse(response);
  }

  async post<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(body),
    });
    console.log("response", response);
    return this.handleResponse(response);
  }

  async put<T, B>(url: string, body: B): Promise<T> {
    const headers = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }
}