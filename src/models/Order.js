import { generateId } from "../utils/IdService.js";

export const OrderStatus = {
  PROCESSING: "PROCESSING",
  IN_DELIVERY: "IN_DELIVERY",
  COMPLETED: "COMPLETED",
};

export function createOrder(
  orderId = generateId(),
  items,
  status = OrderStatus.PROCESSING,
  timestamp = new Date()
) {
  return { orderId, items, status, timestamp };
}
