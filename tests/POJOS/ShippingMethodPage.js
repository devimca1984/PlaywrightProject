exports.ShippingMethodPage=class ShippingMethodPage{
    constructor(page){
        this.page=page
        this.shippingmethod=page.locator("[onclick='ShippingMethod.save()']")

    }
    async ShippingMethodContinueButton(){
        await this.shippingmethod.click()
    }
}