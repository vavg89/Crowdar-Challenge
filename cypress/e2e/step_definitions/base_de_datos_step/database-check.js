const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

Given("que la base de datos está disponible", () => {
  cy.log("Base de datos disponible");
});

When('consulto la tabla de {string} por el nombre {string}', function(tableName, name) {
  const query = `SELECT * FROM ${tableName} WHERE name = '${name}'`;

  cy.task('consultarBaseDeDatos', query).then((results) => {
    this.dbResults = results;
    this.cityName = name;
    cy.log("Resultados de la consulta: " + JSON.stringify(results, null, 2));
  });
});

Then('la ciudad debería estar presente en la base de datos', function() {
  const cities = this.dbResults;
  const cityName = this.cityName;

  const cityFound = cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
  cy.log("Resultados de la base de datos:" + JSON.stringify(cities, null, 2));
  cy.log(`¿La ciudad ${cityName} fue encontrada?: ${cityFound}`);

  expect(cityFound).to.be.true;
  if (cityFound) {
    cy.screenshot("la-ciudad-fue-registrada-con-exito", { capture: 'runner' });
  }
});
