/* eslint-disable require-jsdoc */
class LoginPage {
  private emailType: string;
  private passwordType: string;
  loginButton: string;

  constructor() {
    this.emailType = "#email";
    this.passwordType = "#passwd";
    this.loginButton = "div.form_content button span .icon-lock";
  }

  public emailField(): void {
    cy.get(this.emailType).type("aperdomobo@gmail.com");
  }

  public passwordField(): void {
    cy.get(this.passwordType).type("WorkshopProtractor");
  }

  public loginConfirmed(): void {
    cy.get(this.loginButton).click();
  }
}

export {LoginPage};
