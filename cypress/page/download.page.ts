/* eslint-disable require-jsdoc */
class DownloadFilePage {
  private downloadUrlPage: string;
  private typeText: string;
  private typePdf: string;
  private generateTextFile: string;
  private generatePdfFile: string;
  private linkDownloadText: string;
  private linkDownloadPdf: string;

  constructor() {
    this.downloadUrlPage = "demo.automationtesting.in/FileDownload.html";
    this.typeText = ".form-group #textbox";
    this.typePdf = ".form-group #pdfbox";
    this.generateTextFile = "button#createTxt";
    this.generatePdfFile = "button#createPdf";
    this.linkDownloadText = "#link-to-download";
    this.linkDownloadPdf = "#pdf-link-to-download";
  }

  public visitDownloadPage(): void {
    cy.visit(this.downloadUrlPage);
  }

  public downloadTextData(textTest: string): void {
    cy.get(this.typeText).type(textTest);
    cy.get(this.generateTextFile).click();
    cy.get(this.linkDownloadText).click();
  }
  public downloadConfirmText():any {
    return cy.readFile("cypress/downloads/info.txt");
  }
  public downloadPdfData(pdfTest: string): void {
    cy.get(this.typePdf).type(pdfTest);
    cy.get(this.generatePdfFile).click();
    cy.get(this.linkDownloadPdf).click();
  }

  public downloadConfirmPdf(): any {
    return cy.readFile("cypress/downloads/info.pdf");
  }
}

export {DownloadFilePage};
