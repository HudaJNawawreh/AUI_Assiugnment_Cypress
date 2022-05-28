class SmartPhones {
    constructor() {
      }
    getClassDropdown() {
        return cy.contains('.menu__select-field-text', 'Class');
    }
    getDisplaySizeDropdown() {
        return cy.contains('.menu__select-field-text', 'Display Size');
    }
    getMemorySizeDropdown() {
        return cy.contains('.menu__select-field-text', 'Memory');
    }
    getCameraDropdown() {
        return cy.contains('.menu__select-field-text', 'Camera');
    }
    getSpecificOption(option) {
        return cy.contains('.menu__list-option-text', option);
    }

    getFindBotton() {
        return cy.contains('.quick-search__cta', 'Find');
    }

    }

    export default SmartPhones