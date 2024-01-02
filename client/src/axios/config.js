import axios from "axios";

const connection = axios.create({
  baseURL: "https://riyas.circle-up.online/api/user",
});

export default connection;
