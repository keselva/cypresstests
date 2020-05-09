import { selectors} from '../support/selectors'

const { passwordPage } = selectors

describe('Password generator tests', () => {
    beforeEach(() => { 
        cy.visit('/')
        cy.get(passwordPage.pageHeader).should('have.text', 'Experiment')
        cy.percySnapshot('Home page')
    })

    it('Verify password is generated for english language with special characters true', () => {
        cy.submitrequest('english','true')
        cy.get(passwordPage.password).should('be.visible').should('not.empty') 
        cy.percySnapshot('After generating password with special characters true')   
    })

    it('Verify password is generated for english language with special characters false', () => {
        cy.submitrequest('english','false')
        cy.get(passwordPage.password).should('be.visible').should('not.empty')
        cy.percySnapshot('After generating password with special characters false')    
    })
})