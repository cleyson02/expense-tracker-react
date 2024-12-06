# Expense Tracker

Este é um aplicativo de rastreamento de despesas, desenvolvido com React, para ajudar os usuários a acompanhar seus gastos diários. O sistema permite que os usuários adicionem, visualizem, editem e excluam suas despesas, ajudando a gerenciar melhor seu orçamento pessoal.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React-Scripts**: Scripts padrão para configuração e execução de um aplicativo React.
- **Styled-Components**: Utilizado para estilizar componentes com CSS-in-JS.
- **Webpack**: Empacotador de módulos para aplicações JavaScript.
- **Babel**: Transpilador JavaScript.
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.

## Funcionalidades

- **Adicionar Despesas**: Permite ao usuário registrar novas despesas, incluindo o nome, valor e categoria.
- **Visualizar Despesas**: Exibe uma lista de todas as despesas registradas com detalhes como nome, valor e categoria.
- **Excluir Despesas**: Permite que o usuário remova despesas da lista.
- **Filtros**: O usuário pode filtrar as despesas por categoria ou valor.
- **Design Responsivo**: O aplicativo é projetado para funcionar bem em dispositivos móveis e desktops.

## Pré-requisitos

- **Node.js**: Certifique-se de que o Node.js está instalado em sua máquina. Você pode verificar isso rodando:

  ```bash
  node -v
  ```

- **npm** ou **yarn**: Gerenciadores de pacotes necessários para instalar as dependências do projeto.

## Instalação

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/expense-tracker.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd expense-tracker
    ```

3. Instale as dependências necessárias:

    Se estiver usando **npm**:

    ```bash
    npm install
    ```

    Ou se preferir **yarn**:

    ```bash
    yarn install
    ```

4. Após a instalação das dependências, inicie o servidor de desenvolvimento:

    Se estiver usando **npm**:

    ```bash
    npm start
    ```

    Ou se estiver usando **yarn**:

    ```bash
    yarn start
    ```

   O aplicativo estará disponível em `http://localhost:3000` por padrão.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do diretório:

```
expense-tracker/
├── node_modules/           # Dependências do projeto
├── public/                 # Arquivos estáticos
│   ├── index.html          # Arquivo HTML principal
├── src/                    # Código-fonte do aplicativo
│   ├── components/         # Componentes React
│   ├── App.js              # Componente principal
│   ├── index.js            # Ponto de entrada
├── .gitignore              # Arquivos para serem ignorados pelo Git
├── package.json            # Arquivo de configuração do projeto
├── README.md               # Este arquivo
└── yarn.lock / package-lock.json # Dependências fixas
```

## Comandos Importantes

- **Iniciar o servidor de desenvolvimento**:

    ```bash
    npm start
    ```

    Isso irá iniciar o aplicativo no modo de desenvolvimento e você poderá acessá-lo em `http://localhost:3000`.

- **Compilar o projeto para produção**:

    ```bash
    npm run build
    ```

    Isso criará uma versão otimizada do aplicativo para produção na pasta `build`.

- **Ejetar o aplicativo** (se necessário):

    ```bash
    npm run eject
    ```

    Esse comando permite que você faça modificações avançadas na configuração do projeto, mas não pode ser desfeito.

## Contribuindo

Se você deseja contribuir para o projeto, sinta-se à vontade para abrir um **pull request** ou enviar uma **issue** com melhorias ou correções.

### Passos para Contribuir

1. Faça um fork do repositório.
2. Crie uma nova branch para suas mudanças (`git checkout -b feature/nome-da-feature`).
3. Faça suas mudanças e adicione testes, se necessário.
4. Envie um pull request detalhando suas mudanças.

---

Agradecemos por usar nosso rastreador de despesas! Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato.