
import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentPage,
  ProductListPage,
  ShippingPage,
  ShoppingCartPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // arrange
    menuContentPage.visitMenuContentPage();
    const user = "aperdomobo@gmail.com";
    const pass = "WorkshopProtractor";
    const orderConfirmedMessage = "Your order on My Store is complete.";
    // act
    menuContentPage.goToTShirtMenu();
    productListPage.addItem();
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
