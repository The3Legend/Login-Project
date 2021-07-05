import axios from "axios";
import API_ENW from "../config/api.config";

export async function login(email, pasword) {
  try {
    const respons = await axios.post(
      `${API_ENW.apiUrl}/auth/login`,
      JSON.stringify({ email, pasword }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(respons);
    return respons.data;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
