/* eslint-disable require-jsdoc */
interface personalInformation {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  mobileNumber: string;
  hobbies: string[];
  currentAddress: string;
  state: string;
  city: string;
}
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
    this.gender = "#genterWrapper input";
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


  private findHobbiesByName(hobbies:string[]):any {
    hobbies.forEach((hobby) => {
      cy.get(this.hobbies).find(`label:contains("${hobby}")`).click();
    });
  }
  public fillForm(personalInformation:personalInformation): void {
    cy.get(this.firstName).type(personalInformation.name);
    cy.get(this.lastName).type(personalInformation.lastName);
    cy.get(this.email).type(personalInformation.email);
    // eslint-disable-next-line cypress/no-force
    cy.get(this.gender).filter(`[value="${personalInformation.gender}"]`).check({force: true});
    cy.get(this.mobileNumber).type(personalInformation.mobileNumber);
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
