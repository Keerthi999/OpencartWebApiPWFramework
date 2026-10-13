import type { APIRequestContext } from "@playwright/test";

export class ApiHelper{
    private readonly request:APIRequestContext;
    private readonly baseURL:string;

    constructor(request:APIRequestContext,baseURL:string){
        this.request = request;
        this.baseURL = baseURL;
     }
     //GET
     async get(endpoint:string,headers?:Record<string,string>){
        let response = await this.request.get(`${this.baseURL}${endpoint}`,{
            headers:headers
        })
       return{
        status:response.status(),
        body:await response.json()
       }
     }

     //Post
     async post(endpoint:string,data:object,headers:Record<string,string>){
       let response = await  this.request.post(`${this.baseURL}${endpoint}`,{
            data:data,
            headers:headers
        })
        return {
            status: response.status(),
            body:await response.json()
        }

     }
     //Put
     async put(endpoint:string,data:object,headers:Record<string,string>){
        let response = await this.request.put(`${this.baseURL}${endpoint}`,{
            data:data,
            headers:headers
        })
        return {
            status:response.status(),
            body:await response.json()
        }
     }
     //Delete
     async delete(endpoint:string,headers:Record<string,string>){
        let response = await this.request.delete(`this.baseURL4{endpoint}`,{
            headers:headers
        })
        return{
            status:response.status()
        }
     }

}