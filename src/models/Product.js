import { generateId } from "../utils/IdService";

export function createProduct(productId = generateId(), name, price) {
  return { productId, name, price };
}
