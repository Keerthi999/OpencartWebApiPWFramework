import type { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
     
    private readonly emailid:Locator;
    private readonly password:Locator;
    private readonly loginbtn:Locator;
    private readonly forgottenpassword:Locator;
    private readonly logo:Locator
    private readonly loginerrormessage:Locator;

    constructor(page:Page){
        super(page);
this.emailid = page.getByRole('textbox',{name:'E-Mail Address'});
this.password = page.getByRole('textbox',{name:'Password'});
this.loginbtn = page.getByRole('button',{name:'Login'});
this.forgottenpassword = page.getByRole('link',{name:'Forgotten Password'}).first();
this.logo = page.getByAltText('naveenopencart');
this.loginerrormessage = page.locator('.alert.alert-danger.alert-dismissible');
    }

    async goToLoginPage():Promise<void>{
    await this.page.goto('opencart/index.php?route=account/login');

    }
    async getPageTitle():Promise<string>{
         return this.page.title();
    }
    async getForgottenPasswordLinkExist():Promise<boolean>{
         return this.forgottenpassword.isVisible();
    }
    async doLogin(username:string, password:string):Promise<void>{
await this.emailid.fill(username);
await this.password.fill(password);
await this.loginbtn.click();
    }
async getloginerrormessage():Promise<boolean>{
   return await this.loginerrormessage.isVisible();
}
}   