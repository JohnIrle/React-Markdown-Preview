describe("CRA", () => {
  it("shows stuff", function () {
    cy.visit("http://localhost:3001");
    cy.get(".container").should("be.visible").and("have.text", "Try me");
  });
});
