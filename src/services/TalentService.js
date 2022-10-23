import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/vuxe/genshin-impact-cheatsheet",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getTodayTalent() {
    const today = new Date();
    var day = today.getDay();
    day = today.getHours() < 4 ? day - 1 : day; // 4AM reset
    day = day > 3 ? day - 3 : day;
    return apiClient.get("/talents/" + day);
  },
  getTomorowTalent() {
    const today = new Date();
    var day = today.getDay() + 1;
    day = today.getHours() < 4 ? day - 1 : day; // 4AM reset
    day = day > 6 ? 0 : day;
    day = day > 3 ? day - 3 : day;
    return apiClient.get("/talents/" + day);
  },
};
