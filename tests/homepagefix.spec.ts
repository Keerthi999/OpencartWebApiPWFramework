import { expect } from '@playwright/test';
import{test} from '../src/fixtures/pagefixtures';
test.beforeEach(async({loginpage})=>{
 
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.USERNAME!,process.env.PASSWORD!); 
})
test('homepage title test',async({homepage})=>{
   
   let title = await homepage.getHomePageTitle();
   console.log(title);
})

test('logout link exist',async({homepage})=>{

   expect(await homepage.isLogoutLinkExists()).toBeTruthy();

})
test('homepage headers exist',async({homepage})=>{

   let headers = await homepage.getHomePageHeaders();
   console.log(headers);                              
   expect(headers).toHaveLength(4);

})

