import {PersonalFormPage} from "../page/index";
const personalInformation = {
  name: "Holmes",
  lastName: "Salazar",
  email: "hibarras@email.com",
  gender: "Male",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
  state: "Haryana",
  city: "Karnal",
};

describe("the user navigates to the personal form page should", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();
  });

  it("show form and fill the personal form ", () => {
    // arrange
    personalFormPage.visitForm();
    const submitConfirmedMessage = "Thanks for submitting the form";
    // action
    personalFormPage.fillForm(personalInformation);
    // asserts
    personalFormPage.confirmSubmit().should("have.text", submitConfirmedMessage);
  });
});
