import "./globals.css";
import Header from "@/ui/Components/header";
import { inter } from "@/ui/fonts";

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
        <Header/>
        {children}
      </body>
    </html>
  );
}
