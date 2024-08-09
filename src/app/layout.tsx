import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kelvin's Blog",
  description: "Kelvin Andrade Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-100 text-green-900 min-h-screen`}>
      <Container>
      <Header />
      {children}
      <Footer />
      </Container>
      </body>
    </html>
  );
}
