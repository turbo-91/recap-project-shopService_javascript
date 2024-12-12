function createOrderRepo() {
  const orders = new Map();

  return {
    addOrder(order) {
      if (orders.has(order.orderId)) {
        throw new Error(`Order with ID ${order.orderId} already exists.`);
      }
      orders.set(order.orderId, order);
    },
    removeOrder(orderId) {
      if (!orders.delete(orderId)) {
        throw new Error(`Order with ID ${orderId} does not exist.`);
      }
    },
    getOrderById(orderId) {
      return orders.get(orderId) || null;
    },
    getAllOrders() {
      return Array.from(orders.values());
    },
  };
}

module.exports = { createOrderRepo };
