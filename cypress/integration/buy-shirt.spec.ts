
import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentPage,
  ProductListPage,
  ShippingPage,
  ShoppingCartPage} from "../page/index";


describe("Buy a t-shirt", () => {
  let menuContentPage:MenuContentPage;
  let productListPage:ProductListPage;
  let shoppingCartPage:ShoppingCartPage;
  let loginPage:LoginPage;
  let addressStepPage:AddressStepPage;
  let shippingPage:ShippingPage;
  let paymentPage:PaymentPage;

  before(()=> {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingPage = new ShippingPage();
    paymentPage = new PaymentPage();
  });

  it("then the t-shirt should be bought", () => {
    // arrange
    menuContentPage.visitMenuContentPage();
    const user = "aperdomobo@gmail.com";
    const pass = "WorkshopProtractor";
    const orderConfirmedMessage = "Your order on My Store is complete.";
    // act
    menuContentPage.goToTShirtMenu();
    productListPage.addItem("Faded Short Sleeve T-shirts");
    productListPage.checkOut();
    shoppingCartPage.proceedSummary();
    loginPage.digitCredentials(user, pass);
    loginPage.login();
    addressStepPage.checkAddress();
    shippingPage.acceptTerms();
    shippingPage.confirmShipping();
    paymentPage.selectBank();
    paymentPage.confirmOrder();
    // assert
    paymentPage
        .checkOrder()
        .should("have.text", orderConfirmedMessage );
  });
});
