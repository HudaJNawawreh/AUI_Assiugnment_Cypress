// AUI_Assignment.js created with Cypress By Huda Jameel
//
// This test was built for an Assignment for AUI Company
import HomePage from '../../support/PageOpjects/HomePoge';
import SmartPhones from '../../support/PageOpjects/SmartPhonesPage';
import Checkout from '../../support/PageOpjects/CheckOut';

const homePage = new HomePage();
const smarphones = new SmartPhones();
const checkout = new Checkout();

const url = 'https://www.samsung.com/in/'
const phoneClass = 'Galaxy Z'
const diplaySize = '6.0 and above'
const memorySize = '256GB'
const camera = '9~12.9MP'

const finalDeviceName = 'Galaxy Z Fold3 5G'

describe('Testing Buying Smart Phone', () => {
  before(() => {
    // This will only make sure that the samsung website will open successfully before testing
    cy.visit(url)
    cy.url().should('include', url)
  })

//This test will bring you to the smartphone lists
it('Go to the SmartPhones lists', () => {


  cy.log('Choose Mobile from the menue')
  homePage.getMainMenue().click()
  homePage.getMobileOption().click()

  cy.log('Choose smarphones from the list')
  homePage.getSmartPhoneOption().click()
  homePage.gotOverViewOption().click()
  cy.url().should('include', '/smartphones/')
})

//This test will seacrh for a phone with some specifications
it('Quick search for a phone a ', () => {
  cy.log('Selecting class Galaxy Z')
  smarphones.getClassDropdown().click()
  smarphones.getSpecificOption(phoneClass).click()

  cy.log('Selecting Display Size 6.0 and above')
  smarphones.getDisplaySizeDropdown().click()
  smarphones.getSpecificOption(diplaySize).click()

  cy.log('Selecting Memory 256 GB')
  smarphones.getMemorySizeDropdown().click()
  smarphones.getSpecificOption(memorySize).click()

  cy.log('Selecting Camera 9~12.9MP')
  smarphones.getCameraDropdown().click()
  smarphones.getSpecificOption(camera).click()

  cy.log('click find')
  smarphones.getFindBotton().click()

})

//This test will select a device from the results and add it to the cart
it('Selecting the device and add it to the cart', () => {
  cy.log('Select Galaxy Z Fold3 5g')
  //cy.get('[data-modeldisplay="Galaxy Z Fold3 5G"]').contains('Buy now').click()
  checkout.getSelctedDevice(finalDeviceName).click()
  cy.contains('CONTINUE', { timeout: 10000 }).should('be.visible')
  cy.contains('CONTINUE').click({ force: true })

  checkout.clickSkipAsLongAsItIsExist()

  cy.log('Clicking Pay Now to enter the shopping cart')
  cy.wait(1000)
  checkout.getPayNowButton().should('be.visible')
  checkout.getPayNowButton().click()

})

//This test will checkout cart as a gust and check the Nexst is disabled when you don't enter data
it('Checkout shopping cart as guest and verify unable to proceed with no data', () => {

  cy.log('Checkout as a gest')
  cy.wait(5000)
  checkout.getContinueAsGuset().click()

  cy.wait(5000)

  cy.log('Verify the Next button is disabled because no data was entered')
  checkout.getNextButton().should('be.disabled')


})

//This test will check the error message when entering 
it('Verifying error message when entering invalid postal code', () => {

  cy.log('Entering invalid postal code, exaple: 32')
  checkout.getPinCodeField().type('32')

  cy.log('Verify that you will get an error message to enter a valid one')
  checkout.getPinCodeError().should('be.visible')
    .should('have.text', '\n    Please enter a valid Pincode.\n  ')

})

})
