Feature: Verificar departamentos en la API de Mercado Libre
Background: 
Given realizo una petición GET a la API de departamentos de Mercado Libre
  Scenario: Verificar que la API contiene el departamento de Tecnología

    When obtengo la respuesta de la API en un archivo tipo Json
    Then debe contener al menos un departamento
    And los departamentos deben contener al menos una categoria 
