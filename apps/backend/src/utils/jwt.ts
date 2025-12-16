import jwt from "jsonwebtoken";
import { assertEnv } from "../config/env";
const {
  JWT_ACCESS_TOKEN_SECRET,
  JWT_REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXP = "15m",
  REFRESH_TOKEN_EXP = "30d",
} = process.env;

assertEnv("JWT_ACCESS_TOKEN_SECRET", JWT_ACCESS_TOKEN_SECRET);
assertEnv("JWT_REFRESH_TOKEN_SECRET", JWT_REFRESH_TOKEN_SECRET);

export function signAccessToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET!, {
    expiresIn: process.env.ACCESS_TOKEN_EXP ?? "15m",
  });
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_SECRET!, {
    expiresIn: process.env.REFRESH_TOKEN_EXP ?? "30d",
  });
}
