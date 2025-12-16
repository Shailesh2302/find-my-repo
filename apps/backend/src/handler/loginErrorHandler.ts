import { Request, Response } from "express";

export function handleFailedLogin(req: Request, res: Response) {
  res.json({
    error:
      "Couldn't login with github because of invalid login attempt. Please try again!",
  });

  return res.redirect("/login");
}
