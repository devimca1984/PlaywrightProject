exports.ShippingAddressPage=class ShippingAddressPage{
    constructor(page){
        this.page=page
        this.shipingcontinue=page.locator("[onclick='Shipping.save()']")

    }
    async ShippingcontinueButton(){
        await this.shipingcontinue.click()
    }

}