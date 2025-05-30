import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/organisms/sidebar";
import Header from "@/components/organisms/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "welt",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} antialiased border border-blue-500`} >
        <Sidebar/>
        {children}
      </body> */}
      <body className="antialiased overscroll-none">
        <div className="grid grid-flow-col h-screen grid-cols-[260px_1fr]">
          <Sidebar/>
          <div className="bg-blue-700 pt-18 overflow-hidden">
            <Header/>
            <div className="h-full bg-orange-300 overflow-scroll">
              <div className="w-12 h-80 bg-red-700 mb-2"></div>
              <div className="w-12 h-80 bg-red-700 mb-2"></div>
              <div className="w-12 h-80 bg-red-700 mb-2"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
