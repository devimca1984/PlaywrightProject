exports.ThankYouPage=class ThankYouPage{
    constructor(page){
        this.page=page
        this.message=page.locator("//strong[text()='Your order has been successfully processed!']")

    }
    async Thankyou(){
        const ordersuccess= await this.message.textContent()
        console.log(ordersuccess)
        
    }
}
