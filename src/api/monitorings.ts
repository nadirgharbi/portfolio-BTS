// Request to http://localhost:3000/monitorings here
import axios from "axios";

export const getAll = async () => {
  try {
    const response = await axios.get("https://apiv1.nadir-gharbi.fr/api/veilles");
    return response.data;
  } catch (error) {
    return error;
  }
};
