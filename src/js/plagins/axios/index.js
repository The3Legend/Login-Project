import axios from "axios";
import { application, json } from "express";
import API_ENW from "../../config/api.config";

const instance = axios.create({
  baseURL: API_ENW.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
