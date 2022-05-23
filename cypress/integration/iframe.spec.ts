import {IframePage} from "../page/index";


describe("the user navigates to the Iframe  page should", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
  });

  it("show form and fill the personal form ", () => {
    // arrange
    iframePage.visit();
    // action
    iframePage.getTitle();
    iframePage.goToCssPageInFrame();
    // asserts
    iframePage.getTitle().should("include.text", "HTML Tutorial");
    iframePage.cssPageConfirmed().should("include.text", "CSS Tutorial");
  });
});
