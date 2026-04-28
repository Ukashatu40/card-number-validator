import express, { Application, Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import validateRoutes from "./routes/validate";
import { swaggerSpec } from "./swagger";

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Swagger UI Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Main validation routes
app.use("/api/card", validateRoutes);

// General 404 handler for unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
