/* eslint-disable require-jsdoc */
class IframePage {
  private urlPage: string;
  private iframeSelector: string;
  private cssLink: string;

  constructor() {
    this.urlPage = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeSelector = "[title='W3Schools HTML Tutorial']";
    this.cssLink = "[title='CSS Tutorial']";
  }

  public visit():void {
    cy.visit(this.urlPage);
  }

  private getIframeDocument():any {
    return cy.get(this.iframeSelector).its("0.contentDocument");
  }

  private getIframeBody():any {
    return this.getIframeDocument().its("body").then(cy.wrap);
  }

  public getTitle(): any {
    return this.getIframeBody().find("h1");
  }

  public goToCssPageInFrame():any {
    return this.getIframeBody().find(this.cssLink).click();
  }
  public cssPageConfirmed(): any {
    return this.getIframeBody().filter(":contains('CSS Tutorial')");
  }
}

export {IframePage};
