const{test,expect} = require ('@playwright/test')
test('Pratice Automation Tools',async function ({browser}) {
const context = await browser.newContext()
const page= await context.newPage()
//Browser Launch
await page.goto("https://testautomationpractice.blogspot.com/")
//Window Handling
const[page1,page2]= await Promise.all([
context.waitForEvent('page')
page1.getByRole('button',{name : 'New Tab'}).click()
])

console.log(await Page1.locator("ul li a").first().textContent())
await page.getByRole('checkbox',{name : 'Monday'}).check()
await page.waitForTimeout(5000)


})