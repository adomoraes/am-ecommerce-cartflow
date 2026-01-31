# Black-Next.js

## 💻 Sobre o Projeto

Este é um projeto de e-commerce desenvolvido com Next.js, focado em demonstrar a criação de uma loja virtual com funcionalidades essenciais como listagem de produtos, detalhes de produtos e carrinho de compras. O projeto utiliza um arquivo `database.json` local para simular um banco de dados de produtos.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)**: Framework React para renderização no servidor e geração de sites estáticos.
- **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática.
- **[Bootstrap](https://getbootstrap.com/)** e **[Reactstrap](https://reactstrap.github.io/)**: Para estilização rápida e componentes de UI responsivos.

---

## 📂 Arquitetura e Estrutura de Pastas

O projeto segue a estrutura padrão de um aplicativo Next.js, com a lógica principal contida na pasta `src/`:

```
/
├── public/            # Arquivos estáticos (imagens, ícones)
├── src/
│   ├── components/    # Componentes React reutilizáveis (Header, ProductCard, etc.)
│   ├── hooks/         # Hooks customizados (ex: useCart para gerenciar o carrinho)
│   ├── pages/         # Rotas da aplicação
│   │   ├── api/       # Rotas de API do Next.js (ex: para buscar produtos)
│   │   └── products/  # Páginas dinâmicas de produtos
│   ├── services/      # Camada de serviço para comunicação com a API
│   └── styles/        # Estilos globais e CSS modules
├── database.json      # Arquivo JSON utilizado como banco de dados local
└── package.json       # Dependências e scripts do projeto
```

- **`src/components`**: Contém componentes React que são utilizados em várias partes da aplicação, como o cabeçalho, cards de produto e a tabela do carrinho.
- **`src/hooks`**: Armazena hooks customizados para encapsular e reutilizar lógica com estado, como o `useCart` que gerencia o estado do carrinho de compras.
- **`src/pages`**: Define as rotas da aplicação. Inclui as páginas principais (`index`, `cart`), páginas dinâmicas (`products/[id]`) e as rotas de API (`api/products`) que servem os dados do `database.json`.
- **`src/services`**: Centraliza a lógica de acesso a dados, fazendo a ponte entre os componentes e as APIs.

---

## ⚙️ Instalação e Execução Local

Siga os passos abaixo para executar o projeto em seu ambiente local.

**Pré-requisitos:**
*   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
*   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/blacknextjs.git
    cd blacknextjs
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra seu navegador e acesse `http://localhost:3000` para ver a aplicação em funcionamento.