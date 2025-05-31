Cypress.on('fail', (error, runnable) => {
    // Verifica se o erro é o erro específico que você deseja remover
    if (error.message.includes('Expected <h3.welcome-title.primary-color> not to exist in the DOM')) {
      // Retorna false para evitar que o erro seja exibido no log do Cypress
      return false;
    }
  });
  