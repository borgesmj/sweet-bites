import "./globals.css";
import Header from "@/ui/header";
import Footer from '@/ui/Footer'
import { inter } from "./ui/fonts";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <main className="mt-[--header-height] w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
