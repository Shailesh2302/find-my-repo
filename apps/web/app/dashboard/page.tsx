import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex h-full bg-red-900">Main Screen</div>;
}
