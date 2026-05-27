# Todo CLI Node.js

Uma aplicação de linha de comando (CLI) desenvolvida em Node.js para gerenciamento de tarefas, utilizando arquitetura modular em camadas, persistência em arquivo JSON e separação de responsabilidades.

---

# 📚 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de backend com Node.js puro, sem frameworks.

Durante o desenvolvimento foram aplicados conceitos como:

* Modularização
* Arquitetura em camadas
* CRUD
* Persistência de dados
* Manipulação de arquivos com `fs`
* Manipulação de arrays e objetos
* Separação de responsabilidades
* Fluxo de dados
* Tratamento de erros
* CLI com `process.argv`
* Estilização do terminal com `chalk`

---

# 🏗️ Arquitetura do Projeto

O projeto foi dividido em camadas para manter o código organizado, escalável e de fácil manutenção.

```text
src/
│
├── controllers/
│   └── task-controller.js
│
├── data/
│   └── tasks.json
│
├── models/
│   └── task.js
│
├── services/
│   ├── file-service.js
│   └── task-service.js
│
├── views/
│   └── console-view.js
│
└── index.js
```

---

# 📂 Responsabilidade de Cada Camada

## 📁 Models

Responsável pela estrutura dos dados.

Exemplo:

* criação de tarefas
* definição do formato padrão da task

---

## 📁 Services

Responsável pelas regras de negócio.

Exemplo:

* adicionar tarefa
* completar tarefa
* remover tarefa
* listar tarefas

---

## 📁 File Service

Responsável pela persistência dos dados.

Exemplo:

* leitura do `tasks.json`
* escrita no `tasks.json`

---

## 📁 Controllers

Responsável por coordenar o fluxo da aplicação.

Exemplo:

* receber argumentos do terminal
* chamar services
* enviar dados para a view

---

## 📁 Views

Responsável pela apresentação no terminal.

Exemplo:

* mensagens coloridas
* listagem formatada
* feedbacks para o usuário

---

# ⚙️ Tecnologias Utilizadas

* Node.js
* JavaScript ESModules
* Chalk
* File System (`fs`)
* Path (`path`)

---

# 🚀 Funcionalidades

## ✅ Adicionar tarefa

```bash
node src/index.js add "Estudar Node.js"
```

---

## 📋 Listar tarefas

```bash
node src/index.js list
```

---

## ✔️ Completar tarefa

```bash
node src/index.js complete "ID_DA_TAREFA"
```

---

## ❌ Remover tarefa

```bash
node src/index.js remove "ID_DA_TAREFA"
```

---

# 💾 Persistência de Dados

As tarefas são armazenadas em um arquivo JSON:

```text
data/tasks.json
```

Exemplo:

```json
[
  {
    "id": "a9d06491-c059-4625-b427-c15873d3c8af",
    "text": "Estudar Node.js",
    "completed": false,
    "createdAt": "2026-05-27"
  }
]
```

---

# 🎨 Interface no Terminal

O projeto utiliza a biblioteca `chalk` para melhorar a experiência visual no terminal.

Exemplos:

* mensagens de sucesso em verde
* erros em vermelho
* avisos em amarelo
* tarefas concluídas riscadas

---

# 🧠 Conceitos Praticados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de engenharia de software:

* Arquitetura em camadas
* Separação de responsabilidades
* Fluxo de dados
* CRUD
* Programação modular
* Persistência local
* Validação defensiva
* Manipulação de arrays
* Tratamento de erros
* Organização de código
* Escalabilidade

---

# 📌 Melhorias Futuras

* [ ] Validação de argumentos
* [ ] Comando `help`
* [ ] Filtro de tarefas
* [ ] Prioridade de tarefas
* [ ] Data de conclusão
* [ ] Busca por texto
* [ ] Refatoração para async/await
* [ ] Testes automatizados
* [ ] Banco de dados
* [ ] Interface interativa no terminal

---

# ▶️ Como Executar o Projeto

## Clone o repositório

```bash
git clone SEU_REPOSITORIO
```

---

## Entre na pasta

```bash
cd todo-cli-node
```

---

## Instale as dependências

```bash
npm install
```

---

## Execute os comandos

```bash
node src/index.js add "Minha tarefa"
```

---

# 📖 Aprendizados

Este projeto foi extremamente importante para praticar conceitos fundamentais de backend com Node.js puro, principalmente:

* como estruturar aplicações em camadas
* como separar responsabilidades
* como organizar código escalável
* como funciona o fluxo interno de uma aplicação
* como persistir dados sem banco de dados
* como arquitetar um sistema simples de forma profissional

---

# 👨‍💻 Autor

Desenvolvido por Mateus Carvalho 🚀
