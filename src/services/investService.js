import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/invest/`;

// Create New Product
const createInvest = async (formData) => {
  const response = await axios.post(API_URL, formData);
  console.log(response);
  return response.data;
};

// Get all products
const getInvests = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteInvest = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a Product
const getInvest = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update Product
const updateInvest = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const investService = {
  createInvest,
  getInvests,
  getInvest,
  deleteInvest,
  updateInvest,
};

export default investService;
