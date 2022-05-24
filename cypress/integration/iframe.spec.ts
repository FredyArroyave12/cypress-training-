import {IframePage} from "../page/index";


describe("the user navigates to the Iframe  page should", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();
  });

  it("should be able to see the HTML tutorial in the iframe", () => {
    // arrange
    iframePage.visit();
    // action
    iframePage.getTitle();
    // asserts
    iframePage.getTitle().should("include.text", "HTML Tutorial");
  });

  it("should navigates to the CSS Tutorial page in the iframe", () => {
    // arrange
    iframePage.visit();
    // action
    iframePage.goToCssPageInFrame();
    // asserts
    iframePage.getTitle().should("include.text", "CSS Tutorial");
  });
});
