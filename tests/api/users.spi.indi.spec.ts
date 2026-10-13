
import { expect } from '@playwright/test';
import { test } from '../../src/fixtures/apifixtures';
const Token = process.env.API_TOKEN
let Auth_Header = {Authorization:`Bearer ${Token}`}

async function createuser(apihelper:any){
    let userdata ={
    "name": "test12344",
    "email": `test1234${Date.now()}@friesen.example`,
    "gender": "female",
    "status": "inactive"
    }
   let response = await apihelper.post('public/v2/users',userdata,Auth_Header);
   //console.log(response);
   expect(response.status).toBe(201);
   return response.body
}

test('Post-create a user',async({apihelper})=>{
let userresponse = await createuser(apihelper);
let userid = userresponse.id;

//get the user
let response = await apihelper.get(`public/v2/users/${userid}`,Auth_Header);
expect(response.status).toBe(200);
expect(response.body.status).toBe('inactive');


})

//Update a user and verify
//post-fetch-put-get-verify
test('Put-update a user',async({apihelper})=>{
   let userresponse = await createuser(apihelper);
   let userid = userresponse.id;
   let userupdateddata ={
    "gender": "male",
    "status": "active"
   }
   //put the user
  let response =  await apihelper.put(`public/v2/users/${userid}`,userupdateddata,Auth_Header);
  expect(response.status).toBe(200);
  expect(response.body.status).toBe('active');
})

//Delete a user and verify
test('delete a user',async({apihelper})=>{
let userresponse = await createuser(apihelper);
let userid = userresponse.id;
let response = await apihelper.delete(`public/v2/users/${userid}`,Auth_Header);
expect(response.status).toBe(404);
})