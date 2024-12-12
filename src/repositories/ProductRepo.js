function createProductRepo() {
  const products = []; // private array because of closure!! not accessible from outside

  return {
    addProduct(product) {
      products.push(product);
    },
    removeProduct(productId) {
      const index = products.findIndex(
        (product) => product.productId === productId
      );
      if (index > -1) products.splice(index, 1);
    },
    getProductById(productId) {
      return (
        products.find((product) => product.productId === productId) || null
      );
    },
    getAllProducts() {
      return [...products];
    },
  };
}
