class IniciarSecion {
    // Constructor
    constructor() {
      this.url = "https://www.saucedemo.com/";
      this.usernameTrue = "standard_user";
      this.usernameFalse = "Incorrecto";
      this.passwordTrue = "secret_sauce";
      this.passwordIncorrect = "incorrect";
      this.usernameLocked = "locked_out_user";
    }
  
    // Given: Iniciar sesión
    GivenInicioSecion() {
      cy.visit(this.url);
    }
  
    // Inicio de sesión exitoso
    inputUsername() {
      cy.usuario(this.usernameTrue);
    }
  
    inputPassword() {
      cy.contraseña(this.passwordTrue);
    }
  
    clickLogin() {
      cy.login();
    }
  
    verifyRedirect() {
      cy.url().should('include', '/inventory.html');
      cy.viewport(1280, 720); // Tamaño típico de PC
      cy.screenshot("Se espera que el usuario inicie secion correctamente he ingrese a la pagina de inicio (viewport pc)");
      cy.viewport(430, 932); // Tamaño típico de smartphone
      cy.screenshot("Se espera que el usuario inicie secion correctamente he ingrese a la pagina de inicio (viewport smartphone)");      
    }

    // Scenario: Verificar inicio de sesión con usuario bloqueado
    inputUsernameBlock() {
      cy.usuario(this.usernameLocked);
    };
    verifyRedirectBlock() {
      cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.');      
      cy.viewport(1280, 720); // Tamaño típico de PC
      cy.screenshot("Se espera que se muestre el mensaje: Epic sadface: Sorry, this user has been locked out. (viewport pc)");
    };

    // Verificar inicio de sesión con contraseña incorrecta
    inputPasswordIncorrect() {
      cy.contraseña(this.passwordIncorrect);
    }
    verifyPasswordIncorrect() {
      cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');      
      cy.viewport(1280, 720); // Tamaño típico de PC
      cy.screenshot("Se espera que se muestre el mensaje: Epic sadface: Username and password do not match any user in this service (viewport pc)");
    };

    // Verificar inicio de sesión con usuario no registrado
    inputUsernameFalse() {
      cy.usuario(this.usernameFalse);
    }
    verifyUsernameFalse() {
      cy.get('[data-test="error"]').should('contain.text', 'Prueba fallida intencionalmente');      
      cy.viewport(1280, 720); // Tamaño típico de PC
      cy.screenshot("Se espera que se muestre el mensaje: Prueba fallida intencionalmente (viewport pc)");
    };
}
  
  export default new IniciarSecion();
  