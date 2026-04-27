import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Card Number Validation API',
      version: '1.0.0',
      description: 'API to validate credit card numbers using the standard Luhn algorithm.',
    },
  },
  // Paths to files containing OpenAPI definitions (looks in src for dev, dist for prod)
  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './dist/routes/*.js', './dist/controllers/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
