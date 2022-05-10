/* eslint-disable require-jsdoc */
class MenuContentPage {
  private tShirtMenu: string;
  private dressesMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.tShirtMenu = ".sf-menu > li > a[title=T-shirts]";
    this.menuContentPageURL = "http://automationpractice.com/";
    this.dressesMenu = ".sf-menu > li > a[title=Dresses]";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click();
  }
}

export {MenuContentPage};
