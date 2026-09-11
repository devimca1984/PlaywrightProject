exports.PaymentMethodPage=class PaymentMethodPage{
    constructor(page){
        this.page=page
        this.paymentmethod = page.locator("[onclick='PaymentMethod.save()']")
    }
    async PaymentMethodContinueButton(){
        await this.paymentmethod.click()
    }
}