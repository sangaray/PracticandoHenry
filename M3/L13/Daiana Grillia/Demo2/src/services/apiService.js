import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const apiService = axios.create({
  baseURL: API_URL,
});

export const getUsers = async () => {
  try {
    const response = await apiService.get("/users");
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

export const getUserById = async (id) => {};

export const createUser = async (user) => {};
