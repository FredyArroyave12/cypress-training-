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

  public login(email:string, password:string): void {
    cy.get(this.emailType).type(email);
    cy.get(this.passwordType).type(password);
  }

  public loginConfirm(): void {
    cy.get(this.loginButton).click();
  }
}

export {LoginPage};
