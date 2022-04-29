describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get(".sf-menu > li:nth-child(3) > a").click();
    cy.get(
        "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    cy.get("#layer_cart").should("be.visible");
    cy.get(".clearfix .button-container > a" ).click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("div.form_content button span .icon-lock").click();
    cy.get(".cart_navigation button").click();
    cy.get("div.order_carrier_content .checkbox span").click();
    cy.get("#form .cart_navigation button").click();
    cy.get("p.payment_module > a.bankwire").click();
    cy.get("p.cart_navigation > button").click();
    cy.get("#center_column > div > p > strong").should(
        "have.text",
        "Your order on My Store is complete.",
    );
  });
});
