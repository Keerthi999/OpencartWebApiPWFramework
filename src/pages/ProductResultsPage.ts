import type { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductResultsPage extends BasePage{
private readonly header;
private readonly productImages;
private readonly productMetadata;
private readonly productprice;
private map:Map<string,string|number>

constructor(page:Page){
    super(page);
this.header = page.getByRole('heading',{level:1});
this.productImages = page.locator('div#content li img');
this.productMetadata = page.locator('div.col-sm-4 ul.list-unstyled:nth-of-type(1) li');
this.productprice = page.locator('div.col-sm-4 ul.list-unstyled:nth-of-type(2) li');
this.map = new Map<string,string|number>;

}
async getProductHeaders():Promise<string>{
   return  this.header.innerText(); 
}
async getProductImages():Promise<number>{
    await this.productImages.first().waitFor({state:'visible'});
   return this.productImages.count();
}

async getProductInfo():Promise<Map<string,string|number>>{
this.map.set('ProductHeader', await this.getProductHeaders());
this.map.set('ProductImagesCount', await this.getProductImages());
await this.getProductMetadata();
await this.getProductPrice();
return this.map;
}
  private async getProductMetadata():Promise<void>{
   let metadata= await this.productMetadata.allInnerTexts();
   //Brand: Apple
//Product Code: Product 18
//Reward Points: 800
//Availability: Out Of Stock
for(let data of metadata){
let meta = data.split(":");
let metaKey = meta[0]?.trim();
let metaVal = meta[1]?.trim();
this.map.set(metaKey!,metaVal!);

}
}
 private async getProductPrice():Promise<void>{
   let pricedata =await  this.productprice.allInnerTexts();
   //$2,000.00
//Ex Tax: $2,000.00
let productPrice=pricedata[0]?.trim();
let esttax = pricedata[1]?.split(":")[1]?.trim();
this.map.set('ProductPrice',productPrice!);
this.map.set('esttax', esttax!);


}
}