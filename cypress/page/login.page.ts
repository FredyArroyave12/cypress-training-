/* eslint-disable require-jsdoc */
class LoginPage {
  private emailType: string;
  private passwordType: string;
  loginButton: string;

  constructor() {
    this.emailType = "#email";
    this.passwordType = "#passwd";
    this.loginButton = "#SubmitLogin";
  }

  public digitCredentials(email:string, password:string): void {
    cy.get(this.emailType).type(email);
    cy.get(this.passwordType).type(password);
  }

  public login(): void {
    cy.get(this.loginButton).click();
  }
}

export {LoginPage};
