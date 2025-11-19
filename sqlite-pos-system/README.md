# 🛒 Sistema PDV (Ponto de Venda) com SQLite

Uma simulação robusta de backend para um sistema de Ponto de Venda, construída com **TypeScript** e **SQLite**. Este projeto demonstra a implementação de **Arquitetura em Camadas**, separando estritamente a persistência de dados, regras de negócio e controle da aplicação.

## 🏗️ Design Arquitetural

Este projeto se afasta de scripts monolíticos para um padrão profissional de **Separação de Preocupações (SoC)**:

src/
├── controllers/   # SaleController.ts
├── services/      # SaleService.ts (O cérebro da operação)
├── repositories/  # SaleRepository.ts (Execução SQL)
├── models/        # Interfaces/Tipos
├── database/      # Conexão e Inic. do DB
└── index.ts       # Ponto de entrada