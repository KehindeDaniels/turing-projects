const cart = [];

const getCart = () => cart;

const addToCart = (id) => {
  const product = getProducts().find((product) => product.id === id);
  if (product) {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, quantity: 1 });
    }
  }
};

const updateCart = (id, quantity) => {
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity = quantity;
    if (quantity === 0) {
      cart.splice(cart.indexOf(existingItem), 1);
    }
  }
};

export { getCart, addToCart, updateCart };
