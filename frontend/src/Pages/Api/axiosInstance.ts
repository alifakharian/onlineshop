// http://localhost:8000/admin/login/?next=/admin/
// http://localhost:8000//api/schema/swagger-ui/
// baseURL: `${baseurl}`,
// const baseurl = "http://localhost:8000";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // همه درخواست‌ها به /api هدایت می‌شوند
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
