/* eslint-disable require-jsdoc */
class ShopingCardPage {
  private checkOutSummary : string;

  constructor() {
    this.checkOutSummary = ".cart_navigation span";
  }

  public proccedSummary(): void {
    cy.get(this.checkOutSummary).click();
  }
}
export {ShopingCardPage};
