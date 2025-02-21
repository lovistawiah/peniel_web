import type { Metadata } from "next";
import { Poppins, Potta_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"], // You can specify the weights you need
});

const pottaOne = Potta_One({
  variable: "--font-potta-one",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peniel House Ministries International",
  description:
    "Peniel House Ministries International is an Apostolic Church in Accra, Ghana, founded to spread the message of Grace. Established by Bishop Professor Annor-Yeboah on October 7, 2012, the church has grown from a small gathering to a thriving community. Located near Greda Estate, Teshie, we offer English and Translation services every Sunday. Join us to experience the transformative power of Grace and fulfill the Great Commission of Jesus Christ in Matthew 28:19.",
  keywords: [
    "church near Spintex",
    "church in East Legon",
    "Peniel House Ministries International",
    "Apostolic Church",
    "church in Accra",
    "church near Greda Estate",
    "church in Teshie",
    "Grace message",
    "Apostle Isaac Asomah Ali",
    "Century Road near the Greda Estate, Teshie, Accra, Ghana",
    "+233 243 343 446",
    "info@phmi.org",
    "7:30am English Service",
    "9:30am Translation Service",
    "11:30am Translation Service",
    "https://www.facebook.com/PHMI",
    "https://www.youtube.com/PHMI",
    "https://www.instagram.com/PHMI",
    "https://www.twitter.com/PHMI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pottaOne.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
