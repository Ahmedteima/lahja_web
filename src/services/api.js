import axios from "axios";

// In production (Vercel) set VITE_API_URL to the public HTTPS URL of your
// backend tunnel. Falls back to the local backend for development.
// Trailing slashes are stripped so `${API_BASE_URL}/download/..` stays clean.
const RAW = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
export const API_BASE_URL = RAW.replace(/\/+$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  // ngrok's free tier serves an HTML interstitial for browser requests; any
  // custom header makes it skip that and return the real JSON/file response.
  headers: { "ngrok-skip-browser-warning": "true" },
});

export default api;
