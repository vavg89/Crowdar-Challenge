const {Given, When, Then, And} = require('cypress-cucumber-preprocessor/steps');
import IniciarSecion from "../../../pages/inicio_secion_sauce_demo_PAGE";


Given ("Visitar SauceDemo.com",()=> {
    IniciarSecion.GivenInicioSecion();
});

// Scenario: Inicio de sesión exitoso
  When("el usuario ingresa con una cuenta habilitada", () => {
    IniciarSecion.inputUsername();
  });
  
  When("el usuario ingresa una contraseña correcta", () => {
    IniciarSecion.inputPassword();
  });
  
  When("el usuario hace clic en el botón Login", () => {
    IniciarSecion.clickLogin();
  });
  
  Then("el usuario debería ser redirigido a la página principal", () => {
    IniciarSecion.verifyRedirect();
  });

  // Verificar inicio de sesión con usuario bloqueado
  When("el usuario ingresa con una cuenta bloqueada en el campo de usuario", () => {
    IniciarSecion.inputUsernameBlock();
  });
  
  When("el usuario ingresa una contraseña correcta", () => {
    IniciarSecion.inputPassword();
  });
  
  When("el usuario hace clic en el botón: Login", () => {
    IniciarSecion.clickLogin();
  });
  
  Then("debería aparecer un mensaje de error: Epic sadface: Sorry, this user has been locked out.", () => {
    IniciarSecion.verifyRedirectBlock();
  });

  // Verificar inicio de sesión con contraseña incorrecta
  When("el usuario ingresa con una cuenta habilitada", () => {
    IniciarSecion.inputUsername();
  });
  
  When("el usuario ingresa una contraseña incorrecta", () => {
    IniciarSecion.inputPasswordIncorrect();
  });
  
  When("el usuario hace clic en el botón Login", () => {
    IniciarSecion.clickLogin();
  });
  
  Then("debería aparecer un mensaje de error: Epic sadface: Username and password do not match any user in this service", () => {
    IniciarSecion.verifyPasswordIncorrect();
  });

    // Verificar inicio de sesión con usuario no registrado
  When("el usuario ingresa con una cuenta no registrada", () => {
    IniciarSecion.inputUsernameFalse();
  });
  
  When("el usuario ingresa una contraseña correcta", () => {
    IniciarSecion.inputPassword();
  });
  
  When("el usuario hace clic en el botón Login", () => {
    IniciarSecion.clickLogin();
  });
  
  Then("debería aparecer un mensaje de error al ingresar usurios incorrectos : Epic sadface: Username and password do not match any user in this service", () => {
    IniciarSecion.verifyUsernameFalse();
  });
