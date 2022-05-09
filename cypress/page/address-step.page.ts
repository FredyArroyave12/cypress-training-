/* eslint-disable require-jsdoc */
class AddressStepPage {
  private addressConfirm: string;

  constructor() {
    this.addressConfirm = "button[name='processAddress']";
  }

  public checkAddress(): void {
    cy.get(this.addressConfirm).click();
  }
}
export {AddressStepPage};
