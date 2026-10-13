
import { expect } from '@playwright/test';
import{test} from '../src/fixtures/pagefixtures';
test.beforeEach(async({loginpage})=>{
 
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.USERNAME!,process.env.PASSWORD!); 
})
test('verify product headers',async({homepage,searchpage,productresults})=>{
await homepage.dosearch('macbook');
await searchpage.selectProduct('MacBook Pro');

expect(await productresults.getProductHeaders()).toBe('MacBook Pro')

})
test('verify product images count',async({homepage,searchpage,productresults})=>{
    await homepage.dosearch('macbook');
    await searchpage.selectProduct('MacBook Pro');
   expect(await productresults.getProductImages()).toBe(4);
   
})
test('verify product info test',async({homepage,searchpage,productresults})=>{
await homepage.dosearch('macbook');
await searchpage.selectProduct('MacBook Pro');
let actprod =await productresults.getProductInfo();
console.log(actprod);

})