import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/news/`;

// Create New News
const createNews = async (formData) => {
  const response = await axios.post(API_URL, formData);
  console.log(response);
  return response.data;
};

// Get all products
const getNews = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a News
const deleteNews = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response.data;
};
// Get a News
const getOneNews = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};
// Update News
const updateNews = async (id, formData) => {
  const response = await axios.patch(`${API_URL}${id}`, formData);
  return response.data;
};

const productService = {
  createNews,
  getNews,
  getOneNews,
  deleteNews,
  updateNews,
};

export default productService;
