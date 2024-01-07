import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import HeaderBase from "@/components/headerBase";

const IBM_Plex = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio Bruno Garcia",
  description: "Meu portifólio pessoal de projetos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={IBM_Plex.className}>
        <HeaderBase />
        {children}
      </body>
    </html>
  );
}
