/* eslint-disable require-jsdoc */
class ShoppingCartPage {
  private checkOutSummary : string;

  constructor() {
    this.checkOutSummary = ".cart_navigation span";
  }

  public proceedSummary(): void {
    cy.get(this.checkOutSummary).click();
  }
}
export {ShoppingCartPage};
