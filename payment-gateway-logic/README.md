### 2. Para a pasta `payment-gateway-logic` (Sistema de Pagamentos)

```markdown
# 💳 E-commerce Payment Processor

A financial logic engine built with **TypeScript** to handle complex checkout scenarios, including discount calculations, interest rates, and penalty fees based on payment methods.

## 🚀 Project Overview

This system models a shopping cart checkout process. It encapsulates complex business rules regarding different payment methods (PIX, Credit Card, Debit, Boleto), handling edge cases like overdue payments and installment calculations.

### 📊 Business Rules Implemented

| Payment Method | Condition | Logic Applied |
| :--- | :--- | :--- |
| **PIX** | Instant | **5% Discount** on total value. |
| **Debit Card** | Instant | Original value (No fees). |
| **Credit Card** | Installments | Up to **5x interest-free**. Displays per-installment value. |
| **Boleto** | On Time | Original value. |
| **Boleto** | Overdue | **2% fine** + **0.1% interest per day** of delay. |

## 💻 Code Structure

- **Enums:** Used to strictly define Payment Methods and Transaction Status.
- **Interfaces:** Defines the shape of `Product`, `Purchase`, and `Boleto` objects.
- **Date Calculation:** Logic to determine days overdue for penalty calculation.

## 🛠️ Technologies

- **Language:** TypeScript
- **Focus:** Financial Logic, Date Manipulation, Object-Oriented Design.

## 📦 How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install