import axios from "axios";

const PRODUCT_MANAGEMENT_API =
  "https://661d0de1e7b95ad7fa6bfc53.mockapi.io";

export const findProducts = async () => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/products`);
  } catch (e) {
    console.log("Find products API error: " + e);
  }
  return result;
};

export const findProduct = async (productId) => {
  let result = null;
  try {
    result = await axios.get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};

export const createProduct = async (product) => {
  let result = null;
  try {
    result = await axios.post(`${PRODUCT_MANAGEMENT_API}/products`, product);
  } catch (e) {
    console.log("Find product API error: " + e);
  }
  return result;
};

export const updateProduct = async (product) => {
  let result = null;
  try {
    result = await axios.put(
      `${PRODUCT_MANAGEMENT_API}/products/${product.id}`,
      product
    );
  } catch (e) {
    console.log("Update product API error: " + e);
  }
  return result;
};

export const deleteProduct = async (productId) => {
  let result = null;
  try {
    result = await axios.delete(
      `${PRODUCT_MANAGEMENT_API}/products/${productId}`
    );
  } catch (e) {
    console.log("Delete product API error: " + e);
  }
  return result;
};
