const {Given, When, Then, And} = require('cypress-cucumber-preprocessor/steps');
import AgregarCarrito from "../../../pages/agregar_productos_carrito_PAGE";


Given ("Agregar productos SauceDemo.com",()=> {
    AgregarCarrito.GivenPaginaPrincipal()
});

// Validar Agregar producto al carrito vacio desde la vista principal
  When("hago clic en Add to cart para el producto Sauce Labs Backpack", () => {
    AgregarCarrito.ClicAddToCart();
  });
  
  Then("el botón cambia a Remove", () => {
    AgregarCarrito.ValidateB();
  });
  
  And("el icono del carrito agrega un contador de 1", () => {
    AgregarCarrito.ValidateIcono();
  });

  // Validar producto agregado desde la vista principal en el carrito
  When("hago clic en Add to cart para el producto Sauce Labs Backpack", () => {
    AgregarCarrito.ClicAddToCart();
  });
  
  And("hago clic en el icono del carrito", () => {
    AgregarCarrito.ClicIconoCart();
  });
  
  Then("se muestra la vista detallada del carrito con el producto Sauce Labs Backpack por $29.99", () => {
    AgregarCarrito.ValidateProductCart();
  });

