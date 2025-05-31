



export class Methods {
    static testCounter = 1;
    nameCost = '';


    constructor() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignorar erros não capturados no Cypress
            return false;
        });
    }

    changeProfileToCommercialSales() {
        cy.get('.mat-menu-trigger > img').click();
        cy.get('.settings-menu-button-content').click();
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        cy.get('.col-4 > :nth-child(1)').click();
        cy.get('.col-4 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('.col-4 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('erick.santos');
        cy.get('.col-4 > :nth-child(1) > .pointer').click();
        cy.wait(4000);
        cy.get('tbody > :nth-child(1) > .cdk-column-profile-profileName').invoke('text').then((userProfile) => {
            if (userProfile !== '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\nCommercial Sales') {
                cy.get(':nth-child(2) > .pointer').eq(2).click();
                cy.get('#mat-dialog-0').should('be.visible').then(() => {
                    cy.contains('Save').should('be.visible');
                    cy.get('.mat-select-value').eq(1).click();
                    cy.contains('Commercial Sales').click({ force: true });
                    cy.contains('Save').click({ force: true });
                    cy.wait(5000);
                    cy.get('.btn').click();
                    cy.wait(10000);
                });
            }
        });
    }

    clickOnAgreementMenu() {
        cy.get('.row:nth-child(12) .label-item-menu').click();
        cy.wait(2000);
    }

    searchCorporateGroup() {
        cy.get('.col-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('QA_Camila_Group_Teste');
        cy.get('app-button-load > .btn').click();
        cy.wait(2000);
    }

    clickOnTheVisualizeButton() {
        cy.get('#actionButton').click();
        cy.wait(2000)
    }

    chooseAgreementWithStatusExpired() {
        cy.get('.filter-icon').click();
        cy.contains('Status').click();
        cy.get('#mat-input-9').type('expired');
        cy.wait(1000);
        cy.get('.mat-option-text ').contains('Expired').click();
        cy.wait(1000);
        cy.get('body').click(100, 200);
    }

    clickOnTheMoreActions() {
        cy.get(':nth-child(1) > .cdk-column-actions > :nth-child(4) > #actionButton').click();
    }

    clickOnThePostponeOption() {
        cy.get('.mat-menu-content').should('be.visible').then(() => {
            cy.get('.mat-menu-content > :nth-child(2)').click();
        });
    }

    chooseAgreementWithStatusReady() {
        cy.get('.filter-icon').click();
        cy.contains('Status').click();
        cy.get('#mat-input-9').type('ready');
        cy.wait(1000);
        cy.get('.mat-option-text ').contains('ready').click();
        cy.wait(1000);
        cy.get('body').click(100, 200);
    }

    changeProfileToAdmin() {
        cy.get('.mat-menu-trigger > img').click();
        cy.get('.settings-menu-button-content').click();
        cy.wait(3000);
        cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click();
        cy.get('.col-4 > :nth-child(1)').click();
        cy.get('.col-4 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.get('.col-4 > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('erick.santos');
        cy.get('.col-4 > :nth-child(1) > .pointer').click();
        cy.wait(4000);
        cy.get('tbody > :nth-child(1) > .cdk-column-profile-profileName').invoke('text').then((userProfile) => {
            if (userProfile !== '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\nAdministrador') {
                cy.get(':nth-child(2) > .pointer').eq(2).click();
                cy.get('#mat-dialog-0').should('be.visible').then(() => {
                    cy.contains('Save').should('be.visible');
                    cy.get('.mat-select-value').eq(1).click();
                    cy.contains('Administrador').click({ force: true });
                    cy.contains('Save').click({ force: true });
                    cy.wait(5000);
                    cy.get('.btn').click();
                    cy.wait(10000);
                });
            }
        });
    }

    clickOnTheCreateCost() {
        cy.get('.text-right > .btn').click();
    }

    openTheCostingPage() {
        cy.get(':nth-child(10) > .col-12 > .row > .col-8 > .label-item-menu').click();
        cy.wait(3000);
    }

    clickOnTheButtonInstaceIcon(){
        cy.get('.table-striped.table-borderless.grid-list-table.mat-table tr.mat-row.ng-star-inserted:nth-child(1) td.action-cell.mat-cell.cdk-column-actions.mat-column-actions.mat-table-sticky.text-right.ng-star-inserted:nth-child(13) span.ng-star-inserted:nth-child(3) button:nth-child(1) > img.ng-star-inserted').click();
        cy.wait(2000);
        cy.get('.mat-menu-trigger > .pointer').click();
        cy.get('.mat-menu-content > :nth-child(2)').click();

    }

    instaceManagementAndFillDatas() {
        cy.get('.table-striped.table-borderless.grid-list-table.mat-table tr.mat-row.ng-star-inserted:nth-child(1) td.action-cell.mat-cell.cdk-column-actions.mat-column-actions.mat-table-sticky.text-right.ng-star-inserted:nth-child(13) span.ng-star-inserted:nth-child(3) button:nth-child(1) > img.ng-star-inserted').click();
        cy.wait(2000);
        cy.get('app-costing-instance-grid-list > app-page-card > app-main-form > div.row.no-margin > div > div > div > div:nth-child(6) > div:nth-child(2) > button.btn.btn-outline-primary.custom-button.secondary-button.medium-button').click();
        cy.get('.content > .d-flex > .col-form > .ng-invalid > .dropdown-reactive > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.wait(2000);
        cy.get('app-dropdown-list > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.contains('teste').click({ force: true });
        cy.get('html').click();
        cy.wait(1000);
        cy.get('#content > app-exception-form > app-page-card > app-main-form > div.row.no-margin > div > div > div > app-exception-group:nth-child(3) > div > div.content > div.visible-content-inner.row.dropdown-inline > div.col-form.mt-2.ng-pristine.ng-invalid.ng-touched > app-dropdown-table > div > mat-form-field > div > div.mat-form-field-flex > div').click();
        cy.get(':nth-child(1) > .option').click();
        cy.get('body').type('{esc}');
        cy.get('html').click();
        cy.get('.col-form > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('560');
        //calendar
        const currentData = new Date();
        const nextData = new Date();
        currentData.setDate(currentData.getDate() + 2);
        nextData.setDate(nextData.getDate() + 5);
        const currentDay = currentData.getDate();
        const currentDayFormated = currentDay.toString();
        const nextDay = nextData.getDate();
        const nextDayFormated = nextDay.toString();

        //prototipo de manutenção inteligente
        //robo gerador do código cypress
        cy.get(':nth-child(1) > app-datepicker > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > img').click();
        cy.get('.mat-calendar-body-cell-content').contains(currentDayFormated).click();
        cy.get(':nth-child(2) > app-datepicker > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > img').click();
        cy.get('.mat-calendar-body-cell-content').contains(nextDayFormated).click();
        cy.get('app-button-load > .btn').click();
    }

    createExceptionCosting() {
        cy.get('.content > .d-flex > .col-form > .ng-invalid > .dropdown-reactive > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.wait(2000);
        cy.get('app-dropdown-list > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
        cy.contains('teste').click({ force: true });
        cy.get('html').click();
        cy.wait(1000);
        cy.get('#content > app-exception-form > app-page-card > app-main-form > div.row.no-margin > div > div > div > app-exception-group:nth-child(3) > div > div.content > div.visible-content-inner.row.dropdown-inline > div.col-form.mt-2.ng-pristine.ng-invalid.ng-touched > app-dropdown-table > div > mat-form-field > div > div.mat-form-field-flex > div').click();
        cy.get(':nth-child(1) > .option').click();
        cy.get('body').type('{esc}');
        cy.get('html').click();
        cy.get('.col-form > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('560');
        //calendar
        const currentData = new Date();
        const nextData = new Date();
        currentData.setDate(currentData.getDate() + 2);
        nextData.setDate(nextData.getDate() + 5);
        const currentDay = currentData.getDate();
        const currentDayFormated = currentDay.toString();
        const nextDay = nextData.getDate();
        const nextDayFormated = nextDay.toString();

        //prototipo de manutenção inteligente
        //robo gerador do código cypress
        cy.get(':nth-child(1) > app-datepicker > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > img').click();
        cy.get('.mat-calendar-body-cell-content').contains(currentDayFormated).click();
        cy.get(':nth-child(2) > app-datepicker > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-datepicker-toggle > .mat-icon-button > .mat-button-wrapper > img').click();
        cy.get('.mat-calendar-body-cell-content').contains(nextDayFormated).click();
        cy.get('app-button-load > .btn').click();
    }

    validatePopupSucess() {
        cy.get('.mat-snack-bar-container').should('contain', 'Success');
    }

    openTheCharacteristicPage() {
        cy.contains('Product Management').trigger('mousemove', { force: true });
        cy.contains('Characteristics').click({ force: true });
        cy.wait(2000);
    }

    clickOnTheButtonCreateCharacteristic() {
        cy.get('[style="text-align: right;"] > .btn').click();
        cy.wait(2000);
    }

    sendOnTheTextboxCreateCharacteristicName() {
        const randon = Cypress._.random(1000, 9999).toString();
        const convertToString = randon.toString();
        const titleString = "Characteristic Automated ";
        const result = titleString + convertToString;
        cy.get('#mat-input-4').type(result);
        cy.wait(1000);
    }

    selectTypeCharacteristic() {
        cy.get('.no-padding > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click({ force: true });
        cy.contains('Select').click({ force: true });
        cy.wait(1000);
    }

    sendTypeValueCharacteristic() {
        const valores = ['automacaodetestecypress', 'cypressautomacaodeteste'];
        cy.get('input[placeholder="Type a Value*"]').each(($input, index) => {
            cy.wrap($input).type(valores[index]);
        });
        cy.get('input[placeholder="Type a Value*"]').should('have.length', 2);
        cy.get('input[placeholder="Type a Value*"]').should(($inputs) => {
            expect($inputs[0].value).to.equal(valores[0]);
            expect($inputs[1].value).to.equal(valores[1]);
        });
        cy.wait(1000);
        cy.get('app-button-load > .btn').click({ force: true });
        cy.wait(4000);
    }

    selectGeneratedCharacteristicAndEdit() {
        cy.get('.mat-table-sticky.text-right.ng-star-inserted > span:nth-child(2) > a > img').first().click();
        cy.wait(1000);
        cy.get('#mat-input-10').clear();
        const randon = Cypress._.random(1000, 9999).toString();
        const convertToString = randon.toString();
        const titleString = "Characteristic Automated ";
        const result = titleString + convertToString;
        cy.get('#mat-input-10').type(result);
        cy.get('.button').click();
        cy.get('input[placeholder="Type a Value*').each(($input) => {
            cy.wrap($input).invoke('val').then((value) => {
                if (value === '') {
                    cy.wrap($input).type('cypressautomacaointercab');
                }
            });
        });
        cy.get('app-button-load > .btn').click({ force: true });
        cy.wait(3000);
        cy.get('table tbody tr td').contains(result).should('exist');

    }

    openTheProductManagementPage() {
        cy.contains('Product Management').trigger('mousemove', { force: true });
        cy.contains('Products').click({ force: true });
        cy.wait(2000);
    }

    validateElementsFromProductManagementPage() {
        cy.wait(3000);
        cy.get('table > thead').find('th').contains("ID");
        cy.get('table > thead').find('th').contains("Category");
        cy.get('table > thead').find('th').contains("Name");
        cy.get('table > thead').find('th').contains("Sold As");
        cy.get('table > thead').find('th').contains("Responsible for Execution");
        cy.get('table > thead').find('th').contains("Display Method");
        cy.get("div.div-table.scroll").scrollTo('right');
        cy.get('table > thead').find('th').contains("Actions");
        cy.get('table > thead').find('th').contains("Product Requirement");
        cy.get('table > thead').find('th').contains("Status - Customer");
        cy.get('table > thead').find('th').contains("Status - Sales");
        cy.get("div.div-table.scroll").scrollTo('right');
        cy.get('table > thead').find('th').contains("Actions");
    }

    validateAllFiltersFromFunnelIcon() {
        cy.get('.filter-icon').click({ force: true });
        cy.wait(2000);
        cy.get('.mat-select-value')
            .should('not.have.text', '');
        cy.get('.filter-icon').click({ force: true });
    }

    clickOnTheCreateProductAndEdit() {
        let innerTextAsString;
        cy.get('table tr:nth-child(1) td:nth-child(3) span')
            .invoke('text')
            .then((text) => {
                innerTextAsString = text;
            })
            .then(() => {
                cy.get('[style="text-align: right;"] > .btn').click({ force: true });
                cy.get('input[placeholder="Choose a name"]')
                    .type(innerTextAsString);
            });
    }

    clickOnTheEditActionsButton() {
        let innerTextAsString;
        cy.get('table tr:nth-child(1) td:nth-child(3) span')
            .invoke('text')
            .then((text) => {
                innerTextAsString = text;
            })
            .then(() => {
                cy.get('.col-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('Automated').type('{Enter}');
                cy.wait(2500);
                cy.get('.table > tbody > tr:nth-child(1) > td:nth-child(10) > span:nth-child(2) > a > img').click();

            });
    }

    clickOnTheInstancesActionsButton() {
        cy.get('.table > tbody > tr:nth-child(1) > td:nth-child(10) > span:nth-child(3) > a > img').click();
    }

    clickOnTheEditActionsButtonProductInstance() {
        cy.get(':nth-child(1) > .action-cell > :nth-child(2) > #actionButton > .ng-star-inserted').click();
    }

    clickOnTheSaleCatalogSwitchAndClickSaveButton() {
        cy.get('#mat-slide-toggle-2 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
        cy.wait(1000);
        cy.contains('Save').click({ force: true });
        cy.wait(2000);
        cy.get('.mat-snack-bar-container').should('contain', 'Success');
    }

    editcharacteristicOfTheProductAndValidateTheTitleSuccess() {
        cy.get('.row.ng-star-inserted > .col-3 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click({ force: true });
        cy.contains('Product Characteristics').click({ force: true });
        cy.get('app-button-load.ng-star-inserted > .btn').click({ force: true });
        cy.get('.mat-snack-bar-container').should('contain', 'Success');
    }

    editcharacteristicOfTheProductAndValidateTheTitleAlert() {
        cy.get('#mat-select-10 > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click({ force: true });
        cy.contains('Cargo Movement').click({ force: true });
        cy.get('#mat-select-11 > .mat-select-trigger > .mat-select-arrow-wrapper').click({ force: true });
        cy.contains('FEEDER').click({ force: true });
        cy.wait(1000);
        cy.get('#cdk-overlay-1 > div > div').type('{esc}');
        cy.get('#mat-slide-toggle-1 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click({ force: true });
        cy.get('.mb-3 > app-button-load > .btn > .d-flex > span').click({ force: true });
        cy.get('#mat-dialog-0 > app-associate-characteristic > app-modal > div > div:nth-child(3) > form > div.row.justify-content-between.mb-4 > div > div:nth-child(1) > app-dropdown-list-reactive > div.dropdown-content-close.ng-star-inserted > div > div,:nth-child(1) > app-dropdown-list-reactive > .dropdown-content-close > :nth-child(1) > .dropdown-content-text').click({ force: true });
        cy.contains('Cidade').click({ force: true });
        cy.get('#mat-dialog-0 > app-associate-characteristic > app-modal > div > div:nth-child(3) > form > div.row.justify-content-between.mb-4 > div > div:nth-child(2) > app-dropdown-list-reactive > div.dropdown-content-close.ng-star-inserted > div > div,:nth-child(2) > app-dropdown-list-reactive > .dropdown-content-close > :nth-child(1) > .dropdown-content-text').click({ force: true });
        cy.contains('Automated').click({ force: true });
        cy.get('#mat-dialog-0 > app-associate-characteristic > app-modal > div > div.row.primary-color.ng-star-inserted > div > span').click({ force: true });
        cy.get('#mat-dialog-0 > app-associate-characteristic > app-modal > div > div:nth-child(3) > form > div.button-add-char.justify-content-between.mt-4 > button').click({ force: true });
        cy.get('.row.ng-star-inserted > .col-3 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click({ force: true });
        cy.contains('Product Characteristics').click({ force: true });
        cy.get('app-button-load.ng-star-inserted > .btn').click({ force: true });
        cy.get('.title-alert').should('contain', 'Do you really want to create a product with the same characteristics as the product');
    }

    validateStatusWithGreenColor() {
        cy.wait(2000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet green');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet green');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    validateStatusWithRedColor() {
        cy.wait(2000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet red');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet red');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    validateStatusWithMixColor() {
        cy.wait(2000);
        cy.get('.col-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('337');
        cy.get('app-button-load > .btn').click();
        cy.wait(2000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet black');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet black');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    validateStatusWithBlackColor() {
        cy.wait(2000);
        cy.get('.col-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type('337');
        cy.get('app-button-load > .btn').click();
        cy.wait(2000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet black');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet black');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    goToTheInstanceManagementButton() {
        cy.wait(2000);
        cy.get(':nth-child(3) > .pointer > .ng-tns-c17-4,:nth-child(5) > .action-cell > :nth-child(3) > .pointer,:nth-child(15) > .action-cell > :nth-child(3) > .pointer > .ng-tns-c17-4').click();

    }

    checkTheStatusOfTheInstancesWithGreenColor() {
        cy.wait(3000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet green');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet green');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    checkTheStatusOfTheInstancesWithRedColor() {
        cy.wait(3000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet red');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet red');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    checkTheStatusOfTheInstancesWithMixColor() {
        cy.wait(3000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet black');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet black');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    checkTheStatusOfTheInstancesWithBlackColor() {
        cy.wait(3000);
        cy.get('table tr').each(($row, index, $list) => {
            if (index < $list.length - 1) {
                const statusCustomerStatusGreen = $row.attr('bullet black');
                const statusCustomerSalesGreen = $list.eq(index + 1).attr('bullet black');
                if (statusCustomerStatusGreen === statusCustomerSalesGreen) {
                    cy.log('The Status - Customer and Status - Sales is equals');
                }
            }
        });
    }

    fillTheMandatoryFieldsCosting() {
        Methods.testCounter++;
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000);
        this.nameCost = `AutomatedTest_${timestamp}_${randomNumber}`;
        cy.get(':nth-child(1) > .col-md-4 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(this.nameCost);
        cy.contains('Customer Type*').click({ force: true });
        cy.contains('CABOTAGE').click({ force: true });
        cy.get('body').click(100, 200);
        cy.contains('Tariff Unit*').click({ force: true });
        cy.contains('Container').click({ force: true });
        cy.get('body').click(100, 200);
        cy.contains('Currency Abb*').click({ force: true });
        cy.contains('BRL').click({ force: true });
        cy.get('body').click(100, 200);
        cy.contains('Save').click();
        cy.wait(3000);
        return this.nameCost;
    }

    verifyTheCreationOfCost() {
        cy.contains('Operation successfully performed').should('be.visible');
    }
    clickOnProductsInProductManagement() {
        cy.contains('Product Management').trigger('mousemove', { force: true });
        cy.contains('Products').click({ force: true });
        cy.wait(3000);

    }

    verifyLabelsFromCostAndClickOnTheFilters() {
        cy.get('table > thead').find('th').contains("ID").click();
        cy.get('table > thead').find('th').contains("Associated Cost ID").click();
        cy.get('table > thead').find('th').contains("Cost Name").click();
        cy.get('table > thead').find('th').contains("Cost Status").click();
        cy.get('table > thead').find('th').contains("Mandatory Cost").click();
        cy.get('table > thead').find('th').contains("Visible in the Agreement").click();
        cy.get("div.div-table.scroll").scrollTo('right');
        cy.get('table > thead').find('th').contains("Customer Type").click();
        cy.get('table > thead').find('th').contains("Tariff Unit").click();
        cy.get('table > thead').find('th').contains("Currency Abb").click();
        cy.get('table > thead').find('th').contains("Associated Products").click();
        cy.get("div.div-table.scroll").scrollTo('right');
        cy.get('table > thead').find('th').contains("Active Instances").click();
        cy.get('table > thead').find('th').contains("Active Instances expiring in the next 30 days").click();
        cy.get('table > thead').find('th').contains("Actions") // este elemento não é interativo mas está sendo validado
    }

    checkAmountOfCostsInTheTableEachPaging() {
        cy.get('.primary-color.circle.pointer.no-margin.ng-star-inserted').each(($btn) => {
            if ($btn.is(":visible")) {
                cy.wrap($btn).click({ force: true });
                cy.get('table > tbody').find('tr').should('have.length', 20);
            } else {
                return
            }
        })
    }

    validateIconsFromTheTableCost() {
        cy.get('table > tbody').find('tr').should('have.length', 20)
    }

    chooseProductAvailable() {
        cy.get('.filter-icon').click()
        cy.get('mat-select').eq(3).click();  // Abrir o dropdown
        cy.get('.mat-option').contains('Handling').click();  // Selecionar a opção desejada
        cy.get('body').click(400, 200);
        cy.get('mat-select').eq(8).click();  // Abrir o dropdown
        cy.get('.mat-option').contains('Available').click();  // Selecionar a opção desejada
        cy.get('body').click(400, 200);
        cy.get('mat-select').eq(9).click();  // Abrir o dropdown
        cy.get('.mat-option').contains('Available').click();  // Selecionar a opção desejada
        cy.get('body').click(400, 200);
        cy.wait(3000);

    }

    disableInstanceAvailable() {
        cy.get(':nth-child(1) > .action-cell > :nth-child(3) > .pointer > .ng-tns-c23-9').click({ force: true });
        cy.wait(5000);
        let instanceId;
        cy.get('mat-select').eq(3).click();
        cy.get('.mat-option').contains('Available').click();
        cy.get('body').click(400, 200);
        cy.get('mat-select').eq(4).click();
        cy.get('.mat-option').contains('Available').click();
        cy.get('body').click(400, 200);
        cy.wait(3000);

        cy.get('.cdk-column-id').eq(1).invoke('text').then((text) => {
            instanceId = text.trim();
            cy.log(instanceId);
            cy.log('Disable Instance')
            cy.get(':nth-child(1) > .action-cell > :nth-child(2) > #actionButton > .ng-star-inserted').click();
            cy.wait(3000);
            cy.contains('Sales Catalogue').click({ force: true });
            cy.contains('Save').click({ force: true });
            cy.wait(3000);
            cy.log('Verify Status Available To Unavaiable')
            cy.contains('Operation successfully performed').should('be.visible');
            cy.wait(3000);
            cy.get('mat-select').eq(2).click();
            cy.wait(2000);
            cy.get('.mat-option').contains(instanceId).click();
            cy.get('body').click(400, 200);
            cy.wait(3000);
            cy.get('.cdk-column-statusCustomer > span.ng-star-inserted > .ng-star-inserted > .d-flex > .bullet').should('have.class', 'half-green-red');
            cy.get('.cdk-column-statusSales > span.ng-star-inserted > .ng-star-inserted > .d-flex > .bullet').should('have.class', 'half-green-red');
        }
        )
    }

    enableInstanceAvailable() {
        let productId;
        cy.get('.cdk-column-id').eq(1).invoke('text').then((text) => {
            productId = text.trim();
            cy.log(productId);
            cy.get(':nth-child(1) > .action-cell > :nth-child(3) > .pointer > .ng-tns-c23-9').click({ force: true });
            cy.wait(5000);
            let instanceId;
            cy.get('mat-select').eq(3).click();
            cy.get('.mat-option').contains('Unavailable').click();
            cy.get('body').click(400, 200);
            cy.get('mat-select').eq(4).click();
            cy.get('.mat-option').contains('Unavailable').click();
            cy.get('body').click(400, 200);
            cy.wait(3000);

            cy.get('.cdk-column-id').eq(1).invoke('text').then((text) => {
                instanceId = text.trim();
                cy.log(instanceId);
                cy.log('Enable Instance')
                cy.get(':nth-child(1) > .action-cell > :nth-child(2) > #actionButton > .ng-star-inserted').click();
                cy.wait(3000);
                cy.contains('Sales Catalogue').click({ force: true });
                cy.contains('Save').click({ force: true });
                cy.contains('Customer Catalogue').click({ force: true });
                cy.contains('Save').click({ force: true });
                cy.wait(3000);
                cy.log('Verify Status Unavaiable To Avaiable')
                cy.contains('Operation successfully performed').should('be.visible');
                cy.wait(3000);

                cy.get('.filter-icon').click()
                cy.wait(2000);
                cy.get('mat-select').eq(1).click();  // Abrir o dropdown
                cy.get('.mat-option').contains(productId).click();
                cy.get('body').click(400, 200);
                cy.wait(3000);
                cy.get(':nth-child(3) > .pointer > .ng-tns-c23-69').click({ force: true });
                cy.wait(5000);

                cy.get('mat-select').eq(2).click();
                cy.wait(2000);
                cy.get('.mat-option').contains(instanceId).click();
                cy.get('body').click(400, 200);
                cy.wait(3000);
                cy.get('.cdk-column-statusCustomer > span.ng-star-inserted > .ng-star-inserted > .d-flex > .bullet').should('have.class', 'half-red-green');
                cy.get('.cdk-column-statusSales > span.ng-star-inserted > .ng-star-inserted > .d-flex > .bullet').should('have.class', 'half-red-green');
            }
            )
        }
        )
    }

    changeProfileToPricingRoles() {
        cy.get('div > div:nth-child(2) > button').click();
        cy.get('div.button-wrapper.ng-star-inserted > button').click();
        cy.wait(2000);
        cy.get('#mat-tab-label-0-1').click();
        cy.wait(2000);
        cy.get('div.col-4.no-padding.ng-tns-c22-5.ng-star-inserted > a:nth-child(1) > img').click();
        cy.get('#mat-input-1').type('eduardo.oliveira.da.silva@maersk.com');
        cy.wait(2000);
        cy.get('div.col-4.no-padding.ng-tns-c22-5.ng-star-inserted > a:nth-child(1) > img').click();
        cy.wait(2000);
        cy.get('span:nth-child(2) > a > img').click();
        cy.wait(2000);
        cy.get('#mat-select-1 > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('#mat-input-3').type('Administrador');
        cy.wait(2000);
        cy.get('.mat-option-text').click();
        cy.wait(1000);
        cy.get('app-button-load.ng-star-inserted > .btn').click();
    }

    clickPrincing() {
        cy.wait(3000);
        cy.get(':nth-child(11) > .col-12 > .row > .col-8 > .label-item-menu').click();
    }

    clickEditButtonPrice() {
        cy.wait(2000);
        cy.get(':nth-child(1) > .action-cell > :nth-child(2) > #actionButton > .ng-star-inserted').click();
    }


    clickActiveForPrice() {
        cy.wait(2000);
        cy.get('.mat-slide-toggle-thumb').click();
        cy.wait(1000);
        cy.get('.mat-slide-toggle-thumb').click();

    }

    sendDescription() {
        cy.get('#mat-input-2').type('This is a test automation from cypress');
    }

    validateDropBox() {
        cy.wait(1500);
        cy.get('#cdk-drop-list-0 > :nth-child(1) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(2) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(3) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(4) > :nth-child(2)').should('be.visible');
    }
    clickAssociateCharacteristicDropdown() {
        cy.wait(3000);
        cy.get('#content > app-pricing-grid-list > app-page-card > app-main-form > div.row.no-margin > div > div > div > app-data-table > div.row.grid-margin.no-margin > div.div-table.scroll > table > tbody > tr:nth-child(3) > td.action-cell.mat-cell.cdk-column-actions.mat-column-actions.mat-table-sticky.text-right.ng-star-inserted > span:nth-child(2)').click();
        cy.wait(1500);
        cy.get('#cdk-drop-list-0 > :nth-child(1) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(2) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(3) > :nth-child(2)').should('be.visible');
        cy.get('#cdk-drop-list-0 > :nth-child(4) > :nth-child(2)').should('be.visible');
    }

}

