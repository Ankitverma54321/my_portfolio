// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import StarsCanvas from '@/Components/main/StarBackground'
// import Navbar from '@/Components/main/Navbar'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title:" Ankit's Portfolio" ,
//   description: 'This is my Portfolio',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className}  bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
//       <StarsCanvas />
//         <Navbar />

//         {children}
//         </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/Components/main/StarBackground";
import Navbar from "@/Components/main/Navbar";
import Footer from "@/Components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankit Verma's Portfolio",
  description: "Hi, I'm Ankit verma and this is my personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
