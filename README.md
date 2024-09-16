# Proyecto de Pruebas Automatizadas
# Autor: Victor Vanderviest

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

## Ejecución de Casos de Prueba

Para ejecutar los casos de prueba, utiliza los siguientes comandos:

- **`npm run test-CartAdd`**: Automatiza los casos de prueba exitosos relacionados con el "Agregado de productos al carrito de compras".
- **`npm run test-Login`**: Ejecuta un caso de prueba que falla intencionalmente, específicamente para el "Inicio de sesión".
- **`npm run test-Apiml`**: Interactúa con un servicio web de Mercado Libre y verifica que contenga departamentos.

## **modulo de cypress : npx cypress open**

## Instalación de Node.js y npm

Si no tienes **Node.js** instalado, sigue estos pasos para instalarlo::

1. **Descargar Node.js**

   - Ve a la página oficial de [Node.js](https://nodejs.org/) y descarga la versión recomendada para tu sistema operativo.
   - El instalador incluirá **npm** (Node Package Manager) automáticamente.

2. **Instalar Node.js**

   - Sigue las instrucciones del instalador para completar la instalación.

3. **Verificar la instalación**

   - Abre una terminal y verifica que **Node.js** y **npm** se hayan instalado correctamente ejecutando los siguientes comandos:

   ```bash
   node -v
   npm -v
