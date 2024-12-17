import type { Metadata } from "next";
import { Geist} from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});


export const metadata: Metadata = {
  title: "Art",
  description: "AI image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-geistSans antialiased", geistSans)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
