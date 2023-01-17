describe("Calculator", () => {
  it("math solving flow", () => {
    cy.intercept("POST", "/calculate").as("calculate");

    cy.visit("/");
    cy.get("button[datasign='2']").click();
    cy.get("button[datasign='+']").click();
    cy.get("button[datasign='6']").click();
    cy.get("button[datasign='=']").click();

    cy.wait("@calculate");

    cy.get(".screen").should("have.text", "8");
  });

  it("GUI testing", () => {
    const signs = [
      "v",
      "^",
      "(",
      ")",
      "1",
      "2",
      "3",
      "/",
      "4",
      "5",
      "6",
      "*",
      "7",
      "8",
      "9",
      "-",
      ".",
      "0",
      "+",
    ];

    cy.visit("/");

    signs.forEach((sign) => {
      cy.get(`button[datasign='${sign}']`).click();
      cy.get(".screen").should("have.text", sign);
      cy.get(`button[datasign='CE']`).click();
      cy.get(".screen").invoke("text").should("be.empty");
    });

    cy.get(`button[datasign='2']`).click();
    cy.get(".screen").should("have.text", "2");
    cy.get(`button[datasign='C']`).click();
    cy.get(".screen").invoke("text").should("be.empty");
  });
});
