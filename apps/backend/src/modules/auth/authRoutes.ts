import { Router } from "express";
import {
  githubLogin,
  githubCallback,
  refresh,
  me,
  logout,
  getToken,
} from "./authController";
import { protectRoute } from "../../middleware/authMiddleware";

const router: Router = Router();

router.get("/github", githubLogin);
router.get("/github/callback", githubCallback);
router.post("/refresh", refresh);
router.get("/me", me);
router.get("/getToken",protectRoute, getToken);
router.post("/logout", logout);

export default router;
