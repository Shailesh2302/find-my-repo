import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find me Repo",
  description: "Find you a repo to contribute!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-w-screen md:bg-amber-800 sm:bg-yellow-300 lg:bg-blue-950">
            <div className="container mx-20 bg-background">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
