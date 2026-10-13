import { expect } from '@playwright/test';
import{test} from '../src/fixtures/pagefixtures'
import { JsonHelper } from '../src/utils/JsonHelper';



test.beforeEach(async({loginpage, homepage})=>{
  
await loginpage.goToLoginPage(); 
 //await loginpage.doLogin('pwtestbatch@open.com','pw123');

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
    expect(await homepage.getHomePageTitle()).toBe("My Account");
    let hptitle =await homepage.getHomePageTitle();
    console.log(hptitle);
})

test('login to app using wrong credentials with data driven approach',async({loginpage,testdata})=>{
for(let row of testdata){
    await loginpage.doLogin(row.username!,row.password!);
    expect(await loginpage.getloginerrormessage()).toBeTruthy();
}
})

let jsontestdata = JsonHelper.readjson('src/data/logindata.json');
for(let row of jsontestdata){
    test(`login to app using wrong credentials with - ${row.username} ${row.password}`,async({loginpage})=>{
await loginpage.doLogin(row.username!,row.password!);
expect(await loginpage.getloginerrormessage()).toBeTruthy();
    })
}