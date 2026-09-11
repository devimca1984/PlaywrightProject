const{expect}=require ('@playwright/test')
exports.ConfirmOrderPage=class ConfirmOrderPage{
    constructor(page){
        this.page=page
        this.productname1=page.locator('.product-name')
        this.confirmorderbutton=page.locator("[onclick='ConfirmOrder.save()']")
        
    }
    async ConfirmOrderButton(){
        await this.productname1.textContent()
        await this.confirmorderbutton.click()
        await expect(this.productname1).toHaveText('Health Book')
    }
}
