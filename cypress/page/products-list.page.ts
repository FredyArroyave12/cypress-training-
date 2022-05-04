/* eslint-disable require-jsdoc */
class ProductListPage {
  private addToCard: string;
  private modalView: string;
  private proceedCheckOut: string;

  constructor() {
    this.addToCard =
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.modalView = "#layer_cart";
    this.proceedCheckOut = ".clearfix .button-container > a";
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
