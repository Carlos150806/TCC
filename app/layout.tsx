import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


export const metadata: Metadata = {
  title: "Rede Social",
  description: "Uma rede social para pessoas que fazem a diferença",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;

}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
