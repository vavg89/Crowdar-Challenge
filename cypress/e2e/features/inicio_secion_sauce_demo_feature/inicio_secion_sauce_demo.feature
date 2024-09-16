Feature: Validar inicio de sesión en SauceDemo
Background: 
Given Visitar SauceDemo.com
  Scenario: Inicio de sesión exitoso
   
    When el usuario ingresa con una cuenta habilitada
    And el usuario ingresa una contraseña correcta
    And el usuario hace clic en el botón Login
    Then el usuario debería ser redirigido a la página principal

  Scenario: Verificar inicio de sesión con usuario bloqueado
    
    When el usuario ingresa con una cuenta bloqueada en el campo de usuario
    And el usuario ingresa una contraseña correcta
    And el usuario hace clic en el botón Login
    Then debería aparecer un mensaje de error: Epic sadface: Sorry, this user has been locked out.

  Scenario: Verificar inicio de sesión con contraseña incorrecta
   
    When el usuario ingresa con una cuenta habilitada
    And el usuario ingresa una contraseña incorrecta
    And el usuario hace clic en el botón Login
    Then debería aparecer un mensaje de error: Epic sadface: Username and password do not match any user in this service

  Scenario: Verificar inicio de sesión con usuario no registrado
   
    When el usuario ingresa con una cuenta no registrada
    And el usuario ingresa una contraseña correcta
    And el usuario hace clic en el botón Login
    Then debería aparecer un mensaje de error al ingresar usurios incorrectos : Epic sadface: Username and password do not match any user in this service