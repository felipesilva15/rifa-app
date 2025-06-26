# Gerenciador de rifa

<div align="center">
    <img alt="Logo" width="350px" src="https://i.imgur.com/HzsQOZm.jpeg" />

![Status](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=RED&style=for-the-badge)

![Top language](https://img.shields.io/github/languages/top/felipesilva15/rifa-app.svg)
![Language count](https://img.shields.io/github/languages/count/felipesilva15/rifa-app.svg)
![Repository size](https://img.shields.io/github/repo-size/felipesilva15/rifa-app.svg)
[![Last commit](https://img.shields.io/github/last-commit/felipesilva15/rifa-app.svg)](https://github.com/felipesilva15/rifa-app/commits/main)
[![Issues](https://img.shields.io/github/issues/felipesilva15/rifa-app.svg)](https://github.com/felipesilva15/rifa-app/issues)
[![Licence](https://img.shields.io/github/license/felipesilva15/rifa-app.svg)](https://github.com/felipesilva15/rifa-app/blob/main/LICENSE)

</div>

Este é um ERP para gerencias dados de rifas, como parcitipantes e os bilhetes adquiridos por eles. Além disso, é disponibilizado alguns relatórios para acompanhamento das vendas.

Esta aplicação foi desenvolvida com Angular. Veja detalhadamente nos tópicos logo abaixo.

## 📑 Sumário

- [Descrição geral](#-descrição-geral)
- [Principais funcionalidades](#-principais-funcionalidades)
- [Screenshots](#-screenshots)
- [Tecnologias utilizadas](#%EF%B8%8F-tecnologias-utilizadas)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Executando localmente](#-executando-localmente)
- [Executando com Docker](#-executando-com-docker)
- [Testes](#-testes)
- [Autores](#%EF%B8%8F-autores)
- [Licença](#-licença)

## 📘 Descrição Geral

- **Versão:** 1.0.0  
- **Autor:** [Felipe Silva](mailto:felipe.allware@gmail.com)  
- **Licença:** [Licença](https://github.com/felipesilva15/rifa-app/blob/main/LICENSE)
- **Deploy:** [Site](https://rifa-app.felipesilva15.com.br)
- **GitHub Backend** [API](https://github.com/felipesilva15/rifa-api)

## ⚙ Principais funcionalidades

- Autenticação via API e proteção de rotas
- Exportação de dados de consultas para arquivo CSV
- Dashboards com gráficos e relatórios
- Cadastros básicos (Rifas, participantes e bilhetes)
- Consultas com ordenação, paginação e filtro de dados

## 📷 Screenshots

Abaixo são apenas algumas capturas de tela da aplicação.

![Login](https://i.imgur.com/dsUVRu5.jpeg)
*Login*

![Dashboard - Principal](https://i.imgur.com/QaP9y0Z.jpeg)
*Dashboard - Principal*

![Listagem - Bilhetes](https://i.imgur.com/MgbmqmF.jpeg)
*Listagem - Bilhetes*

![Formulário - Bilhetes](https://i.imgur.com/TkWYO3S.jpeg)
*Formulário - Bilhetes*

![Bilhetes - Participante](https://i.imgur.com/g0gKqs8.jpeg)
*Bilhetes - Participante*

## 🛠️ Tecnologias utilizadas

- **Angular 17**
- **PrimeNG 17**
- **PrimeFlex**
- **Docker**
- **GitHub Actions (CI/CD)**

## 📁 Estrutura de pastas

Veja abaixo uma breve explicação da estrutura de pastas utilizadas neste projeto.

```text
.
└── src/
    ├── app/
    │   ├── layout/                 # Layout base (topbar, sidebar, menu, footer)
    │   ├── main/
    │   │   ├── api/                # Interfaces e models da aplicação
    │   │   ├── components/         # Componentes reutilizáveis, subrotas e views modulares
    │   │   ├── service/            # Serviços de API (HTTP)
    │   │   ├── guard/              # Proteção de rotas
    │   │   ├── interceptor/        # Interceptador de requisições HTTP
    │   │   ├── pipes/              # Pipes de formatação
    │   ├── app.component.ts        # Componente raiz
    │   ├── app.module.ts           # Módulo principal
    │   └── app-routing.module.ts   # Rotas principais
    ├── assets/
    │   ├── layout/
    │   │   ├── images/             # Imagens estáticas (temas, logos, mockups)
    │   │   ├── styles/             # Estilos globais e variáveis SCSS
    │   │   └── translations/       # Arquivos de tradução i18n
    │   └── main/
    │       └── images/             # Imagens estáticas (temas, logos, mockups)
    ├── environments/               # Configurações de ambiente
    │   ├── environment.ts
    │   ├── environment.development.ts
    │   └── environment.production.ts
    ├── index.html
    ├── main.ts
    ├── styles.scss
    └── test.ts
```

## 🚀 Executando localmente

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- Angular CLI
- npm

### 🔧 Instalação

1. Clone o projeto utilizando o comando abaixo

    ``` bash
    git clone https://github.com/felipesilva15/rifa-app.git
    ```

2. Acesse a pasta dos fonts deste projeto

    ```bash
    cd rifa-app
    ```

3. Instale as dependências do projeto

    ```bash
    npm install
    ```

4. Inicie a aplicação

    ```bash
    ng serve --open
    ```

5. Acesse a aplicação em <http://localhost:4200>.

## 🐳 Executando com Docker

```bash
# Build da imagem
docker build -t felipesilva15/rifa-app:latest .

# Execução do container
docker run -d -p 8081:80 felipesilva15/rifa-app
```

Após completar a execução, basta acessar a aplicação em <http://localhost:8081>.

## 🧪 Testes

Para realizar os testes automatizados, execute o comando de testes do Angular (Karma + Jasmine).

```bash
npm run test:coverage
```

## ✒️ Autores

- **Felipe Silva** - *Desenvolvedor e mentor* - [felipesilva15](https://github.com/felipesilva15)

## 📄 Licença

Este projeto está sob a licença (MIT) - veja o arquivo [LICENSE](https://github.com/felipesilva15/rifa-app/blob/main/LICENSE) para detalhes.

---

Documentado por [Felipe Silva](https://github.com/felipesilva15) 😊
