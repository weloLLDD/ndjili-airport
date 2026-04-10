import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getFlights = () => API.get("/flights");
export const addFlight = (data) => API.post("/flights", data);