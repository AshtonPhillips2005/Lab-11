class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

const product1 = new ProductProperties('Banana', 2.5, 50);
console.log(product1.toString());
console.log('Total Value:', product1.getTotalValue());

class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

const perishable1 = new PerishableProductProperties('Milk', 1.5, 10, '2024-12-31');
const perishable2 = new PerishableProductProperties('Eggs', 2.0, 6, '2024-11-30');
console.log(perishable1.toString());
console.log(perishable2.toString());


