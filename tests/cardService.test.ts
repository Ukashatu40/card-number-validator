import { CardService } from '../src/services/cardService';

describe('CardService', () => {
  let cardService: CardService;

  beforeEach(() => {
    cardService = new CardService();
  });

  describe('isValidLuhn', () => {
    it('should return true for a valid card number without spaces', () => {
      // Visa test card pattern
      expect(cardService.isValidLuhn('4242424242424242')).toBe(true);
    });

    it('should return true for a valid card number with spaces', () => {
      expect(cardService.isValidLuhn('4242 4242 4242 4242')).toBe(true);
    });

    it('should return true for a valid card number with dashes', () => {
      expect(cardService.isValidLuhn('4242-4242-4242-4242')).toBe(true);
    });

    it('should return false for an invalid card number', () => {
      expect(cardService.isValidLuhn('4242424242424243')).toBe(false);
    });

    it('should return false for a string containing non-digit characters (other than spaces and dashes)', () => {
      expect(cardService.isValidLuhn('4242a42424242424')).toBe(false);
    });

    it('should return false for an empty string', () => {
      expect(cardService.isValidLuhn('')).toBe(false);
    });
  });
});
