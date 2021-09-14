/// <reference types="cypress" />

import { iteratee } from "lodash";

describe('dashboard visual testing',()=>{
    beforeEach(()=>{
        cy.login('manager@admin.com',"111111").then(()=>{
            cy.visit('https://cms-lyart.vercel.app/dashboard/manager');
            cy.wait(2000);

        });
    });

    it('Total Students',()=>{
        cy.get('.ant-col >.ant-card >.ant-card-body').first().should('be.visible');
        cy.get('.ant-col >.ant-card >.ant-card-body').first().toMatchImageSnapshot({
            threshold:0.1,
            thresholdType:'pixels',
        });
        
    })
})


        




//.ant-card-bordered   .ant-card.ant-card-bordered