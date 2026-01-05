import "dotenv/config";
import { createAppAuth } from "@octokit/auth-app";
import fs from "fs";
import path from "path";

const privateKey = fs.readFileSync(
  path.resolve(process.env.GITHUB_PRIVATE_KEY_PATH!),
  "utf8"
);

export async function getGithubAppToken() {
  const auth = createAppAuth({
    appId: process.env.GITHUB_APP_ID!,
    privateKey,
    installationId: process.env.GITHUB_INSTALLATION_ID!,
  });

  const { token } = await auth({ type: "installation" });
  return token;
}
