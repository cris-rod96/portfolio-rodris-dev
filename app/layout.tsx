import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { NavComponent } from "@/components/shared/Nav";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - @cris-96",
  description:
    "Portfolio web de Cristhian Rodríguez. Programador Web con 1 año de experiencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-dark text-gray-300`}>
        <NavComponent />
        <main className="lg:w-3/5 md:w-4/5 w-full lg:px-0 px-10 mx-auto py-10 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
