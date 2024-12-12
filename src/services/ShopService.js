import { createOrder } from "../models/Order.js";

export function createShopService(productRepo, orderRepo) {
  return {
    placeOrder(orderId, productQuantities) {
      const items = productQuantities.map(({ productId, quantity }) => {
        const product = productRepo.getProductById(productId);
        if (!product) throw new Error(`Product ${productId} not found`);
        return { product, quantity };
      });

      const order = createOrder(orderId, items);
      orderRepo.addOrder(order);
      return order;
    },

    updateOrderStatus(orderId, newStatus) {
      const order = orderRepo.getOrderById(orderId);
      if (!order) throw new Error(`Order ${orderId} not found`);
      order.status = newStatus;
    },

    getOrdersByStatus(status) {
      return orderRepo
        .getAllOrders()
        .filter((order) => order.status === status);
    },
  };
}
