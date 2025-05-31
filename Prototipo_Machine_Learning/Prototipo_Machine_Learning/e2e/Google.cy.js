describe('Funcionalidade do spec do Google', () => {
    
    it('Validar elementos da página', () => {
        
        cy.OpenPage("www.google.com");
        cy.ValidateElementPass("Google.TextBox");
        cy.ValidateElementValueTextEquals("Google.BtnPesquisa","Pesquisa Google");
        cy.ValidateElementValueTextEquals("Google.BtnSorte","Estou com sorte");
    });
});