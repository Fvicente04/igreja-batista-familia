import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Igreja Batista Família",
  description:
    "Uma Igreja que acredita em Jesus, que ama a Deus e às pessoas. Venha fazer parte da nossa família.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
