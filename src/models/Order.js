const OrderStatus = {
  PROCESSING: "PROCESSING",
  IN_DELIVERY: "IN_DELIVERY",
  COMPLETED: "COMPLETED",
};

function createOrder(
  orderId,
  items,
  status = OrderStatus.PROCESSING,
  timestamp = new Date()
) {
  return { orderId, items, status, timestamp };
}

module.exports = { createOrder, OrderStatus };
