import test from "@playwright/test";

let Auth_Token ={Authorization: 'Bearer 76db98d97f12870367b7d3336e62ae43b258b58d73c60296a89f178d691db27f'}
test('get user test',async({request})=>{
  let response = await request.get('https://gorest.co.in/public/v2/users/8649259',{

    })
   // response.status()
    console.log( response.status());
})

let userdata ={
    "name": "test12344",
    "email": `test1234${Date.now()}@friesen.example`,
    "gender": "female",
    "status": "inactive"
}
test('create a user test',async({request})=>{
let response =await request.post('https://gorest.co.in/public/v2/users',{
    headers:Auth_Token,
    data:userdata
});
console.log(await response.json());
console.log(response.status());
console.log(response.statusText());

})
test('update  a user test',async({request})=>{
let response =await request.put('https://gorest.co.in/public/v2/users/8654133',{
    headers:Auth_Token,
    data:userdata
});
console.log(await response.json());
console.log(response.status());
console.log(response.statusText());

})
test('delete  a user test',async({request})=>{
let response =await request.delete('https://gorest.co.in/public/v2/users/8654133',{
    headers:Auth_Token,
  
});
//console.log(await response.json());
console.log(response.status());
console.log(response.statusText());

})