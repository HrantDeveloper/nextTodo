import ImportantPage from "./../../src/app/important/page";
// describe("spec.cy.js", () => {
//   it("should visit google", () => {
//     cy.visit("http://localhost:3000");
//     expect(true).to.equal(true);
//   });
// });

describe("ImportantPage Component Test", () => {
  it("should render the ImportantPage component", () => {
    cy.visit("http://localhost:3000/important");

    // Assert that the main container has the expected class
    cy.get("main").should("have.class", "your-main-class");

    // Assert that the Layout component is rendered
    cy.get("Layout").should("exist");

    // Assert that the Planned component is rendered within the Layout
    cy.get("Layout Important").should("exist");
  });
});
