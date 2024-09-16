class ApiMLResponse {
    constructor() {
      this.getDepartaments = 'https://www.mercadolibre.com.ar/menu/departments';
      this.response = null;
    }
  
    getDepartmentsFromAPI() {
      cy.request('GET', this.getDepartaments)
        .then((response) => {
          this.response = response;
          expect(response.status).to.eq(200);
        });
    }
  
    verifyAtLeastOneDepartment() {
      cy.wrap(this.response.body.departments).should('have.length.greaterThan', 0);
      cy.log('La respuesta contiene al menos un departamento');
    }
  
    verifyDepartmentsContainAtLeastOneCategory() {
      let categoriesList = [];
  
      cy.wrap(this.response.body.departments).each((department) => {
        expect(department.categories).to.have.length.greaterThan(0);
        const categoryNames = department.categories.map(cat => cat.name);
        categoriesList.push(...categoryNames);
      }).then(() => {
        cy.log('Categorías encontradas: ' + categoriesList.join(', '));
        cy.screenshot('Se evidencia que se encontro al menos un departamento con sus categorias',{ capture: 'runner' });
      });
    }
  }
  
  export default new ApiMLResponse();
  