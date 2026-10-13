
import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CSVHelper } from "../utils/CSVHelper";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { ProductResultsPage } from "../pages/ProductResultsPage";


type pagefixtures = ({
    loginpage:LoginPage;
    homepage:HomePage;
    searchpage:SearchResultsPage;
    productresults:ProductResultsPage;
    testdata:Record<string,string>[]

})
export let test = baseTest.extend<pagefixtures>({
loginpage: async({page},use)=>{
let loginpage = new LoginPage(page);
await use(loginpage);
},
homepage: async({page},use)=>{
    let homepage = new HomePage(page);
    await use(homepage);
},
searchpage: async({page},use)=>{
let searchpage = new SearchResultsPage(page);
await use(searchpage);
},
productresults:async({page},use)=>{
    let productresults = new ProductResultsPage(page);
    await use(productresults);
},
testdata: async({},use)=>{
let testdata = CSVHelper.readCsv('src/data/loginData.csv');
await use(testdata);

}

})