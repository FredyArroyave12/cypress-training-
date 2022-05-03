/* eslint-disable require-jsdoc */
class PaymentPage {
  private bankSelect: string;
  private confirmOrder: string;
  private completOrder: string;

  constructor() {
    this.bankSelect = "p.payment_module > a.bankwire";
    this.confirmOrder = "p.cart_navigation > button";
    this.completOrder = "#center_column > div > p > strong";
  }

  public bankSelected(): void {
    cy.get(this.bankSelect).click();
  }

  public orderConfirmed(): void {
    cy.get(this.confirmOrder).click();
  }

  public orderCompleted(): void {
    cy.get(this.completOrder).should(
        "have.text",
        "Your order on My Store is complete.",
    );
  }
}
export {PaymentPage};
