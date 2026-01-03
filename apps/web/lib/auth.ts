// src/lib/auth.ts
import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function refreshAccessToken(): Promise<boolean> {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );

    localStorage.setItem("access_token", res.data.accessToken);
    return true;
  } catch {
    localStorage.removeItem("access_token");
    return false;
  }
}
