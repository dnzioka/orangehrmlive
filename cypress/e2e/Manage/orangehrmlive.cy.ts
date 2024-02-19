describe("Login and Logout Test", () => {
  //comment
  it("should login and verify Dashboard", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".oxd-button").click();
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text"
    ).and("have.text", "Time at Work");
  });
});
