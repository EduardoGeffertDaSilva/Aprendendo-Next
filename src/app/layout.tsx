import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="bg-gray-50 antialiased">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
