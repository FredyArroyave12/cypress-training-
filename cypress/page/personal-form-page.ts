/* eslint-disable require-jsdoc */
class PersonalFormPage {
  private personalFormUrl: string;
  private form: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private gender: string;
  private mobileNumber: string;
  private hobbies: string;
  private currentAddress: string;
  private confirmForm: string;
  private state:string;
  private city:string;

  constructor() {
    this.personalFormUrl = "https://demoqa.com/automation-practice-form/";
    this.form = "#userForm";
    this.firstName = "#firstName";
    this.lastName ="#lastName";
    this.email = "#userEmail";
    this.gender = "#genterWrapper .col-md-9";
    this.mobileNumber = "#userNumber";
    this.hobbies = "#hobbiesWrapper .col-md-9 ";
    this.currentAddress = "#currentAddress";
    this.confirmForm = ".modal-title";
    this.state = "#state";
    this.city = "#city";
  }
  public visitForm(): void {
    cy.visit(this.personalFormUrl);
  }

  private findGenderByName(gender: string):any {
    return cy.get(this.gender).filter(`:contains("${gender}")`);
  }

  private findHobbiesByName(hobbies:string[]):any {
    hobbies.forEach((hobbie) => {
      cy.get(this.hobbies).find(`label:contains("${hobbie}")`).click();
    });
  }
  public fillForm(personalInformation:any): void {
    cy.get(this.firstName).type(personalInformation.name);
    cy.get(this.lastName).type(personalInformation.lastName);
    cy.get(this.email).type(personalInformation.email);
    this.findGenderByName(personalInformation.gender).find(`label:contains("${personalInformation.gender}")`).click();
    cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
    expect(personalInformation.mobileNumber).to.have.lengthOf(10);
    this.findHobbiesByName(personalInformation.hobbies);
    cy.get(this.currentAddress).type(personalInformation.currentAddress);
    cy.get(this.state).type(`${personalInformation.state}{enter}`);
    cy.get(this.city).type(`${personalInformation.city}{enter}`);
    cy.get(this.form).submit();
  }

  public confirmSubmit():any {
    return cy.get(this.confirmForm);
  }
}
export {PersonalFormPage};
