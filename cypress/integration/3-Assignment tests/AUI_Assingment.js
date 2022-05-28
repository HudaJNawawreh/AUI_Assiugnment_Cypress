// AUI_Assignment.js created with Cypress By Huda Jameel
//
// This test was built for an Assignment for AUI Company
const phoneClass= 'Galaxy Z'
const diplaySize= '6.0 and above'
const memorySize = '256GB'
const camera = '9~12.9MP'

// This test will only make sure that the samsung website will open successfully
it('Making sure the website opens', () => {
  cy.visit('https://www.samsung.com/in/')
  cy.url().should('include', 'https://www.samsung.com/in/')
})

//This test will bring you to the smartphone lists
it('Go to the SmartPhones lists', () => {

  cy.log('Choose Mobile from the menue')
  cy.get('.gnb__menu-btn > .icon > path').click()
  cy.contains('Mobile').click()

  cy.log('Choose smarphones from the list')
  cy.contains('Smartphones').click()
  cy.contains('Overview').click()
  cy.url().should('include', '/smartphones/')
})
 
//This test will seacrh for a phone with some specifications
it('Quick search for a phone a ', () => {
  cy.log('Selecting class Galaxy Z')
  cy.contains('.menu__select-field-text', 'Class').click()
  cy.contains('.menu__list-option-text', phoneClass).click()

  cy.log('Selecting Display Size 6.0 and above')
  cy.contains('.menu__select-field-text', 'Display Size').click()
  cy.contains('.menu__list-option-text', diplaySize).click()

  cy.log('Selecting Memory 256 GB')
  cy.contains('.menu__select-field-text', 'Memory').click()
  cy.contains('.menu__list-option-text', memorySize).click()

  cy.log('Selecting Camera 9~12.9MP')
  cy.contains('.menu__select-field-text', 'Camera').click()
  cy.contains('.menu__list-option-text', camera).click()

  cy.log('click find')
  cy.contains('.quick-search__cta', 'Find').click()

})

//This test will select a device from the results and add it to the cart
it('Selecting the device and add it to the cart', () => {
  cy.log('Select Galaxy Z Fold3 5g')
  cy.get('[data-modeldisplay="Galaxy Z Fold3 5G"]').contains('Buy now').click()

  cy.contains('CONTINUE', { timeout: 10000 }).should('be.visible')
  cy.contains('CONTINUE').click({ force: true })

  cy.get('.hubble-addon-page__product-cta > .s-cta-wrap > .cta', { timeout: 10000 }).should('be.visible')
  cy.get('.hubble-addon-page__product-cta > .s-cta-wrap > .cta').click({ force: true })

  cy.wait(1000)
  cy.get('.hubble-addon-page__product-cta > .s-cta-wrap > .cta').click({ force: true })
  cy.wait(1000)

  cy.log('Clicking Pay Now to enter the shopping cart')
  cy.wait(1000)
  cy.contains('Pay Now').click()

})

//This test will checkout cart as a gust and check the Nexst is disabled when you don't enter data
it('Checkout shopping cart as guest and verify unable to proceed with no data', () => {

  cy.log('Checkout as a gest')
  cy.contains('Continue as guest').click()

  cy.log('Verify the Next button is disabled becasue no data was enytered')
  cy.contains('Next').should('be.disabled')


})

//This test will check the error message when entering 
it('Verifying error message when entering invalid postal code', () => {

  cy.log('Entering invalid postal code, exaple: 32')
  cy.contains('Pincode').type('32')

  cy.log('Verify that you will get an error message to enter a valid one')
  cy.get('input-error-msg', { timeout: 10000 }).should('be.visible').should('have.text', 'Please enter a valid Pincode')

})


