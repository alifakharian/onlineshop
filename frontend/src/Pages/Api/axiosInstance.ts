// http://localhost:8000/admin/login/?next=/admin/
// http://localhost:8000//api/schema/swagger-ui/

import axios from "axios";
const baseurl = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: `${baseurl}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
