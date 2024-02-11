function validateCreditCard(cardNumber) {
    // Remove any non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is empty or not a number
    if (cardNumber === '' || isNaN(cardNumber)) {
        return false;
    }

    // Check if the card number length is valid for Visa or Mastercard
    if (cardNumber.length !== 16) {
        return false;
    }

    // Check if the card number starts with the right digits for Visa or Mastercard
    if (cardNumber.startsWith('4')) {
        return 'Visa';
    } else if (cardNumber.startsWith('5')) {
        return 'Mastercard';
    } else {
        return false;
    }
}

// Example usage:
const cardNumber = '1234 5678 9012 3456'; // Example card number
const cardType = validateCreditCard(cardNumber);
if (cardType) {
    console.log(`Valid ${cardType} card number`);
} else {
    console.log('Invalid card number');
}
