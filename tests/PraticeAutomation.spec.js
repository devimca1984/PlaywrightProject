const{test,expect} = require ('@playwright/test')
test('Pratice Automation Tools',async function ({browser}) {
const context = await browser.newContext()
const page= await context.newPage()
//Browser Launch
await page.goto("https://testautomationpractice.blogspot.com/")
//TextBox
await page.getByPlaceholder('Enter Name').fill("Devi Shree")
await page.getByPlaceholder('Enter EMail').fill('adevimca1984@gmail.com')
await page.getByPlaceholder('Enter Phone').fill("7845800982")
await page.getByLabel('Address:').fill("Plot No 401,S1,B block,2nd floor,Varshini Homes,Madipakkam,Chennai-600091")
//Radio Button
await page.getByLabel('Female').click()
//CheckBox
await page.getByRole('checkbox',{name : 'Sunday'}).check()
await page.getByRole('checkbox',{name : 'Saturday'}).check()
//Single Select Dropdown
await page.getByRole('combobox',{name : 'Country:'}).selectOption({value : 'india'})
//Multiple Select Dropdown
await page.locator('#colors').selectOption([{value : 'white'},{value :'green'},{value :'blue'}])
//Date Picker 1
await page.locator("//input[@id='datepicker']").fill('22-08-26')
//Single File Upload
await page.locator('#singleFileInput').setInputFiles("tests/AutomationTestFiles/IMG-20210301-WA0005.jpg")
await page.getByRole('button',{name : 'Upload Single File'}).click()
//Multiple File Upload
await page.locator('#multipleFilesInput').setInputFiles(["tests/AutomationTestFiles/IMG-20210301-WA0006.jpg","tests/AutomationTestFiles/IMG-20210301-WA0007.jpg"])
await page.getByRole('button',{name : 'Upload Multiple Files'}).click()
//Simple Alert
/*await page.getByRole('button',{name : 'Simple Alert'}).click()
//await page.on('dialog',async function(dialog) {
    //console.log(dialog.message)
    //await dialog.accept()
})*/
//Prompt Alert
await page.on('dialog',async function (dialog) {
    await dialog.accept("Devi Shree")
    console.log(dialog.message)
})
await page.getByRole('button',{name :'Prompt Alert'}).click()
//Mouse Hover 
await page.getByRole('button',{name : 'Point Me'}).hover()
//Double Click
await page.getByRole('button',{name : 'Copy Text'}).dblclick()
//Drag & Drop
const drag=await page.locator("div#draggable")
const drop=await page.locator("div#droppable")
await drag.dragTo(drop)
//Right Click
//await page.getByRole('button',{name :'Popup Windows'}).click({button : 'right'})
//Keyboard Actions
/*await page.getByLabel('Name:').fill('adevimca1984@gmail.com')
await page.keyboard.press('control+A')
await page.keyboard.press('Control+X')
await page.keyboard.press('tab')
await page.keyboard.press('Control+V')*/
await page.waitForTimeout(5000)
})


