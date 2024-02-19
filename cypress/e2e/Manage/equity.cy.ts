describe("OrangeHRM web App Automation", () => {
  it("Should navigate to the OrangeHRM web App", () => {
    // Visit the web app URL
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // Assert that the URL contains the login page URL
    cy.url().should("include", "/auth/login");
  });

  it("Should enter username and password", () => {
    // Visit the login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // Enter username and password
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");

    // Assert that the input fields contain the entered username and password
    cy.get("input[placeholder='Username']").should("have.value", "Admin");
    cy.get("input[placeholder='Password']").should("have.value", "admin123");
  });

  it("Should locate the MyInfo page after logging in", () => {
    // Visit the login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Enter username and password
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");

    // Click on login button
    cy.get("button[type='submit']").click();

    // Wait for the MyInfo link to be visible and click it
    cy.wait(1000);
    cy.contains("My Info").click();

    // Assert that the My details page has Employee Full Name label
    cy.get(".oxd-label.oxd-input-field-required").should("be.visible");
  });
  it("Should change the Employee ID and SSN and click save", () => {
    // Visit the login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Enter username and password
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");

    // Click on login button
    cy.get("button[type='submit']").click();

    // Wait for the MyInfo link to be visible and click it
    cy.wait(1000);
    cy.contains("My Info").click();

    // Clear and type new Employee ID and SSN
    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)"
    )
      .clear()
      .type("987654");

    // Clear and type new SSN
    //cy.get("#personal_txtNICNo").clear().type("newSSN");

    // Click on the Save button to save changes
    cy.get(
      "div[class='orangehrm-custom-fields'] button[type='submit']"
    ).click();

    // Assert that the success message is displayed after saving
    cy.contains("Successfully Saved").should("be.visible");
  });

  it("Should navigate to the homepage and log out", () => {
    // Visit the login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Enter username and password
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");

    // Click on login button
    cy.get("button[type='submit']").click();

    // Navigate to my Personal Details Page
    cy.contains("My Info").click();

    // Navigate to my homepage
    cy.get(
      "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1) > span:nth-child(2)"
    ).click();

    // Assert that the can see the dashboard label
    cy.contains("Time at Work").should("be.visible");

    // Assert that the URL contains '/dashboard' indicating the homepage is loaded
    cy.url().should("include", "/dashboard");

    // Click on the logout button
    cy.get(".oxd-userdropdown-name").click();
    cy.wait(1000);
    cy.contains("Logout").click();
  });
});
