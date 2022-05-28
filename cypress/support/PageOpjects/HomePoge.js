class HomePage {
    constructor() {
      }
    getMainMenue() {
        return cy.get('.gnb__menu-btn > .icon > path');
    }
    getMobileOption(){
        return cy.contains('Mobile');
    }
    getSmartPhoneOption(){
        return cy.contains('Smartphones');
    }
    gotOverViewOption(){
        return cy.contains('Overview');
    }
    }

    export default HomePage