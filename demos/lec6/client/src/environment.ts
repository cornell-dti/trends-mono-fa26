export const API_KEY = import.meta.env.VITE_SUPER_SECRET_KEY;

if (!API_KEY) {
  throw new Error("api key is not defined");
}
