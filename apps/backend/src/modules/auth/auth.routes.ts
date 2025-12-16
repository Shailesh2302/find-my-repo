import { Router } from "express";
import {
  githubLogin,
  githubCallback,
  refresh,
  me,
  logout,
} from "./auth.controller";

const router: Router = Router();

router.get("/auth/github", githubLogin);
router.get("/auth/github/callback", githubCallback);
router.post("/auth/refresh", refresh);
router.get("/auth/me", me);
router.post("/auth/logout", logout);

export default router;
