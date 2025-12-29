// import "dotenv/config";
import { Request, Response } from "express";
import { userInfo } from "./userService";

export async function getUser(req: Request, res: Response) {
  const user = req.user;
  try {
    if (!user) {
      throw new Error("User not found");
    }

   const userData = userInfo(user);

    return res.status(200).json(userData);
  } catch (error: any) {
    throw new Error("Internal server error", error);
  }
}
