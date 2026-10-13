import { expect } from '@playwright/test';
import{test} from '../src/fixtures/pagefixtures'

test.beforeEach(async({loginpage,homepage})=>{
   
await loginpage.goToLoginPage(); 

})
test('login page test',async ({loginpage})=>{
    

let title =await loginpage.getPageTitle();
console.log(title);
 expect(title).toBe('Account Login');
})
test('forgotten password link exists test',async({loginpage})=>{
    
 expect(await loginpage.getForgottenPasswordLinkExist()).toBeTruthy();
await loginpage.doLogin('keerthij@gmail.com','Account Login')

})
test('user is able to login to app test', async({loginpage,homepage})=>{
    await loginpage.doLogin(process.env.USERNAME!,process.env.PASSWORD!);
    
    expect(await homepage.getHomePageTitle()).toBe('My Account');
    let hptitle =await homepage.getHomePageTitle();
    console.log(hptitle);
})
