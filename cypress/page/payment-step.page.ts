/* eslint-disable require-jsdoc */
class PaymentPage {
  private bankSelect: string;
  private orderConfirm: string;
  private completOrder: string;

  constructor() {
    this.bankSelect = "p.payment_module > a.bankwire";
    this.orderConfirm = "p.cart_navigation > button";
    this.completOrder = "#center_column > div > p > strong";
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
