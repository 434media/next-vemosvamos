import { Noto_Serif, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const notoSerif = Noto_Serif({
  weight: "300",
  style: "italic",
  subsets: ["latin"],
});

const notoSerifJP = Noto_Serif_JP({
  weight: "200",
  subsets: ["latin"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`flex flex-col min-h-screen overflow-x-hidden ${notoSerif.className}`}>
        <main className={`${notoSerifJP.className} flex-grow`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
