import axios from "axios";

const connection = axios.create({
  baseURL: "http://riyas.circle-up.online/api/user",
});

export default connection;
