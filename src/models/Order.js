export const OrderStatus = {
  PROCESSING: "PROCESSING",
  IN_DELIVERY: "IN_DELIVERY",
  COMPLETED: "COMPLETED",
};

export function createOrder(
  orderId,
  items,
  status = OrderStatus.PROCESSING,
  timestamp = new Date() . // which timezone? which timestamp is relevant?
) {
  return { orderId, items, status, timestamp };
}
