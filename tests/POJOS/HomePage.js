exports.HomePage = class HomePage{

    constructor(page){
        this.page=page
        this.bookslink=page.getByRole('link', {name : 'Books'})

    }
    async ClickonBooks()
    {
        await this.bookslink.first().click()
    }
}