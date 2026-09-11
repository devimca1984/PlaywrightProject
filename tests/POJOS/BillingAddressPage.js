exports.BillingAddressPage=class BillingAddressPage{

    constructor(page){
        this.page=page
        this.billingcontinue=page.locator("[onclick='Billing.save()']")
    }
    async BillingContinueButton(){
        await this.billingcontinue.click()
    }

}