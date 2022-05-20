import {UploadFilePage, DownloadFilePage} from "../page/index";
const fileName = "terminal-screen.png";
const textTest =
  "Lorem Ipsum is simply dummy text of the printing and typesetting indust";
const pdfTest = "the user navigates to the upload and download file page should";
const pathText = "cypress/downloads/info.txt";
const pathPdf = "cypress/downloads/info.pdf";

describe("the user navigates", () => {
  let uploadPage: UploadFilePage;
  let downloadPage: DownloadFilePage;

  before(() => {
    uploadPage = new UploadFilePage();
    downloadPage = new DownloadFilePage();
  });

  it("should upload file and verify the file title", () => {
    // arrange
    uploadPage.visitUploadPage();
    // action
    uploadPage.uploadFile(fileName);
    // asserts
    uploadPage.getUploadedFileName().should("contain", "terminal_screen.png");
  });

  it("should select a file to download and verify data", () => {
    // arrange
    downloadPage.visitDownloadPage();
    // action
    downloadPage.setDataText(textTest);
    downloadPage.downloadTextData();
    downloadPage.setDataPdf(pdfTest);
    downloadPage.downloadPdfData();
    // asserts
    downloadPage.getFileContent(pathText).should("eq", textTest);
    downloadPage.getFileContent(pathPdf).should("eq", pdfTest);
  });
});
