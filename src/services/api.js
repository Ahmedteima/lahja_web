import axios from "axios";

// In production (Vercel) set VITE_API_URL to the public HTTPS URL of your
// backend tunnel, e.g. https://your-tunnel.trycloudflare.com
// Falls back to the local backend for development.
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
