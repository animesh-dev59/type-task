interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cart: Product[] = [
  { id: 1, name: "Laptop", price: 1000, quantity: 2 },
  { id: 2, name: "Mouse", price: 50, quantity: 4 },
  { id: 3, name: "Keyboard", price: 150, quantity: 2 },
  { id: 4, name: "Monitor", price: 500, quantity: 5 }
];

function calculateSubtotal(cartItems: Product[]): number {
  return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
}

function calculateDiscount(subtotal: number, discountPercentage: number = 0): number {
  return (subtotal * discountPercentage) / 100;
}

function calculateGrandTotal(subtotal: number, discountPercentage: number = 0): number {
  const discountAmount = calculateDiscount(subtotal, discountPercentage);
  return subtotal - discountAmount;
}

const discountPercentage = 10;
const subtotal = calculateSubtotal(cart);
const discountAmount = calculateDiscount(subtotal, discountPercentage);
const grandTotal = calculateGrandTotal(subtotal, discountPercentage);

console.log(`Cart Subtotal: ${subtotal} | Discount: ${discountPercentage}% | Discount Amount: ${discountAmount} | Grand Total: ${grandTotal}`); 