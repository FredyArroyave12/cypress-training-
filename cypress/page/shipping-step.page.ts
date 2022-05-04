/* eslint-disable require-jsdoc */
class ShippingPage {
  private termsCheck: string;
  private confirmShippingButton: string;

  constructor() {
    this.termsCheck = "div.order_carrier_content .checkbox span";
    this.confirmShippingButton = "#form .cart_navigation button";
  }

  public acceptTerms(): void {
    cy.get(this.termsCheck).click();
  }

  public confirmShipping(): void {
    cy.get(this.confirmShippingButton).click();
  }
}
export {ShippingPage};
