describe('spec.cy.js', () => {
  it('should visit google', () => {
    cy.visit('http://localhost:3000');
    expect(true).to.equal(true);
  });
});
