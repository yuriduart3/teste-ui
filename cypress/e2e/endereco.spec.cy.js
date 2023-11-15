/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEnderecos = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('Flavio', 'Dopneu', 'Itatinga', 'Brasil', 'Rua do puteiro', '69', 'Campinas', 'São Paulo', '69696969', '19333333333', 'flavio@dopneu.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEnderecos[1].nome,
            dadosEnderecos[1].sobrenome,
            dadosEnderecos[1].empresa,
            dadosEnderecos[1].pais,
            dadosEnderecos[1].endereco,
            dadosEnderecos[1].numero,
            dadosEnderecos[1].cidade,
            dadosEnderecos[1].estado,
            dadosEnderecos[1].cep,
            dadosEnderecos[1].telefone,
            dadosEnderecos[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});