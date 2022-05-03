/* eslint-disable require-jsdoc */
class AdressStepPage {
  private addresConfirm: string;

  constructor() {
    this.addresConfirm = ".cart_navigation button";
  }

  public adressConfirmed(): void {
    cy.get(this.addresConfirm).click();
  }
}
export {AdressStepPage};
