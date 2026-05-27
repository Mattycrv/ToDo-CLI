# Projeto:

- ToDo List CLI.

## O que o programa precisa fazer:

- O usuário vai digitar comandos no terminal para gerencias suas tarefas.

```bash
    # Adicionar tarefa
    node index.js add "Estudar Node.js"

    #Listar tarefas
    node index.js list

    #Completar tarefa
    node index.js complete 1

    #Remover tarefa
    node index.js remove 2

```

### Perguntas para pensar:

- Onde vamos guardar as tarefas? (Para elas não sumirem quando fechar o programa)
  => Em um arquivo JSON.

- Como vamos identificar cada tarefa? (Para poder completar/remover)
  => Com um ID.

## Estrutura de uma tarefa:

```javascript
    {
        id: Number,
        text: String,
        completed: Boolean,
        createdAt: String
    }
```

## Fluxo de execução:

- Quando o usuário roda `node index.js add "Estudar"`:

Fluxo:

```
1. index.js recebe os argumentos da linha de comando;
2. index.js identifica o comando ("add");
3. index.js chama o controller apropriado;
4. Controller chama o service para processar;
5. Service manipula os dados (adiciona no array);
6. Service chama file-service para salvar no JSON;
7. Controller chama a view para exibir confirmação;
8. View exibe "✅ Tarefa adicionada!"

```
