const xml2js = require('xml2js');
const builder = new xml2js.Builder();
const parseString = require('xml2js').parseString;
const xpathToCss = require('xpath-to-css');
const filePath = 'support/pages/pageObjects.xml';

Cypress.Commands.add('microsoftSingleSingOn', () => {
  cy.origin('https://login.microsoftonline.com/', () => {
    cy.wait(2000)
    cy.get('input[type="email"]').type(Cypress.env('TEST_USER'), { log: false })
    cy.get('input[type="submit"][value="Next"]').click()
    cy.wait(2000)
    cy.get('input[type="password"]').type(Cypress.env('TEST_PASS'), { log: false })
    cy.get('input[type="submit"][value="Sign in"]').click()
    cy.wait(15000)
    cy.get('input[type="submit"][value="Yes"],input[type="submit"][value="Sim"]').click()
  });
});



//Deve montar o padrão como estão abaixo em Cypress.Commands.add,
//em seguida crie um arquivo commands.d.ts
//insira todos os nomes e parametros de cada comando neste arquivo citado acima
//então o IntelliSense conseguirá invocar os comandos customizados


before(() => {
  cy._OrderByXmlData('support/pages/pageObjects.xml');
});

Cypress.Commands.add('ClearCypressDownloadsFolder', () => {
  cy.exec('del /q downloads\\*'); // Use del command to delete files in Windows
});

Cypress.Commands.add('OpenPage', (url) => {
  cy.visit(url, {
    failOnStatusCode: false, // Evitar falha no teste devido a status code de erro
  }).then((response) => {
    if (response.status !== 200) {
      cy.reload(); // Recarrega a página se a visita falhar
    }
  });
});

Cypress.Commands.add('PageRefresh', () => {
  cy.reload();
});

Cypress.Commands.add('PageBack', () => {
  cy.go('back');
});

Cypress.Commands.add('PageForward', () => {
  cy.go('forward');
});

Cypress.Commands.add('GetPagePositionTab', (positionNumber) => {
  cy.window().then((win) => {
    if (positionNumber >= 0 && positionNumber < win.length) {
      const tab = win[positionNumber];
      cy.wrap(tab).invoke('focus');
    }
  });
});

Cypress.Commands.add('GetPageCurrentTab', () => {
  cy.window().then((win) => {
    const currentTab = win[win.length - 1];
    cy.wrap(currentTab).invoke('focus');
  });
});

Cypress.Commands.add('CloseLastPageTab', () => {
  cy.window().then((win) => {
    const currentWindow = win;
    cy.window().should('have.length.gt', 1).then((windows) => {
      const lastOpenedWindow = windows[windows.length - 1];
      if (lastOpenedWindow !== currentWindow) {
        cy.wrap(lastOpenedWindow).invoke('close');
        cy.wrap(currentWindow).focus();
      }
    });
  });
});

Cypress.Commands.add('ClickOut', () => {
  cy.get('body').click(200, 200);
});

Cypress.Commands.add('ClickOnTheElement', (element) => {
  cy.ValidateElementPass(element).should('be.visible').first().click({ force: true });
});

Cypress.Commands.add('ClickAndMouseMoveTheElement', (parenteWord, childrenWord) => {
  cy.contains(parenteWord).trigger('mousemove', { force: true });
  cy.wait(100);
  cy.contains(childrenWord).click({ force: true });
});

Cypress.Commands.add('ClickOnTheSubMenu', (element, optionText) => {
  cy.ValidateElementPass(element).click(); 
  cy.contains(optionText).click(); 
});

Cypress.Commands.add("ContainsAndClick", (text) => {
  cy.contains(text).invoke('attr', 'style', 'outline: 4px solid #00FF00;').click({ force: true });
});

Cypress.Commands.add("ContainsAndClickWithoutForceTrue", (text) => {
  cy.contains(text).invoke('attr', 'style', 'outline: 4px solid #00FF00;').click();
});

Cypress.Commands.add('DoubleClickOnTheElement', (element) => {
  cy.ValidateElementPass(element).dblclick({ force: true });
});

Cypress.Commands.add('SendKeyToElement', (element, word) => {
  cy.ValidateElementPass(element).should('be.visible')
    .clear({ force: true })
    .type(word, { force: true })
    .should('have.value', word);
});

Cypress.Commands.add('SendKeyToElementKeyEnter', (element, word) => {
  cy.ValidateElementPass(element).should('be.visible').type(`${word}{enter}`);
});

Cypress.Commands.add('SendKeyToElementKeyEsc', (element, word) => {
  cy.ValidateElementPass(element).should('be.visible').type(`${word}{esc}`);
});

Cypress.Commands.add('SendKeyToElementKeyTab', (element, word) => {
  cy.ValidateElementPass(element).should('be.visible')
  .clear({ force: true })
  .type(`${word}{tab}`, { force: true })
  .should('have.value', word);
});

Cypress.Commands.add('ScrollToTheTop', () => {
  cy.scrollTo('top');
});

Cypress.Commands.add('ScrollToBottom', () => {
  cy.scrollTo('bottom');
});

Cypress.Commands.add('ScrollToLeft', () => {
  cy.scrollTo('left');
});

Cypress.Commands.add('ScrollToRight', () => {
  cy.scrollTo('right');
});

Cypress.Commands.add('ScrollElementToLeft', (element) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).scrollTo('left');
  });
});

Cypress.Commands.add('ScrollElementToRight', (element) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).scrollTo('right');
  });
});

Cypress.Commands.add('ScrollToElementView', (element) => {
  cy.ValidateElementPass(element).scrollIntoView();
});

Cypress.Commands.add('SelectTextOnTheForm', (text) => {
  cy.ValidateElementPassUsingSelector('.options,.option-button-content,.mat-option-text,.option-button-content > .options,.option-button > .options').contains(text, { timeout: 3000 }).click({ force: true });
});

Cypress.Commands.add('SelectPositionOnTheForm', (position) => {
  cy.ValidateElementPassUsingSelector('.options,.option-button-content,.mat-option-text,.option-button-content > .options,.option-button > .options').eq(position, { timeout: 3000 }).click({ force: true });
});

Cypress.Commands.add('SelectComboBoxByText', (element, optionText) => {
  cy.ValidateElementPass(element).click(); 
  cy.contains(optionText).click(); 
});

Cypress.Commands.add('SelectComboBoxByIndex', (element, indexNumber) => {
  cy.ValidateElementPass(element).select(indexNumber.toString()); // Selecione pela posição do índice
});

Cypress.Commands.add('SelectComboBoxByValue', (element, value) => {
  cy.ValidateElementPass(element).select(value); // Selecione pela propriedade "value"
});

Cypress.Commands.add('FindThOnTheTable', (element, text) => {
  cy.ValidateElementPass(element).find('th').contains(text).click();
});

Cypress.Commands.add('FindTrOnTheTable', (element, text) => {
  cy.ValidateElementPass(element).find('tr').contains(text).click();
});

Cypress.Commands.add('FindThAndCountColumnsOnTheTable', (element, numbers) => {
  cy.ValidateElementPass(element).find('th').should('have.length', numbers)
});

Cypress.Commands.add('FindTrAndCountRowsOnTheTable', (element, numbers) => {
  cy.ValidateElementPass(element).find('tr').should('have.length', numbers)
});

// Espera até que o elemento fique visível
Cypress.Commands.add('WaitElement', (element, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should("exist");
  });
});

Cypress.Commands.add('WaitElementAndClick', (element, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should('exist').click();
  });
});

Cypress.Commands.add('WaitElementInvisibility', (element, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should('not.exist');
  });
});

Cypress.Commands.add('WaitElementInvisibilityWithText', (element, text, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should('not.contain', text);
  });
});

Cypress.Commands.add('WaitElementTextToBePresent', (element, text, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should('include.text', text);
  });
});

Cypress.Commands.add('WaitElementTextToBePresentInValue', (element, text, timeout) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value, { timeout }).should('have.value', text);
  });
});

Cypress.Commands.add('ValidateElementPass', (element) => {
  cy._GetLocator(filePath, element).then((value) => {
    // Obtém o elemento usando o seletor
    cy.get(value).then(($element) => {
      // Verifica se o elemento existe
      expect($element.length > 0).to.be.true;
      // Destaca o elemento alterando seu estilo para cor verde
      cy.wrap($element).invoke('attr', 'style', 'outline: 4px solid #00FF00;');
    });
  });
});

Cypress.Commands.add('ValidateElementPassUsingSelector', (element) => {
  cy.get(element).then((value) => {
    // Obtém o elemento usando o seletor
    cy.get(value).then(($element) => {
      // Verifica se o elemento existe
      expect($element.length > 0).to.be.true;
      // Destaca o elemento alterando seu estilo para cor verde
      cy.wrap($element).invoke('attr', 'style', 'outline: 4px solid #00FF00;');
    });
  });
});

//exemplo para executar cy.ValidateElementPassList(['element1', 'element2', 'element3']);
Cypress.Commands.add('ValidateElementPassList', (elements) => {
  cy.wrap(elements).each((element) => {
    cy._GetLocator(filePath, element).then((value) => {
      // Obtém o elemento usando o seletor
      cy.get(value).should('be.visible').then(($element) => {
        // Destaca o elemento alterando seu estilo para cor verde
        cy.wrap($element).invoke('attr', 'style', 'outline: 4px solid #00FF00;');
      });
    });
  });
});


Cypress.Commands.add('ValidateElementFail', (element) => {
  cy._GetLocator(filePath, element).then((value) => {
    // Obtém o elemento usando o seletor
    cy.get(value).then(($element) => {
      // Verifica se o elemento existe
      expect($element.length > 0).to.be.true;
      // Destaca o elemento que não existe alterando seu estilo com cor vermelha
      cy.wrap($element).invoke('attr', 'style', 'outline: 4px solid #FF0000;');
    });
  });
});

Cypress.Commands.add('ValidateElementFailUsingSelector', (element) => {
  cy.get(element).then((value) => {
    // Obtém o elemento usando o seletor
    cy.get(value).then(($element) => {
      // Verifica se o elemento existe
      expect($element.length > 0).to.be.true;
      // Destaca o elemento que não existe alterando seu estilo com cor vermelha
      cy.wrap($element).invoke('attr', 'style', 'outline: 4px solid #FF0000;');
    });
  });
});

Cypress.Commands.add('ValidateElementInnerTextEquals', (element, expectedResult) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).invoke('text').then((text) => {
      if (text === expectedResult) {
        cy.ValidateElementPass(element);
        // O 'return' foi removido para garantir que a asserção final sempre seja executada
      } else {
        cy.ValidateElementFail(element);
      }
      cy.wrap(text).should('equal', expectedResult, `Comparando --> '${text}' com resultado esperado --> '${expectedResult}'`);
    });
  });
});

Cypress.Commands.add('ValidateElementInnerTextContains', (element, expectedResult) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).invoke('text')
      .then((text) => {
        if (text.includes(expectedResult)) {
          cy.ValidateElementPass(element);
        } else {
          cy.ValidateElementFail(element);
        }
        cy.wrap(text).should('include', expectedResult, `Comparando --> '${text}' com resultado esperado --> '${expectedResult}'`);
      });
  });
});

Cypress.Commands.add('ValidateElementValueTextEquals', (element, expectedResult) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).invoke('val')
      .then((text) => {
        if (text === expectedResult) {
          cy.ValidateElementPass(element);
        } else {
          cy.ValidateElementFail(element);
        }
        cy.wrap(text).should('equal', expectedResult, `Comparando --> '${text}' com resultado esperado --> '${expectedResult}'`);
      });
  });
});

Cypress.Commands.add('ValidateElementValueTextContains', (element, expectedResult) => {
  cy._GetLocator(filePath, element).then((value) => {
    cy.get(value).invoke('val')
      .then((text) => {
        if (text.includes(expectedResult)) {
          cy.ValidateElementPass(element);
        } else {
          cy.ValidateElementFail(element);
        }
        cy.wrap(text).should('include', expectedResult, `Comparando --> '${text}' com resultado esperado --> '${expectedResult}'`);
      });
  });
});

Cypress.Commands.add('GetInnerText', (element) => {
  return cy._GetLocator(filePath, element).then((value) => {
    return cy.get(value).invoke('val');
  });
});

Cypress.Commands.add('_GetLocator', (filePath, key) => {
  cy.readFile(filePath).then((xmlContent) => {
    const parser = new xml2js.Parser();
    parser.parseString(xmlContent, (err, result) => {
      if (err) {
        throw new Error(`Erro ao analisar o XML: ${err.message}`);
      }

      const element = result.locators.element.find((e) => e.$.key.includes(key));

      if (element) {
        // Tenta usar o valor existente primeiro
        if (element.$.value && element.$.value.trim() !== '') {
          cy.get('body').then(($body) => { // cy.get('body') é uma forma de iniciar um comando
            if ($body.find(element.$.value).length > 0) { // Verifica se o elemento existe no DOM sem falhar o teste
              cy.get(element.$.value, { timeout: 10000 })
                .should('be.visible')
                .then(($el) => {
                  cy._UpdateLocatorValues(element.$.key, $el, filePath);
                });
            } else {
              // 'value' existe mas não foi encontrado no DOM. Tenta fallback.
              if (element.$.baseValue && element.$.baseValue.trim() !== '') {
                cy._ProcessBaseValueToCssAndSetLocator(element.$.key, filePath);
              } else {
                let initialSelector = `#${key}`;
                if (key.startsWith('#')) {
                  initialSelector = key;
                }
                cy.get(initialSelector, { timeout: 10000 })
                  .should('be.visible')
                  .then(($el) => {
                    cy._UpdateLocatorValues(element.$.key, $el, filePath);
                  });
              }
            }
          });
        }
        // 'value' está vazio, mas 'baseValue' existe. Tenta usar 'baseValue' para gerar o 'value' CSS.
        else if (element.$.baseValue && element.$.baseValue.trim() !== '') {
          cy._ProcessBaseValueToCssAndSetLocator(element.$.key, filePath);
        }
        // 'value' e 'baseValue' estão vazios (primeira descoberta).
        else {
          let initialSelector = `#${key}`;
          if (key.startsWith('#')) {
            initialSelector = key;
          }
          cy.get(initialSelector, { timeout: 10000 })
            .should('be.visible')
            .then(($el) => {
              cy._UpdateLocatorValues(element.$.key, $el, filePath);
            });
        }
      } else {
        throw new Error(`Elemento com a chave '${key}' não encontrado no XML.`);
      }
    });
  });
});


Cypress.Commands.add('_UpdateLocatorValues', (keyToSearch, $element, filePath) => {
    function convertElementToAbsoluteXpath(element) {
        if (!element || !element.parentNode) {
            return null;
        }
        if (element === document.body) {
            return 'html/body';
        }
        let ix = 0;
        const siblings = element.parentNode.childNodes;
        for (let i = 0; i < siblings.length; i++) {
            const sibling = siblings[i];
            if (sibling === element) {
                const parentXPath = convertElementToAbsoluteXpath(element.parentNode);
                return parentXPath ? `${parentXPath}/${element.tagName.toLowerCase()}[${ix + 1}]` : `${element.tagName.toLowerCase()}[${ix + 1}]`;
            }
            if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                ix++;
            }
        }
    }

    const absoluteXPath = convertElementToAbsoluteXpath($element[0]);
    const cssSelector = customXpathToCss(absoluteXPath);

    cy.readFile(filePath).then((xmlContent) => {
        xml2js.parseString(xmlContent, { explicitArray: false }, (err, result) => {
            if (err) throw err;

            if (result.locators && result.locators.element) {
                const elements = Array.isArray(result.locators.element) ? result.locators.element : [result.locators.element];
                const xmlElement = elements.find(el => el.$.key === keyToSearch);

                if (xmlElement) {
                    let updated = false;
                    if (xmlElement.$.baseValue !== absoluteXPath) {
                        xmlElement.$.baseValue = absoluteXPath;
                        updated = true;
                    }
                    if (xmlElement.$.value !== cssSelector) {
                        xmlElement.$.value = cssSelector;
                        updated = true;
                    }

                    if (updated) {
                        const builder = new xml2js.Builder();
                        const updatedXML = builder.buildObject(result);
                        cy.writeFile(filePath, updatedXML).then(() => {
                            cy.wrap(xmlElement.$.value).as('xmlValue');
                            cy.get(xmlElement.$.value, { timeout: 10000 }).should('be.visible');
                        });
                    } else {
                        cy.wrap(xmlElement.$.value).as('xmlValue');
                        cy.get(xmlElement.$.value, { timeout: 10000 }).should('be.visible');
                    }
                } else {
                    throw new Error(`Elemento com a chave '${keyToSearch}' não encontrado no XML durante a atualização.`);
                }
            }
        });
    });
});

Cypress.Commands.add('_ProcessBaseValueToCssAndSetLocator', (keyToSearch, filePath) => {
    cy.readFile(filePath).then((xmlContent) => {
        xml2js.parseString(xmlContent, { explicitArray: false }, (err, result) => {
            if (err) throw err;

            if (result.locators && result.locators.element) {
                const elements = Array.isArray(result.locators.element) ? result.locators.element : [result.locators.element];
                const xmlElement = elements.find(el => el.$.key === keyToSearch);

                if (xmlElement && xmlElement.$.baseValue) {
                    const baseValue = xmlElement.$.baseValue;
                    const cssSelector = customXpathToCss(baseValue);
                    let updated = false;

                    if (xmlElement.$.value !== cssSelector) {
                        xmlElement.$.value = cssSelector;
                        updated = true;
                    }

                    if (updated) {
                        const builder = new xml2js.Builder();
                        const updatedXML = builder.buildObject(result);
                        cy.writeFile(filePath, updatedXML).then(() => {
                            cy.wrap(xmlElement.$.value).as('xmlValue');
                            cy.get(xmlElement.$.value, { timeout: 10000 }).should('be.visible');
                        });
                    } else {
                         cy.wrap(xmlElement.$.value).as('xmlValue');
                        cy.get(xmlElement.$.value, { timeout: 10000 }).should('be.visible');
                    }
                } else {
                    // Fallback se baseValue também estiver incorreto/vazio aqui
                    let initialSelector = `#${keyToSearch}`;
                    if (keyToSearch.startsWith('#')) {
                      initialSelector = keyToSearch;
                    }
                    cy.get(initialSelector, { timeout: 10000 })
                      .should('be.visible')
                      .then(($el) => {
                        cy._UpdateLocatorValues(keyToSearch, $el, filePath);
                      });
                }
            }
        });
    });
});

function customXpathToCss(xpath) {
  const parts = xpath.split('/').filter(part => part.trim() !== '');

  const cssParts = parts.map(part => {
    part = part.replace(/^\//, '');
    const tagName = part.split('[')[0].trim();
    const indexMatch = part.match(/\[(\d+)\]/);
    if (indexMatch) {
      const index = parseInt(indexMatch[1]) - 1;
      return `${tagName}:nth-of-type(${index + 1})`;
    } else {
      return tagName;
    }
  });

  return cssParts.join(' > ');
}


Cypress.Commands.add('_OrderByXmlData', (filePath) => {
  // Função para corrigir o conteúdo XML
  function fixXmlContent(xmlContent) {
    // Realize a substituição de `$gt;` ou `&gt;` por `>`
    return xmlContent.replace(/(\$gt;|&gt;)/g, '>');
  }
  cy.readFile(filePath).then((xmlContent) => {
    const correctedXml = fixXmlContent(xmlContent);
    // Parse do XML corrigido para objeto JavaScript
    const parser = new xml2js.Parser();
    parser.parseString(correctedXml, (err, parsedData) => {
      if (err) {
        throw new Error(`Erro ao analisar o XML: ${err.message}`);
      }
      // Ordena os elementos com base no atributo "key"
      parsedData.locators.element.sort((a, b) => {
        return a.$.key.localeCompare(b.$.key);
      });
      // Remova as linhas vazias com key, value e baseValue em branco
      parsedData.locators.element = parsedData.locators.element.filter((element) => (
        element.$.key !== '' || element.$.value !== '' || element.$.baseValue !== ''
      ));
      // Adicione a linha <element key="" value="" baseValue=""/> no final
      parsedData.locators.element.push({
        $: {
          key: '',
          value: '',
          baseValue: '',
        },
      });
      // Converte o objeto JavaScript de volta para XML
      const builder = new xml2js.Builder();
      const updatedXml = builder.buildObject(parsedData);
      // Salve o XML ordenado de volta no arquivo
      cy.writeFile(filePath, updatedXml);
    });
  });
  cy._InsertFeatureSeparator(filePath);
  cy._ReplaceAmpersandGt(filePath);
});

// Insere um comentário de separação
Cypress.Commands.add('_InsertFeatureSeparator', (filePath) => {
  cy.readFile(filePath).then((content) => {
    const xmlString = content.toString();
    const correctedXmlString = xmlString.replace(/&gt;/g, '>');
    const doc = new DOMParser().parseFromString(correctedXmlString, 'application/xml');
    // Função para corrigir todos os atributos de todos os elementos
    function fixAttributes(element) {
      for (const attr of element.attributes) {
        attr.value = attr.value.replace(/&gt;/g, '>');
      }
    }
    // Percorra todos os elementos e corrija os atributos
    const elements = Array.from(doc.documentElement.children);
    elements.forEach(fixAttributes);
    // Inserir comentário após cada grupo de elementos
    const elementsGroupByKey = elements.reduce((acc, el) => {
      const key = el.getAttribute('key').split('.')[0];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(el);
      return acc;
    }, {});
    // Inserir comentário após cada grupo de elementos
    Object.values(elementsGroupByKey).forEach((group) => {
      group[group.length - 1].insertAdjacentHTML('afterend', '\n<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->\n');
    });
    // Converta o documento XML de volta para uma string
    const updatedXmlString = new XMLSerializer().serializeToString(doc);
    // Escreva a string atualizada no arquivo
    cy.writeFile(filePath, updatedXmlString);
  });
});

// Substitui "&gt;" por ">"
Cypress.Commands.add('_ReplaceAmpersandGt', (filePath) => {
  cy.readFile(filePath).then((content) => {
    const xmlString = content.toString();
    const correctedXmlString = xmlString.replace(/&gt;/g, '>');
    cy.writeFile(filePath, correctedXmlString);
  });
});

Cypress.Commands.add('_ConvertElementToCypress', (key, filePath) => {
  cy.readFile(filePath).then((content) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(content, 'text/xml');
    const elementXml = xmlDoc.querySelector(`element[key="${key}"]`);
    if (!elementXml) {
      console.error(`Elemento com a chave "${key}" não achado no XML.`);
      return;
    }
    const cssSelector = elementXml.getAttribute('value');
    if (!cssSelector) {
      console.error(`CSS Selector vazio para elemento com chave "${key}" no XML.`);
      return;
    }
    // Convertendo o seletor do XML em um seletor Cypress
    const cypressSelector = convertElementToCypressSelector(cssSelector);
    if (cypressSelector) {
      // Verifica se o elemento com o seletor Cypress existe
      cy.get(cypressSelector).then(($el) => {
        // Atualiza o valor no XML
        elementXml.setAttribute('value', $el.val()); // Usando .val() para obter o valor do campo
        valueElement = elementXml;
        // Serializa o XML e corrige entidades HTML
        const updatedXML = new XMLSerializer().serializeToString(xmlDoc);
        const correctedXml = updatedXML.replace(/&gt;/g, '>');
        // Escreve o XML corrigido de volta no arquivo
        cy.writeFile(filePath, correctedXml);
      });
    } else {
      console.error(`Invalido CSS selector: "${cssSelector}"`);
    }
  });
});

function convertElementToCypressSelector(element) {
  if (!element || !element.attributes) {
    return null;
  }
  const selectors = [];
  let currentElement = element;
  while (currentElement) {
    if (currentElement.id) {
      selectors.unshift(`#${currentElement.id}`);
      break;
    }
    if (currentElement.className) {
      const classes = currentElement.className.split(' ');
      selectors.unshift(classes.map(cls => `.${cls}`).join(''));
    }
    // Tratamento para atributos específicos, se necessário
    for (let i = 0; i < currentElement.attributes.length; i++) {
      const attr = currentElement.attributes[i];
      selectors.push(`[${attr.name}="${attr.value}"]`);
    }
    // Tratamento para texto do elemento
    const elementText = currentElement.textContent.trim();
    if (elementText) {
      selectors.push(`:contains("${elementText}")`);
    }
    currentElement = currentElement.parentElement;
  }
  return selectors.join(' > ');
}

Cypress.Commands.add('ClearFolderCypressDownloads', () => {
  const downloadsFolder = 'downloads'; // Substitua pelo seu caminho de downloads

  cy.log('Limpando o diretório de downloads...');

  cy.writeFile(downloadsFolder + '/.gitkeep', ''); // Cria um arquivo .gitkeep

  cy.request({
    method: 'DELETE',
    url: '/api/cypress-clear-downloads',
  });

  cy.log('Downloads limpos com sucesso.');
});



//daqui para cima crie métodos customizados que sejam usados globalmente indepedente de projeto 
//--------------------------------------------------------------------------------------------
// apartir de baixo apenas deverá criar comandos customizados antiga empresa

Cypress.Commands.add('ValidateStatusWithGreenColor', (element) => {
  cy.ValidateElementPass(element).each(($row, index, $list) => {
    if (index < $list.length - 1) {
      const statusCustomerStatusGreen = $row.attr('bullet green');
      const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet green');
      if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
        cy.log('The Status - Customer and Status - Sales is equals');
      }
    }
  });
});

Cypress.Commands.add('CheckAmountOfCostsInTheTableEachPaging', (element) => {
  cy.ValidateElementPass(element).each(($btn) => {
    if ($btn.is(":visible")) {
      cy.wrap($btn).click({ force: true });
      cy.get('.mat-footer-cell > app-pagination > .static-footer > .div-footer > .div-pagination > .arrow-next').click({ force: true });
      cy.get('table > tbody').find('tr').should('have.length', 20);
    } else {
      return
    }
  })
});

Cypress.Commands.add('CostingCSVReadAndWrite', (element) => {
  const extensaoArquivo = '.csv';
  let caminhoArquivo; // Definindo a variável fora do bloco then

  //desmarcar se for Linux
  //cy.exec(`ls downloads/*${extensaoArquivo} | sort -r | head -n 1`, { failOnNonZeroExit: false })
  //desmarcar se for Windows
  cy.exec(`dir /B /O-D cypress\\downloads\\*${extensaoArquivo}`, { failOnNonZeroExit: false })
    .its('stdout')
    .then(stdout => {
      const linhas = stdout.trim().split('\n');
      const arquivoMaisRecente = linhas[0];
      caminhoArquivo = `cypress\\downloads\\${arquivoMaisRecente}`;
      cy.log(`Arquivo mais recente: ${caminhoArquivo}`);
      return cy.readFile(caminhoArquivo, 'utf-8');
    })
    .then(conteudo => {
      const colunaVazia = "Cost Value";
      const colunaSubstituir = "% Markup";
      const linhasSemSep = conteudo.split('\n').slice(1).join('\n');
      const linhas = linhasSemSep.split('\n').map(linha => linha.split(';'));

      // Encontrar o índice da coluna
      const indiceColunaVazia = linhas[0].indexOf(colunaVazia);
      const indiceColunaSubstituir = linhas[0].indexOf(colunaSubstituir);

      cy.log(`Indice Coluna Vazia: ${indiceColunaVazia}`);
      cy.log(`Indice Coluna Substituir: ${indiceColunaSubstituir}`);

      if (indiceColunaVazia === -1) {
        throw new Error(`Coluna ${colunaVazia} não encontrada no arquivo: ${caminhoArquivo}`);
      }

      if (indiceColunaSubstituir === -1) {
        throw new Error(`Coluna ${colunaSubstituir} não encontrada no arquivo: ${caminhoArquivo}`);
      }

      // Processamento das linhas
      for (let i = 1; i < linhas.length; i++) {
        if (i < linhas.length - 1 && (linhas[i][indiceColunaVazia] === undefined || (typeof linhas[i][indiceColunaVazia] === 'string' && linhas[i][indiceColunaVazia].trim() === ''))) {
          const novoValor = Math.floor(Math.random() * 900) + 100;
          linhas[i][indiceColunaVazia] = novoValor;
          cy.log(`Linha ${i}, Coluna Vazia Atualizada: ${novoValor}`);
        }

        if (linhas[i][indiceColunaSubstituir] === '0') {
          const novoValorSubstituir = Math.floor(Math.random() * 99) + 1;
          linhas[i][indiceColunaSubstituir] = novoValorSubstituir;
          cy.log(`Linha ${i}, Coluna Substituir Atualizada: ${novoValorSubstituir}`);
        }
      }
      // Atualizar o conteúdo do arquivo
      const novoConteudo = linhas.map(linha => linha.join(';')).join('\n');
      cy.writeFile(caminhoArquivo, novoConteudo);

      // Exibir o estado das linhas depois da escrita
      cy.log('Linhas Depois da Escrita:');
      cy.log(JSON.stringify(linhas));
      cy.log(`Finalizando processamento do arquivo: ${caminhoArquivo}`);
    });
});

Cypress.Commands.add('PricingCSVReadAndWrite', () => {
  const extensaoArquivo = '.csv';
  //desmarcar se for Linux
  //cy.exec(`ls downloads/*${extensaoArquivo} | sort -r | head -n 1`, { failOnNonZeroExit: false })
  //desmarcar se for Windows
  return cy.exec(`dir /B /A-D cypress\\downloads\\*${extensaoArquivo}`, { failOnNonZeroExit: false })
    .then(({ stdout }) => {
      const arquivos = stdout.trim().split('\n');
      if (arquivos.length === 0) {
        cy.log('Nenhum arquivo CSV encontrado na pasta downloads.');
        return;
      }

      arquivos.forEach(arquivo => {
        const caminhoArquivo = `downloads/${arquivo.trim()}`; // Removendo espaços em branco
        cy.log(`Processando arquivo: ${caminhoArquivo}`);

        cy.readFile(caminhoArquivo, 'utf-8').then(conteudo => {
          let separador = detectarSeparador(conteudo);

          // Remover a linha "sep=;" se existir
          conteudo = conteudo.replace(/^sep=;/, '');

          const linhasSemSep = conteudo.split('\n').slice(1).join('\n');
          const linhas = linhasSemSep.split('\n').map(linha => linha.split(separador));

          // Processamento das linhas
          for (let rowIndexToUpdate = 0; rowIndexToUpdate < linhas.length; rowIndexToUpdate++) {
            // Iterar sobre cada coluna e preencher valores se estiverem em branco
            const colunas = linhas[rowIndexToUpdate];
            linhas[rowIndexToUpdate] = preencherColunasEmBranco(colunas, linhas[0]);
            cy.log(`Linhas Atualizadas: ${JSON.stringify(linhas[rowIndexToUpdate])}`);
          }

          // Atualizar o conteúdo do arquivo
          const novoConteudo = linhas.map(linha => linha.join(separador)).join('\n');
          cy.writeFile(caminhoArquivo, `sep=${separador}\n${novoConteudo}`, { encoding: 'utf-8' });

          cy.log('Operações de leitura e escrita concluídas para o arquivo: ' + caminhoArquivo);
        });
      });
    });
});

// Função para preencher valores em branco nas colunas
function preencherColunasEmBranco(colunas, nomesColunas) {
  return colunas.map((currentValue, columnIndex) => {
    // Preencher valor se estiver em branco
    if (!currentValue || currentValue.trim() === '') {
      const nomeColuna = nomesColunas[columnIndex]; // Obter o nome da coluna a partir da primeira linha
      return getColumnValue(nomeColuna);
    }
    return currentValue;
  });
}

// Função para obter o valor com base no nome da coluna
function getColumnValue(nomeColuna) {
  // Adapte esta função conforme necessário com os valores desejados para cada coluna
  switch (nomeColuna) {
    case 'GP Target':
      return '1000';
    case 'GP Limit':
      return '900';
    case 'Validity From':
      return obterDataFormatada(1);
    case 'Validity To':
      return obterDataFormatada(2);
    default:
      return null;
  }
}

// Função para obter a data formatada
function obterDataFormatada(diasParaFrente) {
  const data = new Date();
  data.setDate(data.getDate() + diasParaFrente);
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês é base 0
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

// Função para detectar o separador no conteúdo do CSV
function detectarSeparador(conteudo) {
  const possiveisSeparadores = [',', ';', '\t']; // Adicione outros separadores se necessário
  for (const separador of possiveisSeparadores) {
    const linhas = conteudo.split('\n');
    const primeiraLinha = linhas[0];
    if (primeiraLinha.includes(separador)) {
      return separador;
    }
  }
  // Se nenhum separador for detectado, retorne o padrão ','
  return ',';
}

Cypress.Commands.add('UploadFileOnTheButtonHtml5', (element) => {
  const extensaoArquivo = '.csv';
  //desmarcar se for Linux
  //cy.exec(`ls downloads/*${extensaoArquivo} | sort -r | head -n 1`, { failOnNonZeroExit: false })
  //desmarcar se for Windows
  cy.exec(`dir /B /O-D cypress\\downloads\\*${extensaoArquivo}`, { failOnNonZeroExit: false })
    .its('stdout')
    .then(stdout => {
      const linhas = stdout.trim().split('\n');
      const arquivoMaisRecente = linhas[0];
      const caminhoArquivo = `cypress\\downloads\\${arquivoMaisRecente}`;
      cy.log(`Arquivo mais recente: ${caminhoArquivo}`);

      // Faça o upload do arquivo diretamente
      cy.get('input[type=file]').selectFile(caminhoArquivo, { force: true });
    });
})

Cypress.Commands.add('UploadManyFilesOnTheButtonsHtml5', (files) => {
  const extensaoArquivo = '.csv';
  cy.exec(`dir /B /O-D cypress\\downloads\\*${extensaoArquivo}`, { failOnNonZeroExit: false })
    .its('stdout')
    .then(stdout => {
      const linhas = stdout.trim().split('\n');
      const arquivosMaisRecentes = linhas.slice(0, 4);
      arquivosMaisRecentes.forEach((arquivoMaisRecente, index) => {
        const caminhoArquivo = `downloads/${arquivoMaisRecente.trim()}`;
        // Clicar no botão visível relacionado antes de interagir com o input[type="file"]
        cy.get('.upload-info', { multiple: true }).eq(index).click();
        cy.wait(200);
        // Fazer o upload do arquivo usando cypress-file-upload
        cy.get('input[type="file"]').eq(index).selectFile(caminhoArquivo, { force: true });
      });
    });
});
