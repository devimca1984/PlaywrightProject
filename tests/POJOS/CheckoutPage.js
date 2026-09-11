const{expect}=require('@playwright/test')
exports.CheckoutPage=class CheckoutPage{
    constructor(page){
        this.page=page
        this.termsofservice=page.locator("[id='termsofservice']")
        this.checkoutbutton= page.getByRole('button',{name :'checkout'})
        this.checkoutpagetitle=page.locator("[class='page-title'] h1")

    }
    async CheckoutClick(){
        await this.termsofservice.check()
        await this.checkoutbutton.click()
        await expect(this.checkoutpagetitle).toHaveText("Checkout")

    }
}
