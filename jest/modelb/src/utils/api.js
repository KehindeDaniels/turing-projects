// src/utils/api.js
const products = [
  { id: 1, name: "Book 1", price: 10.99 },
  { id: 2, name: "Book 2", price: 12.99 },
  { id: 3, name: "Church Robe", price: 20.99 },
];

const api = {
  getProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  },
  addProduct: (product) => {
    products.push(product);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    });
  },
  updateProduct: (id, product) => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products[index] = product;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(product);
      }, 1000);
    });
  },
  deleteProduct: (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(id);
      }, 1000);
    });
  },
};

export default api;
