/* eslint-disable require-jsdoc */
class ProductListPage {
  private addToCard: string;
  private modalView: string;
  private proceedCheckOut: string;
  private selectProduct: string;

  constructor() {
    this.addToCard = ".ajax_add_to_cart_button";
    this.modalView = "#layer_cart";
    this.proceedCheckOut = "a[title='Proceed to checkout']";
    this.selectProduct = ".product-container";
  }
  private findProductByName(name: string): any {
    return cy.get(this.selectProduct).filter(`:contains("${name}")`);
  }
  public addItem(name: string): void {
    this.findProductByName(name).find(this.addToCard).click();
  }
  public checkOut(): void {
    cy.get(this.modalView).should("be.visible");
    cy.get(this.proceedCheckOut).click();
  }
}

export {ProductListPage};
