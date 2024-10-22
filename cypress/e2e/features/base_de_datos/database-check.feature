Feature: Validación de usuario en base de datos

  @database @user-validation
  Scenario: Verificar si la ciudad "caracas" está en la base de datos
    Given que la base de datos está disponible
    When consulto la tabla de "cities" por el nombre "Bardzrashen"
    Then la ciudad debería estar presente en la base de datos
