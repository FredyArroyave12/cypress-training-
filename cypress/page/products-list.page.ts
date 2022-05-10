/* eslint-disable require-jsdoc */
class ProductListPage {
  private addToCard: string;
  private modalView: string;
  private proceedCheckOut: string;

  constructor() {
    this.addToCard =
      ".ajax_add_to_cart_button";
    this.modalView = "#layer_cart";
    this.proceedCheckOut = "a[title='Proceed to checkout']";
  }

  public addItem(): void {
    cy.get(this.addToCard).click();
  }

  public checkOut(): void {
    cy.get(this.modalView).should("be.visible");
    cy.get(this.proceedCheckOut).click();
  }
}

export {ProductListPage};
