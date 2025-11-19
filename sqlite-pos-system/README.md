# 🛒 POS System (Point of Sale) with SQLite

A robust backend simulation for a Point of Sale system, built with **TypeScript** and **SQLite**. This project demonstrates the implementation of **Layered Architecture**, strictly separating data persistence, business rules, and application control.

## 🏗️ Architectural Design

This project moves away from monolithic scripts to a professional **Separation of Concerns (SoC)** pattern:

| Layer | Responsibility |
| :--- | :--- |
| **📂 Models** | Definitions of Data Structures and Interfaces (`User`, `Product`, `Sale`). |
| **⚙️ Controllers** | Handles incoming requests and orchestrates the flow between Services and Repositories. |
| **🧠 Services** | **Pure Business Logic.** Calculates discounts, interest rates, and validates rules. |
| **💾 Repositories** | **Data Access Layer (DAL).** Raw SQL queries to interact with the SQLite database. |

```mermaid
graph LR
A[Controller] -- Request --> B[Service]
B -- Logic Applied --> C[Repository]
C -- SQL Query --> D[(SQLite DB)]

Payment Method,Condition,Rule Applied
PIX,Instant Payment,5% Discount on the total sale value.
Debit Card,Instant Payment,"No discount, no interest (Standard value)."
Credit Card,Financing,2% Interest added to total. Allows up to 5x installments.

src/
├── controllers/   # SaleController.ts
├── services/      # SaleService.ts (The brain of the operation)
├── repositories/  # SaleRepository.ts (SQL execution)
├── models/        # Interfaces/Types
├── database/      # DB Connection & Init
└── index.ts       # Entry point