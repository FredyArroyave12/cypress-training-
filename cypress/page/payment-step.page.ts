/* eslint-disable require-jsdoc */
class PaymentPage {
  private bankSelect: string;
  private orderConfirm: string;
  private completOrder: string;

  constructor() {
    this.bankSelect = "a.bankwire";
    this.orderConfirm = ".cart_navigation button";
    this.completOrder = ".cheque-indent > strong.dark";
  }

  public selectBank(): void {
    cy.get(this.bankSelect).click();
  }

  public confirmOrder(): void {
    cy.get(this.orderConfirm).click();
  }

  public checkOrder(): any {
    return cy.get(this.completOrder);
  }
}
export {PaymentPage};
