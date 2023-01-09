describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("button[datasign='2']").click();
    cy.get("button[datasign='+']").click();
    cy.get("button[datasign='6']").click();
    cy.get("button[datasign='=']").click();

    setTimeout(() => {
      cy.get(".screen").should("eq", "8");
    }, 500);
  });
});
