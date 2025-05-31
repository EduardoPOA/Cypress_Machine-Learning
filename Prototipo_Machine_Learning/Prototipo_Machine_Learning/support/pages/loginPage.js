export class LoginPage {
    
    
        logIntoIntercab() { 
          cy.visit('https://intercab-qa.alianca.com.br/#/login')
          cy.url().should('include', 'https://intercab-qa.alianca.com.br')
          cy.wait(3000);
          // cy.get('.btn').should('be.visible').click();
          // cy.wait(1000);
          // cy.visit('https://login.microsoftonline.com/05d75c05-fa1a-42e7-9cf1-eb416c396f2d/oauth2/v2.0/authorize?response_type=id_token&scope=openid%20profile&client_id=cdb5dd96-499a-4ab6-a709-7f47e99224c5&redirect_uri=https%3A%2F%2Fintercab-qa.alianca.com.br%2F&state=eyJpZCI6IjQ1MzQwZTc2LWU1MGQtNGU3MS04Yzc3LTBiYzJhYzI0NTYzZSIsInRzIjoxNjg1NzE0NjgzLCJtZXRob2QiOiJwb3B1cEludGVyYWN0aW9uIn0%3D&nonce=0bdc1d5b-5611-4402-b0ba-d428a764e29d&client_info=1&x-client-SKU=MSAL.JS&x-client-Ver=1.4.18&client-request-id=b1fe7a10-ef5a-44a7-8e9b-f0342e125081&response_mode=fragment&sso_reload=true')   
          // cy.microsoftSingleSingOn();
          // cy.get('.btn').click();
          // cy.wait(10000);
    }
  }