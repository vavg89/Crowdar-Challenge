class AgregarCarrito {
    constructor() {
      this.url = "https://www.saucedemo.com/";
      this.password = "incorrect";
      this.username = "locked_out_user";
    }
  
    // Given: Iniciar sesión
    GivenPaginaPrincipal () {
      cy.visit(this.url);
      cy.usuario(Cypress.env("USERNAME"));
      cy.contraseña(Cypress.env("PASSWORD"));
      cy.login();
    };
  
    // Inicio de sesión exitoso
    ClicAddToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    };
  
    ValidateB() {
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text', 'Remove');
        cy.viewport(1280, 720);
        cy.screenshot("Se espera que el boton: Add To Cart, cambie y pase a llamarse: Remove luego de agregar al carrito (viewport pc)");
        
    };
  
    ValidateIcono() {
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
        cy.viewport(1280, 720);
        cy.screenshot("Se espera que el icono del carrito agrege un contador en 1 luego de agregar un producto (viewport pc)");    
    };
    
    ClicIconoCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    };
    ValidateProductCart() {
        cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
        cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99');
        cy.viewport(1280, 720);
        cy.screenshot("Se espera que se muestra la vista detallada del carrito con el producto Sauce Labs Backpack por $29.99 (viewport pc)");
        cy.viewport(430, 932);
        cy.screenshot("Se espera que se muestra la vista detallada del carrito con el producto Sauce Labs Backpack por $29.99  (viewport smartphone)");   
    };
  
    
};
  
  export default new AgregarCarrito();
  