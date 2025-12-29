function createShoppingCart() {
  let items = [];
  let discount = 0;

  return {
    addItem(product) {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        items.push({ ...product });
      }
    },

    getItems() {
      return items;
    },

    updateQuantity(id, newQuantity) {
      const itemToUpdate = items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
      }
    },

    removeItem(id) {
      items = items.filter(item => item.id !== id);
    },

    getTotal() {
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return total - (total * discount / 100);
    },

    getItemCount() {
      return items.reduce((sum, item) => sum + item.quantity, 0);
    },

    isEmpty() {
      return items.length === 0;
    },

    applyDiscount(code, percent) {
      discount = percent;
    },

    clear() {
      items = [];
      discount = 0;
    }
  };
}

// ------------Given code -------------
const cart = createShoppingCart();

cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // increase quantity

console.log(cart.getItems());

cart.updateQuantity(1, 3);  
cart.removeItem(2);         

console.log(cart.getTotal());        
console.log(cart.getItemCount());    
console.log(cart.isEmpty());         

cart.applyDiscount('SAVE10', 10);    
console.log(cart.getTotal());        

cart.clear();
console.log(cart.isEmpty());         