// Request to http://localhost:3000/monitorings here
import axios from "axios";

export const getAll = async () => {
  try {
    const response = await axios.get("http://vps-080a4b06.vps.ovh.net/api/veilles");
    return response.data;
  } catch (error) {
    return error;
  }
};
