# Lista de Tarefas - Angular

Aplicação web desenvolvida em Angular como atividade acadêmica, com o objetivo de praticar conceitos básicos de desenvolvimento de aplicações utilizando componentes, eventos, formulários e manipulação de dados.

## Funcionalidades

A aplicação permite:

* Visualizar tarefas pré-cadastradas;
* Adicionar novas tarefas;
* Impedir o cadastro de tarefas vazias;
* Marcar tarefas como concluídas;
* Exibir visualmente as tarefas concluídas com texto riscado;
* Remover tarefas;
* Exibir a quantidade de tarefas concluídas;
* Atualizar automaticamente o contador ao marcar ou desmarcar uma tarefa.

## Tecnologias utilizadas

* Angular
* TypeScript
* HTML
* CSS

## Estrutura principal

A aplicação possui os seguintes arquivos principais:

* `src/app/app.ts` — contém a lógica da aplicação e as funções de adicionar, remover e contar tarefas.
* `src/app/app.html` — contém a estrutura da interface da lista de tarefas.
* `src/app/app.css` — contém os estilos utilizados na interface.

## Tarefas iniciais

A aplicação é iniciada com três tarefas:

1. Estudar Angular
2. Fazer exercício de programação
3. Revisar conteúdo da aula

A tarefa **"Fazer exercício de programação"** é iniciada como concluída.

## Como executar o projeto

### Pré-requisitos

É necessário ter instalado:

* Node.js
* npm
* Angular CLI

### Instalação

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd lista-tarefas
```

Instale as dependências:

```bash
npm install
```

### Executando a aplicação

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Depois, abra o navegador e acesse:

```text
http://localhost:4200
```
