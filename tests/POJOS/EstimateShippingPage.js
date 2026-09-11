exports.EstimateShippingPage=class EstimateShippingPage{
    constructor(page){
        this.page=page
        this.countryselect=page.getByLabel('Country:')
        this.zipcode=page.getByLabel('Zip / postal code:')
        this.estimatebutton=page.locator("[name='estimateshipping']")
    }
    async EstimateButtonOnClick(country,zip){
        await this.countryselect.selectOption(country)
        await this.zipcode.fill(zip)
        await this.estimatebutton.click()

    }

}
