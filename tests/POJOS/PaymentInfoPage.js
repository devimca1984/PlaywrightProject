exports.PaymentInfoPage = class PaymentInfoPage{

    constructor(page){
        this.page=page
        this.paymentinfo= page.locator("[onclick='PaymentInfo.save()']")
    }
    async PaymentInfoContinueButton(){
        await this.paymentinfo.click()
    }
}