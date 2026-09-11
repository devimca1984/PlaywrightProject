const{expect} = require('@playwright/test')
exports.ShoppingCartPage = class ShoppingCartPage{

    constructor(page){
        this.page=page
        this.bookproductname=page.locator("[class='product-name']")

    }
    async AssetAddedProduct(productname){
        const actualproductname= await this.bookproductname.textContent()
        await expect(actualproductname).toEqual(productname)
    }
}

   