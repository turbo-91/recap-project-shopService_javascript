function createProductRepo() {
  const products = new Map(); // this map is private because it is encapsulated in the clorse

  return {
    addProduct(product) {
      if (products.has(product.productId)) {
        throw new Error(`Product with ID ${product.productId} already exists.`);
      }
      products.set(product.productId, product);
    },
    removeProduct(productId) {
      if (!products.delete(productId)) {
        throw new Error(`Product with ID ${productId} does not exist.`);
      }
    },
    getProductById(productId) {
      return products.get(productId) || null;
    },
    getAllProducts() {
      return Array.from(products.values());
    },
  };
}

module.exports = { createProductRepo };
