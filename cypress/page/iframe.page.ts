/* eslint-disable require-jsdoc */
class IframePage {
  private urlPage: string;
  private iframeSelector: string;
  private cssLink: string;
  private cssUrl:string;

  constructor() {
    this.urlPage = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeSelector = "[title='W3Schools HTML Tutorial']";
    this.cssLink = "[title='CSS Tutorial']";
    this.cssUrl = "https://www.w3schools.com/css/default.asp";
  }

  public visit():void {
    cy.visit(this.urlPage);
  }

  public getTitle(): any {
    return cy.iframe(this.iframeSelector).find("h1").its(0);
  }

  public goToCssPageInFrame():any {
    cy.iframe(this.iframeSelector).find(this.cssLink).click();
    cy.frameLoaded(this.iframeSelector, {
      url: this.cssUrl,
    });
  }
}

export {IframePage};
