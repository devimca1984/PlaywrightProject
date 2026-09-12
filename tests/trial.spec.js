const{test,expect} = require ('@playwright/test')
test("Open the Browser", async ({browser}) => {
    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://testautomationpractice.blogspot.com/")
})

