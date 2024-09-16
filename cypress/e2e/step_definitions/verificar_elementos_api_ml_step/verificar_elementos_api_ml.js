const {Given, When, Then, And} = require('cypress-cucumber-preprocessor/steps');
import ApiMLResponse from '../../../pages/verificar_elementos_api_ml_PAGE';

Given('realizo una petición GET a la API de departamentos de Mercado Libre', () => {
  ApiMLResponse.getDepartmentsFromAPI();
});

When('obtengo la respuesta de la API en un archivo tipo Json', () => {
});

Then('debe contener al menos un departamento', () => {
  ApiMLResponse.verifyAtLeastOneDepartment();
});

Then('los departamentos deben contener al menos una categoria', () => {
  ApiMLResponse.verifyDepartmentsContainAtLeastOneCategory();
});