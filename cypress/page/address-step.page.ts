/* eslint-disable require-jsdoc */
class AddressStepPage {
  private addressConfirm: string;

  constructor() {
    this.addressConfirm = ".cart_navigation button";
  }

  public checkAddress(): void {
    cy.get(this.addressConfirm).click();
  }
}
export {AddressStepPage};
