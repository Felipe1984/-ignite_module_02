# dtmoney

![dtmoney](./src/assets/dtmoney.png)

## Introdução

O dtmoney é um exemplo de uma aplicação financeira criada para ajudar no controle de receitas e despesas. Desenvolvida para pessoas comuns terem acesso a uma ferramenta simples de usar no dia a dia.

## Features

São algumas das features implementadas nesse projeto de demonstração:
* Cadastro de despesas;
* Cadastro de valores recebidos;
* Listagem das receitas e despesas;
* Resumo do total de receitas;
* Total de despesas;
* Total do saldo.

## Detalhes técnicos

### Inicializando projeto (ambiente de desenvolvimento):

#### Algumas das tecnologias usadas:
* Node v16.14.0
* yarn v1.22.1
* react-scripts v5.0.0

#### Inicialização

Para inicializar o projeto no ambiente de desenvolvimento use o comando:  
```yarn```, para instalar as dependências, e em seguida ```yarn start```, Para rodar o projeto.

### Diretório base da aplicação:

Os **imports** podem usar o caminha relativo ou apontar diretamente para pastas e arquivos em src.  
O arquivo **tsconfig** contém a propriedade **baseUrl** com o valor **src**. Então você pode fazer:
> ```import { SomeComponent } from "components/SomeComponent"```  

Podendo também usar caminhos relativos normalmente.

### Backend

Usando a função **Server** fornecida pela biblioteca **miragejs** criamos uma fake api para uma simples demonstração de funcionamento do dtmoney.