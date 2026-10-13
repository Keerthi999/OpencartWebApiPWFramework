
import { expect } from '@playwright/test';
import{test} from '../src/fixtures/pagefixtures';
import { CSVHelper } from '../src/utils/CSVHelper';
test.beforeEach(async({loginpage})=>{
 
    await loginpage.goToLoginPage();
    await loginpage.doLogin(process.env.USERNAME!,process.env.PASSWORD!); 
})
let productdata = CSVHelper.readCsv('src/data/product.csv');

for(let row of productdata){

test(`search results count test of - ${row.productname}, ${row.searchkey}`,async({homepage,searchpage})=>{
await homepage.dosearch(row.searchkey!);
expect(await searchpage.getProductSearchResults()).toBe(Number(row.resultcount));

});
}
for(let row of productdata){
test(`verify user is able to land on the product page - ${row.productname}, ${row.searchkey}`, async({searchpage,homepage,page})=>{
await homepage.dosearch(row.searchkey!);
await searchpage.selectProduct(row.productname!);
expect(await page.title()).toBe(row.productname!);
})
}
