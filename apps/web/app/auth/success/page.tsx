"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      router.replace("/login?error=no_token");
      return;
    }

    localStorage.setItem("access_token", token);
    router.replace("/");
  }, [router, searchParams]);

  return <p>Signing you in...</p>;
}
