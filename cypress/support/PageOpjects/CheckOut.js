class Checkout
{
    getSelctedDevice(finalDeviceName)
    {
        return cy.get('[data-modeldisplay="'+finalDeviceName+'"]').contains('Buy now');
    }

    getContinueButton()
    {
        
        return cy.contains('CONTINUE', { timeout: 10000 })
        
    }

    clickSkipAsLongAsItIsExist()
    {

        cy.get('body')
            .then(($body) => {
                // synchronously query from body
                // to find which element was created
                if ($body.find('#addon_skip').length) {
                    // input was found, do something else here
                    cy.log('found it')
                    cy.get('#addon_skip').click({ force: true });
                    this.clickSkipAsLongAsItIsExist()
                }
            })
    
    }

    getPayNowButton()
    {
        return cy.contains('Pay Now', { timeout: 10000 });
    }

    getContinueAsGuset()
    {
        return cy.contains('Continue as guest', { timeout: 10000 })
        
    }

    getNextButton()
    {
        return cy.contains('Next', { timeout: 10000 })
    }

    getPinCodeField()
    {
        return cy.get('.col-justify > .form-control' , { timeout: 10000 });
    }

    getPinCodeError()
    {
        return cy.get('.col-justify > .input-error-msg', { timeout: 10000 })
    }



}
export default Checkout