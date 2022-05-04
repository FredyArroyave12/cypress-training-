
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
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    // cy.get(
    //     "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    // ).click();
    // cy.get("#layer_cart").should("be.visible");
    // cy.get(".clearfix .button-container > a" ).click();
    productListPage.addItem();
    productListPage.checkOut();
    // cy.get(".cart_navigation span").click();
    shoppingCartPage.proceedSummary();
    // cy.get("#email").type("aperdomobo@gmail.com");
    // cy.get("#passwd").type("WorkshopProtractor");
    // cy.get("div.form_content button span .icon-lock").click();
    loginPage.digitCredentials("aperdomobo@gmail.com", "WorkshopProtractor");
    loginPage.login();
    // cy.get(".cart_navigation button").click();
    addressStepPage.checkAddress();
    // cy.get("div.order_carrier_content .checkbox span").click();
    // cy.get("#form .cart_navigation button").click();
    shippingPage.acceptTerms();
    shippingPage.confirmShipping();
    // cy.get("p.payment_module > a.bankwire").click();
    // cy.get("p.cart_navigation > button").click();
    // cy.get("#center_column > div > p > strong").should(
    //     "have.text",
    //     "Your order on My Store is complete.",
    // );
    paymentPage.selectBank();
    paymentPage.confirmOrder();
    paymentPage
        .checkOrder()
        .should("have.text", "Your order on My Store is complete.");
  });
});
