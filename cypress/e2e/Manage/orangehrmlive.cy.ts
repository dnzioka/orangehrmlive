describe("Login and Logout Test", () => {
  it("should login and verify Dashboard", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get("#btnLogin").click();
    cy.wait(3000);
    cy.get(".oxd-topbar-header-breadcrumb-module h6")
      .should("exist")
      .and("have.text", "Dashboard");
  });
});
