import { Router } from "express";
import {
  githubLogin,
  githubCallback,
  refresh,
  me,
  logout,
} from "./auth.controller";

const router: Router = Router();

router.get("/github", githubLogin);
router.get("/github/callback", githubCallback);
router.post("/refresh", refresh);
router.get("/me", me);
router.post("/logout", logout);

export default router;
