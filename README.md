# pgats-automacao-web-2026

Projeto de prática de automação de testes web com [Cypress](https://www.cypress.io/), a biblioteca `cypress-xpath` e [Faker](https://fakerjs.dev/), desenvolvido como parte dos exercícios da pós-graduação em Automação de Testes de Software.

## Exercícios

1. **Cenários de teste:** implementar casos de cadastro, autenticação, catálogo, pesquisa, inscrição e compra no Automation Exercise. O spec modularizado cobre os casos de testes do 01 ao 05, 08 ao 10, 15 e 16.
2. **Correção de testes:** analisar e corrigir testes com problemas de sintaxe, funcionalidade e seletores. O exercício de referência está no [Gist](https://gist.github.com/samlucax/0df852881249b561cdf8888493b03125).
3. **Seletores XPath:** instalar e experimentar `cypress-xpath`, adaptando seletores e observando legibilidade e velocidade de execução.
4. **Teste de janela e drag-and-drop:** validar cenários de múltiplas janelas e operações de arrastar e soltar no site The Internet.

Os exercícios são voltados à prática e à fixação dos conceitos vistos em aula.

## Sites testados

- [Automation Exercise](https://www.automationexercise.com): cenários de cadastro, autenticação, catálogo, pesquisa, inscrição e compra.
- [DevFinance](https://devfinance-agilizei.netlify.app): testes de cadastro de transações.
- [The Internet (HerokuApp)](https://the-internet.herokuapp.com): testes de múltiplas janelas e drag-and-drop.

O Faker gera dados aleatórios, como nomes e e-mails, para reduzir conflitos entre execuções dos testes.

## Executar os testes no BrowserStack

Configure as variáveis de ambiente `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY` com as credenciais da sua conta. Não grave essas credenciais no `browserstack.json` nem em outros arquivos versionados.

Depois, execute:

```bash
npx browserstack-cypress run --config-file browserstack.json
```
<<<<<<< HEAD
=======

Se a execução no BrowserStack for adicionada ao GitHub Actions, salve as credenciais em **Settings > Secrets and variables > Actions** e disponibilize-as ao job como variáveis de ambiente. Não use credenciais diretamente no workflow.

## GitHub Actions

O workflow de testes E2E está em `.github/workflows/main.yml` e é iniciado manualmente:

1. Abra a aba **Actions** do repositório.
2. Selecione **Web E2E Tests**.
3. Clique em **Run workflow** e confirme a branch.

Ao final da execução, o artefato `relatorios` contém os relatórios, screenshots e vídeos gerados, quando disponíveis. Baixe-o na página da execução do workflow.
>>>>>>> bc21017 (Atualizações)

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Npm](https://docs.npmjs.com/cli/v9/commands/npm-install)
  
## Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

## Executar os testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar todos os testes em modo headless:

```bash
npx cypress run
```

Essa execução gera o relatório HTML do Cypress Mochawesome em `cypress/reports/html/index.html`.

Executar uma spec específica em modo headless:

```bash
npx cypress run --spec "cypress/e2e/1-getting-started/automation-exercise-modules.cy.js"
```

## Estrutura

- `cypress/e2e/1-getting-started/automation-exercise.cy.js`: casos de testes do 01 ao 05 do Automation Exercise, com cadastro, autenticação, catálogo, pesquisa, inscrição e compra. Usa dados dinâmicos gerados com Faker.
  
- `cypress/e2e/1-getting-started/automation-exercise-modules.cy.js`: casos de testes do 01 ao 05, 08 ao 10, 15 e 16 do Automation Exercise, organizados com funções reutilizáveis.
- `cypress/e2e/1-getting-started/automation-exercise-xpath.cy.js`: casos de testes do 01 ao 05 usando seletores XPath.
- `cypress/e2e/1-getting-started/exercicio_02.cy.js`: testes de transações na aplicação DevFinance.
- `cypress/modules/cadastro/index-class.js`: classe `Cadastro` com métodos para iniciar o cadastro, preencher formulário, confirmar criação da conta e validar mensagens de e-mail já cadastrado.
- `cypress/modules/cadastro/index.js`: funções reutilizáveis para iniciar o cadastro, preencher os dados da conta e verificar o sucesso do cadastro ou a existência prévia do e-mail.
- `cypress/support/automation-exercise.js`: funções reutilizáveis para cadastro, login, logout, exclusão de conta, catálogo, pesquisa, inscrição e checkout do Automation Exercise.
- `cypress/support/e2e.js`: configuração de suporte e carregamento do `cypress-xpath`.
- `cypress/e2e/1-getting-started/drag-and-drop-and-windows.cy.js`: cenário de testes de múltiplas janelas e drag-and-drop no The Internet.

## Documentação

- [Diretrizes de arquitetura dos testes Cypress (versão vigente)](./diretrizes-arquitetura-projeto-v3.md)
- [Diretrizes de arquitetura dos testes Cypress (versão anterior)](./diretrizes-arquitetura-projeto-v2.md)
- [Diretrizes de arquitetura dos testes Cypress (versão inicial)](./diretrizes-arquitetura-projeto.md)
