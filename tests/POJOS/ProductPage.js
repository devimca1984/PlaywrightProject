exports.ProductPage = class ProductPage{

    constructor(page){
        this.page=page
        this.bookname=page.locator('.product-item').filter({ hasText: 'Health Book' })
        this.bookaddtocartlink=this.bookname.getByRole('button',{ name:'Add to cart'})
        this.shoppingcartlink=page.locator("//span[text()='Shopping cart']")
    }
    async BookAddtoCart(){
        //await this.bookname.filter({hasText :'Health  Book'}).click()
        await this.bookaddtocartlink.click()
        await this.shoppingcartlink.click()

    }

}

