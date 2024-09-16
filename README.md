# Proyecto de Pruebas Automatizadas

Este proyecto contiene una suite de pruebas automatizadas utilizando node.js, Cypress, Cucumber y Mochawesome, en su logica, guarda las evidencias de las pruebas en la carpeta reports, en index.html . En la carpeta screemshop se guardan las capturas de pantalla por features, adicionalmente si la prueba es exitosa se abre automaticamente el reporte visual de mochawesome en caso contrario tienes que abrir directamente el reporte en la carpeta report.
Si quieres ejecutar en diferentes navegadores , desde el comando npx cypress open puedes configurar a tu preferencia 

## Tecnologías Utilizadas

- **Cypress**: Framework de pruebas end-to-end que permite automatizar pruebas de interfaz de usuario en aplicaciones web.
- **Cucumber**: Framework que permite escribir pruebas en un lenguaje natural (Gherkin), facilitando la comunicación entre desarrolladores y stakeholders.
- **Mochawesome**: Reportero para Mocha que genera reportes visuales y atractivos para las pruebas.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu entorno local:

1. **Clonar el Repositorio**
2. **ejecutar: npm install**
3. **ejecucion de casos:**
    **npm npm run test-CartAdd**
    **npm npm run test-Login**
    **npm npm run test-Apiml**
4. **modulo de cypress : npx cypress open**
