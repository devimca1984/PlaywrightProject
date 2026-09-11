const{expect} = require('@playwright/test')
exports.LoginPage = class LoginPage{
  //maintain the locator & reusable function creation
  //this - used to declare the element as global
constructor(page)
{
  this.page = page
  this.username = page.getByLabel('Email')
  this.password = page.getByLabel('Password')
  this.loginbtn = page.locator("[class='button-1 login-button']")
  this.logoutbtn = page.locator("[class='ico-logout']")
}

async LoginIntoApplication(username,password)
{
  await this.username.fill(username)
  await this.password.fill(password)
  await this.loginbtn.click()
  await expect(this.logoutbtn).toBeVisible()
}
}

    