import { expect } from '@playwright/test';
import { test } from '../../src/fixtures/apifixtures';

const Token = process.env.API_TOKEN
let Auth_Header = {Authorization:`Bearer ${Token}`}
let userid:number
test.describe.serial('running e2e test cases for crud operation',()=>{
//GET

//Post
test('post create a user',async({apihelper})=>{
    let userdata ={
    "name": "test12344",
    "email": `test1234${Date.now()}@friesen.example`,
    "gender": "female",
    "status": "inactive"
    }
let response = await apihelper.post('public/v2/users',userdata,Auth_Header);
expect(response.status).toBe(201);
expect(response.body.name).toBe(userdata.name);
userid = response.body.id;
console.log(response.body.id)
})
test('get user test',async ({apihelper})=>{
let response = await apihelper.get(`public/v2/users/${userid}`,Auth_Header);
expect( response.status).toBe(200);
console.log(response.body);
})


//Put
test('put- edit a user',async({apihelper})=>{
let userupdateddata ={
    "name": "test12344",
  
    "gender": "female",
    "status": "active"
    }
    console.log("PUT User ID:", userid);
   let response =  await apihelper.put(`public/v2/users/${userid}`,userupdateddata,Auth_Header);
   expect(response.status).toBe(200);
    console.log(response.body);


})
//Delete
test('delete created user',async({apihelper})=>{
let response = await apihelper.delete(`public/v2/users/${userid}`,Auth_Header);
console.log(response.status);
expect(response.status).toBe(404);
})
})

