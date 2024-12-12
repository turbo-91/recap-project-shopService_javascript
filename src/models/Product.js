class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }

  get productId() {
    return this.productId;
  }

  get productName() {
    return this.name;
  }

  get productPrice() {
    return this.productPrice;
  }

  set productId(value) {
    this.productId = value;
  }

  set productName(value) {
    this.name = value;
  }

  set productPrice(value) {
    this.productPrice = value;
  }

  // no built-in hashCode method like in Java in Javascript
}
