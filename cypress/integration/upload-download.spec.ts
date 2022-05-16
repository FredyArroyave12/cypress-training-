import {UploadFilePage, DownloadFilePage} from "../page/index";
const fileName = "terminal-screen.png";
const textTest =
  "Lorem Ipsum is simply dummy text of the printing and typesetting indust";
const pdfTest = "the user navigates to the upload and download file page should";

describe("the user navigates to the upload and download file page should", () => {
  let uploadPage: UploadFilePage;
  let downloadPage: DownloadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
    downloadPage = new DownloadFilePage();
  });

  it("should upload file and verify the file title", () => {
    // arrange
    const fileConfirmTitle = "terminal_screen.png";
    uploadPage.visitUploadPage();
    // action
    uploadPage.getFile(fileName);

    // asserts
    uploadPage.uploadConfirm().should("contain", fileConfirmTitle);
  });

  it("should select a file to download and verify data", () => {
    // arrange
    downloadPage.visitDownloadPage();
    // action
    downloadPage.downloadTextData(textTest);
    downloadPage.downloadPdfData(pdfTest);
    // asserts
    downloadPage.downloadConfirmText().should("eq", textTest);
    downloadPage.downloadConfirmPdf().should("eq", pdfTest);
  });
});
