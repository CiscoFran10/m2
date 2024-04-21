import { cn } from "@/lib/utils";
import "./globals.css";
import { Oswald, Plus_Jakarta_Sans } from "next/font/google";
import MainLayout from "@/components/main-layout";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-text" });

export const metadata = {
  title: "M2 Arquitetura",
  description: "Contruindo sua visão, criando realidade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-text antialiased",
          oswald.variable,
          sans.variable
        )}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
