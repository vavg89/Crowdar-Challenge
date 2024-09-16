const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const { exec } = require('child_process');
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const os = require('os');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
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
