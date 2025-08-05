import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "434 Media",
  description: "Bilingual founders community platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="flex flex-col min-h-screen overflow-x-hidden font-sans antialiased">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
