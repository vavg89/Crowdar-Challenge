const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const { exec } = require('child_process');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const os = require('os');
const mysql = require('mysql2');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    showPasses: true,
    showSkipped: true,
  },
  e2e: {
    specPattern: '**/*.feature',
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      mochawesome(on);

      // Registro del task para consultar la base de datos
      on('task', {
        consultarBaseDeDatos(query) {
          return new Promise((resolve, reject) => {
            const connection = mysql.createConnection({
              host: 'localhost',
              user: 'root',
              password: 'crowdar2024', // Modifica según tu contraseña
              database: 'world',
            });

            connection.query(query, (err, results) => {
              connection.end(); // Cerrar conexión después de obtener resultados
              if (err) {
                return reject('Error en la consulta: ' + err.stack);
              }
              resolve(results);
            });
          });
        }
      });

      on('before:run', async (details) => {
        console.log('Override before:run hook');
        await beforeRunHook(details);
      });
      
      on('after:run', async () => {
        console.log('Override after:run hook');
        await afterRunHook();

        const reportPath = 'cypress/reports/index.html';
        const command = os.platform() === 'win32'
          ? `start ${reportPath}`
          : os.platform() === 'darwin'
          ? `open ${reportPath}`
          : `xdg-open ${reportPath}`;

        exec(command, (err) => {
          if (err) {
            console.error('Error al abrir el reporte:', err);
          }
        });
      });
    },
    
    env: {
      "USERNAME": "standard_user",
      "PASSWORD": "secret_sauce"
    }
  },
});
