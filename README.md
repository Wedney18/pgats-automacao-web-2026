<<<<<<< HEAD
# Automação de testes web — resoluções de exercícios

Projeto de prática de automação de testes web com [Cypress](https://www.cypress.io/), a biblioteca `cypress-xpath` e [Faker](https://fakerjs.dev/), desenvolvido como parte dos exercícios da pós-graduação em Automação de Testes de Software.
=======
# Automação de testes web — 3 exercícios

Projeto de prática de automação de testes web com [Cypress](https://www.cypress.io/) e a biblioteca `cypress-xpath`, desenvolvido como parte dos exercícios da pós-graduação em Automação de Testes de Software.
>>>>>>> 2cf6941 (Melhora documentacao do projeto)

## Exercícios

1. **Cenários de teste:** implementar os cinco primeiros cenários da página de casos de teste do site utilizado em aula.
2. **Correção de testes:** analisar e corrigir testes com problemas de sintaxe, funcionalidade e seletores. O exercício de referência está no [Gist](https://gist.github.com/samlucax/0df852881249b561cdf8888493b03125).
3. **Seletores XPath:** instalar e experimentar `cypress-xpath`, adaptando seletores e observando legibilidade e velocidade de execução.

Os exercícios são voltados à prática e à fixação dos conceitos vistos em aula.

<<<<<<< HEAD
## Sites testados

- [Automation Exercise](https://www.automationexercise.com): cenários de cadastro, autenticação, catálogo, pesquisa, inscrição e compra.
- [DevFinance](https://devfinance-agilizei.netlify.app): testes de cadastro de transações.

O Faker gera dados aleatórios, como nomes e e-mails, para reduzir conflitos entre execuções dos testes.

## Pré-requisitos

- [Node.js](https://nodejs.org/) e npm

## Instalação

Na pasta do projeto, instale as dependências:

=======
## Pré-requisitos

- [Node.js](https://nodejs.org/) e npm

## Instalação

Na pasta do projeto, instale as dependências:

>>>>>>> 2cf6941 (Melhora documentacao do projeto)
```bash
npm install
```

## Executar os testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar os testes em modo headless:

```bash
npx cypress run
```

<<<<<<< HEAD
Executar um spec específico:

```bash
npx cypress run --spec "cypress/e2e/1-getting-started/automation-exercise.cy.js"
```

## Estrutura

- `cypress/e2e/1-getting-started/automation-exercise.cy.js`: casos 01–05, 08–10, 15 e 16 do Automation Exercise, com cadastro, autenticação, catálogo, pesquisa, inscrição e compra. Usa dados dinâmicos gerados com Faker.
- `cypress/e2e/1-getting-started/automation-exercise-modules.cy.js`: casos 01–05, organizados com funções reutilizáveis.
- `cypress/e2e/1-getting-started/automation-exercise-xpath.cy.js`: casos 01–05 usando seletores XPath.
- `cypress/e2e/1-getting-started/exercicio_02.cy.js`: testes de transações na aplicação DevFinance.
- `cypress/support/automation-exercise.js`: funções reutilizáveis para os fluxos de cadastro, login, logout e exclusão de conta do Automation Exercise.
=======
## Estrutura

- `cypress/e2e/1-getting-started/automation-exercise.cy.js`: cenários de cadastro e autenticação usando XPath.
- `cypress/e2e/1-getting-started/exercicio_02.cy.js`: testes de transações na aplicação DevFinance.
>>>>>>> 2cf6941 (Melhora documentacao do projeto)
- `cypress/support/e2e.js`: configuração de suporte e carregamento do `cypress-xpath`.
