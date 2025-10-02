[![inova-RH-azivs.png](https://i.postimg.cc/NG7qN9Y5/inova-RH-azivs.png)](https://postimg.cc/s1XNx2Mr)
# InovaRH – Sistema de Cadastro de Recursos Humanos

## 📌 Sobre o Projeto
O **InovaRH** é um sistema de cadastro de Recursos Humanos desenvolvido para **facilitar a gestão de talentos e processos internos das empresas**.  
O projeto combina **tecnologia e humanização** para criar processos ágeis, eficientes e personalizados, ajudando organizações a construírem equipes de alta performance.

## 🎯 Objetivo
Transformar a gestão de talentos por meio de:
- Recrutamento e seleção modernos
- Consultoria em clima organizacional
- Treinamento e desenvolvimento
- Programas de engajamento que impulsionam resultados

## ⚙️ Funcionalidades Principais (CRUD)
- **Listar tudo**: visualização completa de todos os colaboradores  
- **Listar por ID**: consulta filtrada por identificador único  
- **Listar por cargo**: busca de colaboradores de acordo com o cargo  
- **Criar**: inclusão de novos registros de colaboradores  
- **Atualizar**: alteração de informações existentes  
- **Deletar**: exclusão de registros por ID  

## 🛠️ Tecnologias Utilizadas
- **Banco de Dados**: MySQL com TypeORM  
- **Backend**: Node.js + NestJS (TypeScript)  
- **Arquitetura**: API REST com suporte a operações CRUD
  
## 👨‍💻 Contribuidores
- [Akanni Silva](https://github.com/Akanni-codes)  
- [Dandara Nascimento](https://github.com/dan-olivnas)  
- [Gabriel Messias](https://github.com/gabrielmessias-dev)  
- [Gabriella Parra](https://github.com/gabiparra05)  
- [Janielle Oliveira](https://github.com/JanielleOliveira)  
- [Laish Rodrigues](https://github.com/L4ish)  
- [Pedro Emanuel](https://github.com/pe3dru)  
- [Vitor Hugo](https://github.com/DisturbedMoss)  

## 🚀 Como Rodar o Projeto
1. Clonar o repositório:
   ```bash
   git clone https://github.com/seu-usuario/inova-rh.git
2. Instalar as dependências:
   ```bash
   npm install
3. Iniciar o servidor:
   ```bash
   npm run start:dev
## 📂 Estrutura de Pastas (simplificadas)
```cpp
src/
 ├── colaboradores/
 │   ├── colaboradores.controller.ts
 │   ├── colaboradores.service.ts
 │   └── colaboradores.module.ts
 ├── app.module.ts
 └── main.ts


