const { createProductRepo } = require("./repos/productRepo");
const { createOrderRepo } = require("./repos/orderRepo");
const { createShopService } = require("./services/ShopService");
const { createProduct } = require("./models/Product");
const { createOrder, OrderStatus } = require("./models/Order");

// Initialize Repositories
const productRepo = createProductRepo();
const orderRepo = createOrderRepo();

// Initialize Shop Service
const shopService = createShopService(productRepo, orderRepo);

// Add Cheese Products to Product Repository
const brie = createProduct("c1", "Brie", 8.5);
const gouda = createProduct("c2", "Gouda", 6.0);
const cheddar = createProduct("c3", "Cheddar", 7.0);
const blueCheese = createProduct("c4", "Blue Cheese", 9.5);

productRepo.addProduct(brie);
productRepo.addProduct(gouda);
productRepo.addProduct(cheddar);
productRepo.addProduct(blueCheese);

// Log Available Products
console.log("Available Products:");
console.log(productRepo.getAllProducts());

// Place Orders
try {
  shopService.placeOrder("o1", [
    { productId: "c1", quantity: 2 }, // 2 Bries
    { productId: "c3", quantity: 1 }, // 1 Cheddar
  ]);

  shopService.placeOrder("o2", [
    { productId: "c2", quantity: 3 }, // 3 Goudas
    { productId: "c4", quantity: 1 }, // 1 Blue Cheese
  ]);

  shopService.placeOrder("o3", [
    { productId: "c1", quantity: 1 }, // 1 Brie
    { productId: "c2", quantity: 2 }, // 2 Goudas
    { productId: "c4", quantity: 1 }, // 1 Blue Cheese
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
  shopService.updateOrderStatus("o1", OrderStatus.IN_DELIVERY);
  shopService.updateOrderStatus("o2", OrderStatus.COMPLETED);
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
