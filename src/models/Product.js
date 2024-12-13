import { generateId } from "../utils/IdService.js";

export function createProduct(productId = generateId(), name, price) {
  return { productId, name, price };
}
