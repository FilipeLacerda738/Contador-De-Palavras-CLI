

---

# **Contador de Palavras Duplicadas CLI**

## **Descrição**

O **Contador de Palavras Duplicadas CLI** é uma ferramenta de linha de comando desenvolvida em Node.js, projetada para processar arquivos de texto, identificar palavras duplicadas em cada parágrafo e salvar um relatório estruturado em um arquivo de saída. Essa aplicação é ideal para análise textual, revisão de documentos e estudos de padrões em textos.

---

## **Sumário**

1. [Funcionalidades](#funcionalidades)  
2. [Requisitos](#requisitos)  
3. [Instalação](#instalação)  
4. [Uso](#uso)  
5. [Exemplo de Execução](#exemplo-de-execução)  
6. [Estrutura do Projeto](#estrutura-do-projeto)  
7. [Tratamento de Erros](#tratamento-de-erros)  
8. [Possíveis Melhorias](#possíveis-melhorias)  
9. [Contribuições](#contribuições)  

---

## **Funcionalidades**

- **Processamento de Texto**: Lê um arquivo de texto e divide o conteúdo em parágrafos.
- **Contagem de Palavras Duplicadas**: Identifica e contabiliza palavras repetidas em cada parágrafo, ignorando diferenças entre maiúsculas e minúsculas.
- **Relatório de Resultados**: Gera um arquivo `.txt` com as palavras duplicadas organizadas por parágrafo.
- **Interface Simples e Intuitiva**: Comandos fáceis de usar para entrada e saída de dados.

---

## **Requisitos**

- **Node.js**: Versão 16 ou superior.  
- **Gerenciador de Pacotes**: NPM ou Yarn.  
- **Bibliotecas Adicionais**:
  - **Commander**: Gerenciamento de comandos na CLI.  
    Instale com:  
    ```bash
    npm install commander
    ```
  - **Chalk**: Personalização de mensagens no console.  
    Instale com:  
    ```bash
    npm install chalk
    ```
- Sistema operacional compatível: Windows, macOS ou Linux.

---

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

---

## **Uso**

Execute o programa utilizando o comando abaixo:

```bash
node src/cli.js -t <caminho_do_texto> -d <caminho_destino>
```

### **Parâmetros**

- `-t` ou `--texto` (obrigatório): Caminho para o arquivo de texto que será processado.  
- `-d` ou `--destino` (obrigatório): Caminho do diretório onde o relatório será salvo.

### **Exemplo de Comando**

```bash
node src/cli.js -t textos/entrada.txt -d resultados/
```

Este comando processará o arquivo `entrada.txt` localizado na pasta `textos/` e salvará o relatório em `resultados/`.

---

## **Exemplo de Relatório**

Após a execução, um arquivo chamado `resultado.txt` será gerado na pasta especificada no parâmetro `-d`. O conteúdo do relatório terá o seguinte formato:

```
Palavras duplicadas no parágrafo 1: exemplo, teste
Palavras duplicadas no parágrafo 2: desenvolvimento, código
Palavras duplicadas no parágrafo 3: projeto, resultado
```

---

## **Estrutura do Projeto**

```plaintext
meu-projeto/
├── src/
│   ├── cli.js             # Arquivo principal da CLI
│   ├── index.js           # Funções para contagem de palavras
│   ├── helpers.js         # Funções auxiliares
│   └── erros/
│       └── funcoesErro.js # Tratamento de erros
├── textos/                # Pasta para arquivos de entrada (opcional)
├── resultados/            # Pasta para relatórios gerados
├── package.json           # Configuração do projeto
├── README.md              # Documentação do projeto
└── .gitignore             # Arquivos ignorados pelo Git
```

---

## **Tratamento de Erros**

A ferramenta inclui tratamento básico de erros para evitar falhas inesperadas. Exemplos:

1. **Arquivo não encontrado**:
   - Mensagem: `Erro: Arquivo não encontrado.`
   - Solução: Verifique se o caminho do arquivo está correto.

2. **Diretório de saída inválido**:
   - Mensagem: `Erro: Não foi possível criar o diretório.`
   - Solução: Verifique as permissões do sistema para a pasta especificada.

3. **Parâmetros ausentes**:
   - Mensagem: `Erro: Favor inserir caminho de origem e destino.`
   - Solução: Certifique-se de incluir os parâmetros `-t` e `-d` ao executar o comando.

---

## **Possíveis Melhorias**

- **Suporte a outros formatos**: Adicionar suporte para entrada de arquivos `.csv` ou `.json`.
- **Interface Gráfica**: Desenvolver uma interface visual para facilitar o uso.
- **Relatório em diferentes formatos**: Geração de relatórios em `.csv` ou `.pdf`.
- **Internacionalização**: Permitir o uso da ferramenta em diferentes idiomas.

---

## **Contribuições**

Contribuições são bem-vindas! Se desejar reportar problemas, sugerir melhorias ou enviar um *pull request*, siga os passos abaixo:

1. Crie uma *issue* detalhando o problema ou sugestão.
2. Faça um *fork* do repositório e implemente sua alteração.
3. Envie um *pull request* com uma descrição clara do que foi alterado.

---

