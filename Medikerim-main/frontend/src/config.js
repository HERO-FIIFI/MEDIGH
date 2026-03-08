export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";
export const CHAT_URL = import.meta.env.VITE_CHAT_URL || "http://localhost:8000";
export const token = localStorage.getItem("token");