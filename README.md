# Ecofluid Institutional

Este documento apresenta uma visão estratégica e técnica simplificada do projeto Ecofluid, consolidando as informações do README principal.

---

## Business e Tech Canvas

| Parceiros Chave | Atividades Chave | Proposta de Valor | Relacionamento | Segmentos |
| :--- | :--- | :--- | :--- | :--- |
| **Vercel**: Hosting e Serverless. <br> **Resend**: API de envio de e-mail. <br> **React + Vite**: Framework e Build. | **Catálogo**: Exibição de produtos via dados locais. <br> **Conversão**: Captura de leads via formulário. | Site institucional otimizado com catálogo integrado e sistema de contato robusto via serverless. | **Interface**: Componentização modular em React. <br> **Feedback**: Notificações de sucesso e erro no formulário. | Clientes da Ecofluid interessados em visualizar o catálogo e solicitar orçamentos. |

| Recursos Chave | Canais | Custos e Requisitos |
| :--- | :--- | :--- |
| **Código**: React + TypeScript. <br> **Backend**: Vercel Serverless Functions (Node.js). <br> **Dados**: Catálogo local em TypeScript. | **Web**: Site responsivo e público. <br> **E-mail**: Notificações transacionais via API. | **Ambiente**: Node.js 18+. <br> **API**: Chaves de acesso do Resend. <br> **Deploy**: Integração contínua via Vercel. |

---

## Estrutura do Projeto

### Organização de Diretórios
* `src/components/`: Componentes da interface (Header, Hero, Products, Contact).
* `src/data/catalogo.ts`: Fonte de dados estática dos produtos.
* `src/contexts/`: Gerenciamento de estado global (ProductsContext).
* `api/contact.ts`: Lógica de backend para processamento de formulários.
* `public/`: Assets e imagens estáticas.

### Configuração de Variáveis de Ambiente
As seguintes chaves devem ser configuradas no ambiente de produção e desenvolvimento:
* `RESEND_API_KEY`: Chave de autenticação do provedor Resend.
* `CONTACT_TO_EMAIL`: Endereço de e-mail que receberá as mensagens.
* `CONTACT_FROM_EMAIL`: Endereço de e-mail verificado para envio.

---

## Guia de Operação

### Comandos de Desenvolvimento
* Instalação: `npm install`
* Execução local: `npm run dev`
* Build de produção: `npm run build`
* Preview local do build: `npm run preview`

### Fluxo de Deploy
1. Realizar o push para o repositório remoto (GitHub/GitLab).
2. Conectar o repositório à conta Vercel.
3. Inserir as variáveis de ambiente nas configurações do projeto.
4. Executar o redeploy para aplicar as configurações.

---

## Notas Técnicas e Solução de Problemas

* **Contexto de Produtos**: O componente `ProductsProvider` deve envolver obrigatoriamente a árvore de componentes no `main.tsx` ou `App.tsx`.
* **Segurança do Endpoint**: A função em `/api/contact` está restrita ao método POST. Requisições GET retornarão erro 405 (Method Not Allowed).
* **Entrega de E-mails**: Em caso de falha no recebimento, valide as permissões do remetente no dashboard do Resend e verifique os logs de função na Vercel.

---
*Projeto de caráter privado desenvolvido sob demanda.*