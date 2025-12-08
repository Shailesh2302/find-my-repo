import "./env";
import express from "express";
import { prisma } from "@repo/db";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  const FindUser = async () => {
    const user = await prisma.user.findFirst();
    console.log("users : ", user?.email);
    return user?.email;
  };

  const email = FindUser();

  res.json({ message: "Express server is running 🚀", email });
});

app.get("/health", (req, res) => {
  res.json({ message: "Server health is ok 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
