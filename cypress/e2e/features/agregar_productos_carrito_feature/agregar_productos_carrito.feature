Feature: Gestión del carrito de compras en Sauce Demo
Background: 
Given Agregar productos SauceDemo.com
  Scenario: Validar Agregar producto al carrito vacio desde la vista principal
   
    When hago clic en Add to cart para el producto Sauce Labs Backpack
    Then el botón cambia a Remove
    And el icono del carrito agrega un contador de 1

  Scenario: Validar producto agregado desde la vista principal en el carrito

    When hago clic en Add to cart para el producto Sauce Labs Backpack
    And hago clic en el icono del carrito
    Then se muestra la vista detallada del carrito con el producto Sauce Labs Backpack por $29.99
