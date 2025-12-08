// apps/web/src/utils/server-only.ts
export const serverOnly = () => {
  if (typeof window !== "undefined") {
    // If this ever runs in the client, fail fast so we catch the problem
    throw new Error("This code must run on the server only.");
  }
};
