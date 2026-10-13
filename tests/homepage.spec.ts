import test, { expect } from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";
let loginpage:LoginPage;
let homepage:HomePage;
test.beforeEach(async({page})=>{
 loginpage = new LoginPage(page);
     homepage = new HomePage(page);
    await loginpage.goToLoginPage();
    await loginpage.doLogin('pwtestbatch@open.com','pw123'); 
})
test('homepage title test',async({})=>{
   
   let title = await homepage.getHomePageTitle();
   console.log(title);
})

test('logout link exist',async({})=>{

   expect(await homepage.isLogoutLinkExists()).toBeTruthy();

})
test('homepage headers exist',async({})=>{

   let headers = await homepage.getHomePageHeaders();
   console.log(headers);
   expect(headers).toHaveLength(4);

})