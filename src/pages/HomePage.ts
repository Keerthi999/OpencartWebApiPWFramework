import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    private readonly logout:Locator;
    private readonly headers:Locator;
    private readonly search:Locator;
    private readonly searchicon:Locator;

constructor(page:Page){
    super(page)
    this.logout = page.getByRole('link',{name:'Logout'});
    this.headers = page.getByRole('heading',{level:2});
    this.search = page.getByRole('textbox',{name:'Search'});
    this.searchicon=page.locator('div#search button');
}

async getHomePageTitle():Promise<string>{
    return await this.page.title();
}
async isLogoutLinkExists():Promise<boolean>{
   return  await this.logout.isVisible();
}
async getHomePageHeaders():Promise<string[]>{
    return await this.headers.allInnerTexts();
}
async dosearch(searchkey:string){
await this.search.fill(searchkey);
await this.searchicon.click();
}
}