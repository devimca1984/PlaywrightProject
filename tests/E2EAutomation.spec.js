const {test,expect} = require('@playwright/test')
const { LoginPage } = require('./POJOS/LoginPage')
const { HomePage } = require('./POJOS/HomePage')
const { ProductPage } = require('./POJOS/ProductPage')
const { ShoppingCartPage } = require('./POJOS/ShoppingCartPage')
const { EstimateShippingPage } = require('./POJOS/EstimateShippingPage')
const { CheckoutPage } = require('./POJOS/CheckoutPage')
const { BillingAddressPage } = require('./POJOS/BillingAddressPage')
const { ShippingAddressPage } = require('./POJOS/ShippingAddressPage')
const { ShippingMethodPage } = require('./POJOS/ShippingMethodPage')
const { PaymentMethodPage } = require('./POJOS/PaymentMethodPage')
const { PaymentInfoPage } = require('./POJOS/PaymentInfoPage')
const { ConfirmOrderPage } = require('./POJOS/ConfirmOrderPage')
const { ThankYouPage } = require('./POJOS/ThankYouPage')
test("My First E2E Automation test",async ({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://demowebshop.tricentis.com/login')
    //Login Page
    const loginpage = new LoginPage(page)
    let username = "myplaywright@gmail.com"
    let password = "test@play"
    await loginpage.LoginIntoApplication(username,password)
    //Home Page
     const homepage = new HomePage(page)
     await homepage.ClickonBooks() 
    //Product Page  
    const productpage=new ProductPage(page)
    await productpage.BookAddtoCart()
    //Shopping Cart Page   
    const shoppingcartpage= new ShoppingCartPage(page)
    var productname = 'Health Book'
    await shoppingcartpage.AssetAddedProduct(productname)
    //Estimate Shipping Page
    const estimateshippingpage=new EstimateShippingPage(page)
    let country="India"
    let zip ="798786"
    await estimateshippingpage.EstimateButtonOnClick(country,zip)
    //Checkout Page
    const checkoutpage = new CheckoutPage(page)
    await checkoutpage.CheckoutClick()
    //Billing Address Page
    const billingaddresspage = new BillingAddressPage(page)
    await billingaddresspage.BillingContinueButton()
    //Shipping Address Page
    const shippingaddresspage = new ShippingAddressPage(page)
    await shippingaddresspage.ShippingcontinueButton()
    //Shipping Method Page
    const shippingmethodpage = new ShippingMethodPage(page)
    await shippingmethodpage.ShippingMethodContinueButton()
    //Payment Method Page
    const paymentmethodpage = new PaymentMethodPage(page)
    await paymentmethodpage.PaymentMethodContinueButton()
    //Payment Information Page
    const paymentinfopage = new PaymentInfoPage(page)
    await paymentinfopage.PaymentInfoContinueButton()
    //Confirm Order Page
    const confirmorderpage=new ConfirmOrderPage(page)
    await confirmorderpage.ConfirmOrderButton()
    //Thank You Page     
    const thankyoupage=new ThankYouPage(page)
    await thankyoupage.Thankyou()
    await page.waitForTimeout(3000)
})
