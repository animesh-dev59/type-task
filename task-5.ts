type StockStatus = "Available" | "Low Stock" | "Out of Stock";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface StockDictionary {
  [productName: string]: number;
}

const inventory: Product[] = [
  { id: 1, name: "Laptop", price: 1000, stock: 10 },
  { id: 2, name: "Mouse", price: 50, stock: 3 },
  { id: 3, name: "Keyboard", price: 150, stock: 0 },
  { id: 4, name: "Monitor", price: 400, stock: 7 },
  { id: 5, name: "Headphones", price: 80, stock: 4 }
];

function getStockStatus(stock: number): StockStatus {
  if (stock === 0) {
    return "Out of Stock";
  } else if (stock >= 1 && stock <= 5) {
    return "Low Stock";
  } else {
    return "Available";
  }
}

function getLowStockProducts(products: Product[]): Product[] {
  return products.filter((product) => product.stock >= 1 && product.stock <= 5);
}

const stockDictionary: StockDictionary = {};
inventory.forEach((product) => {
  stockDictionary[product.name] = product.stock;
});

const laptopStatus = `Laptop - ${getStockStatus(inventory[0].stock)}`;
const mouseStatus = `Mouse - ${getStockStatus(inventory[1].stock)}`;
const keyboardStatus = `Keyboard - ${getStockStatus(inventory[2].stock)}`;

const lowStockProducts = getLowStockProducts(inventory);
const lowStockNames = lowStockProducts.map((p) => p.name).join(", ");

console.log(`${laptopStatus} | ${mouseStatus} | ${keyboardStatus} | Low Stock Products: ${lowStockNames}`);