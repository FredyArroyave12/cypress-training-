/* eslint-disable require-jsdoc */
class ShoppingCartPage {
  private checkOutSummary : string;

  constructor() {
    this.checkOutSummary = ".cart_navigation > .standard-checkout";
  }

  public proceedSummary(): void {
    cy.get(this.checkOutSummary).click();
  }
}
export {ShoppingCartPage};
