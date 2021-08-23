const MAX_ORDER_NAME_LENGTH = 32;
const MIN_ORDER_NAME_LENGTH = 8;

export function makeRandomOrderId() {
  const stringBank = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'WTC-';
  const idLength =
    Math.floor(Math.random() * (MAX_ORDER_NAME_LENGTH - MIN_ORDER_NAME_LENGTH)) +
    MIN_ORDER_NAME_LENGTH;

  for (let i = 0; i < idLength; i += 1) {
    result += stringBank.charAt(Math.floor(Math.random() * stringBank.length));
  }

  return result;
}
