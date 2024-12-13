import { createProductRepo } from "./repositories/ProductRepo.js";
import { createOrderRepo } from "./repositories/OrderRepo.js";
import { createShopService } from "./services/ShopService.js";
import { createProduct } from "./models/Product.js";
import { createOrder, OrderStatus } from "./models/Order.js";
import { generateId } from "./utils/IdService.js";

// Initialize Repositories
const productRepo = createProductRepo();
const orderRepo = createOrderRepo();

// Initialize Shop Service
const shopService = createShopService(productRepo, orderRepo);

// Add Cheese Products to Product Repository
const brie = createProduct(undefined, "Brie", 8.5);
const gouda = createProduct(undefined, "Gouda", 6.0);
const cheddar = createProduct(undefined, "Cheddar", 7.0);
const blueCheese = createProduct(undefined, "Blue Cheese", 9.5);

productRepo.addProduct(brie);
productRepo.addProduct(gouda);
productRepo.addProduct(cheddar);
productRepo.addProduct(blueCheese);

// Log Available Products
console.log("Available Products:");
console.log(productRepo.getAllProducts());

// Place Orders
try {
  shopService.placeOrder(undefined, [
    { productId: brie.productId, quantity: 2 }, // 2 Bries
    { productId: cheddar.productId, quantity: 1 }, // 1 Cheddar
  ]);

  shopService.placeOrder(undefined, [
    { productId: gouda.productId, quantity: 3 }, // 3 Goudas
    { productId: blueCheese.productId, quantity: 1 }, // 1 Blue Cheese
  ]);

  shopService.placeOrder(undefined, [
    { productId: brie.productId, quantity: 1 }, // 1 Brie
    { productId: gouda.productId, quantity: 2 }, // 2 Goudas
    { productId: blueCheese.productId, quantity: 1 }, // 1 Blue Cheese
  ]);

  console.log("Orders placed successfully!");
} catch (error) {
  console.error("Error placing order:", error.message);
}

// Log All Orders
console.log("\nAll Orders:");
console.log(orderRepo.getAllOrders());

// Update an Order Status
try {
  const orders = orderRepo.getAllOrders(); // Get all orders
  shopService.updateOrderStatus(orders[0].orderId, OrderStatus.IN_DELIVERY);
  shopService.updateOrderStatus(orders[1].orderId, OrderStatus.COMPLETED);
  console.log("\nUpdated Order Statuses:");
  console.log(orderRepo.getAllOrders());
} catch (error) {
  console.error("Error updating order status:", error.message);
}

// Get Orders by Status
console.log("\nOrders In Delivery:");
console.log(shopService.getOrdersByStatus(OrderStatus.IN_DELIVERY));

console.log("\nCompleted Orders:");
console.log(shopService.getOrdersByStatus(OrderStatus.COMPLETED));
