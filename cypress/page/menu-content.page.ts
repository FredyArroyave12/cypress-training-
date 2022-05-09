/* eslint-disable require-jsdoc */
class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string;

  constructor() {
    this.tShirtMenu = ".sf-menu > li > a[title=T-shirts]";
    this.menuContentPageURL = "http://automationpractice.com/";
  }

  public visitMenuContentPage(): void {
    cy.visit(this.menuContentPageURL);
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click();
  }
}

export {MenuContentPage};
