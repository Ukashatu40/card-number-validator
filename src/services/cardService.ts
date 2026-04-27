export class CardService {
  /**
   * Validates a card number using the Luhn algorithm.
   *
   * @param cardNumber - The card number as a string (can contain spaces or dashes).
   * @returns boolean - True if the card number is valid, false otherwise.
   */
  public isValidLuhn(cardNumber: string): boolean {
    if (!cardNumber) {
      return false;
    }

    // Remove any spaces or dashes from the input
    const sanitizedCardNumber = cardNumber.replace(/[\s-]/g, '');

    // The sanitised number must only contain digits and be somewhat feasible in length
    // Technically Luhn applies to any length, but typical cards are 13 to 19 digits.
    // For general algorithm, we just ensure it's digits.
    if (!/^\d+$/.test(sanitizedCardNumber)) {
      return false;
    }

    let sum = 0;
    let shouldDouble = false;

    // Iterate backwards starting from the rightmost digit
    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitizedCardNumber.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    // Valid if sum is a multiple of 10
    return sum % 10 === 0;
  }
}
