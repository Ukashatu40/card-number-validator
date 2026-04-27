import { Request, Response } from 'express';
import { CardService } from '../services/cardService';

export class ValidateController {
  private cardService: CardService;

  constructor() {
    this.cardService = new CardService();
  }

  /**
   * @swagger
   * /api/validate:
   *   post:
   *     summary: Validates a card number using the Luhn algorithm
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               cardNumber:
   *                 type: string
   *                 description: The credit card number to validate (spaces and dashes allowed)
   *                 example: "1234567890123456"
   *     responses:
   *       200:
   *         description: Validation performed successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 valid:
   *                   type: boolean
   *                   example: false
   *       400:
   *         description: Bad request (missing or invalid type for cardNumber)
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   example: 'Bad Request: "cardNumber" is required and must be a string.'
   *       500:
   *         description: Internal Server Error
   */
  public handleValidation = (req: Request, res: Response): void => {
    try {
      const { cardNumber } = req.body;

      // 1. Missing or badly typed input
      if (cardNumber === undefined || typeof cardNumber !== 'string') {
        res.status(400).json({
          error: 'Bad Request: "cardNumber" is required and must be a string.',
        });
        return;
      }

      // 2. Perform business logic validation
      const isValid = this.cardService.isValidLuhn(cardNumber);

      // 3. Return correct response
      res.status(200).json({ valid: isValid });
    } catch (error) {
      // Catch-all for unexpected server errors
      console.error('Validation error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}
