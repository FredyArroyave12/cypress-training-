/* eslint-disable require-jsdoc */
class ShippingPage {
  private termsCheck: string;
  private confirmShippingButton: string;

  constructor() {
    this.termsCheck = "#cgv";
    this.confirmShippingButton = "button[name='processCarrier']";
  }

  public acceptTerms(): void {
    cy.get(this.termsCheck).click();
  }

  public confirmShipping(): void {
    cy.get(this.confirmShippingButton).click();
  }
}
export {ShippingPage};
