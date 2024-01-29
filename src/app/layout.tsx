import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import HeaderBase from "@/components/headerBase";

const IBM_Plex = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Bruno Garcia",
  description: "Meu portfólio pessoal de projetos.",
  icons: {
    icon: '/icon.png', 
  },
}; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={IBM_Plex.className}>
        <HeaderBase />
        {children}
      </body>
    </html>
  );
}
