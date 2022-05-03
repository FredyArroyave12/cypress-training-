/* eslint-disable require-jsdoc */
class ShippingPage {
  private termsCheck: string;
  private confirmShipping: string;

  constructor() {
    this.termsCheck = "div.order_carrier_content .checkbox span";
    this.confirmShipping = "#form .cart_navigation button";
  }

  public termsChecked(): void {
    cy.get(this.termsCheck).click();
  }

  public shippingConfirmed(): void {
    cy.get(this.confirmShipping).click();
  }
}
export {ShippingPage};
