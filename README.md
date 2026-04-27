# Card Number Validation API

This project contains a simple backend API built with **Express.js and TypeScript** that provides an endpoint to validate card numbers using the standard Luhn algorithm.

## Prerequisites
- **Node.js** (v16.0 or higher recommended)
- **npm**

## Setup Instructions

1. **Install Dependencies**
   Run the following command to download all project dependencies:
   ```bash
   npm install
   ```

2. **Running the Server Locally (Development mode)**
   ```bash
   npm run dev
   ```
   The server will start at `http://localhost:3000`.

3. **Building the Production Code**
   ```bash
   npm run build
   ```
   This will compile the TypeScript code and place it inside the `dist` directory. You can then run it with `npm start`.

4. **Running Tests**
   This project uses `Jest` for both unit and API integration testing.
   ```bash
   npm test
   ```

## Design Decisions

- **Express.js over NestJS**: Express was intentionally chosen for this simple task rather than heavy, opinionated frameworks like NestJS to eliminate irrelevant "magic" or boilerplate. This puts the spotlight directly on core engineering principles, routing and logic execution, ensuring absolute logical understanding and straightforward line-by-line maintainability.
- **Controller-Service Architecture**: The codebase is logically grouped to separate the HTTP transport layer (`validateController.ts`) from the core business logic (`cardService.ts`). The business logic deals exclusively with input parameters and return data (not HTTP requests), ensuring that it remains pure and fully testable in isolation.
- **Validation Standard**: The system employs the Luhn Check mathematically to validate numerical authenticity for all lengths in a resilient way without external packages dependency. It handles non-digits, blanks, and dashes gracefully.
- **Strict Types**: Configured `tsconfig.json` with `strict: true` (which guards against implicit `any` and unhandled `null`/`undefined` edge cases) conforming precisely to the assessment's rigid prerequisites.
- **Commit History**: The creation sequence of building the project structurally represents logical progression steps in standard Git workflow practices via grouped atomic, descriptive commits.

## API Specification

**Endpoint**
`POST /api/validate`

**Request Body**
```json
{
  "cardNumber": "1234567890123456"
}
```

**Responses**
- **200 OK**: Returning `{"valid": true}` if the card structurally checks out via Luhn algorithm, or `{"valid": false}` if it doesn't cross the Luhn formula.
- **400 Bad Request**: Returns `{"error": "message"}` dynamically if it's lacking entirely or sent non-string types.
