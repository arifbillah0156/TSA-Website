import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import ElectricCursor from "@/components/Others/ElectricCursor";
import ElectricCursorCSS from "@/components/Others/ElectricCursorWithCSS";


export const metadata = {
  title: "Taqwa Shishu Academy",
  description: "Taqwa Shishu Academy, An ideal Islamic educational institution focused on modern and religious education.",
  keywords: [
    "Taqwa",
    "Taqwa Academy",
    "Islamic School",
    "Bangladesh Madrasah",
    "Taqwa Shishu Academy",
    "Education",
    "Uttara Madrasah"
  ],
  authors: [{ name: "Taqwa Shishu Academy", url: "https://www.tsa-v1.vercel.app/" }],
  creator: "Taqwa Shishu Academy",
  publisher: "Taqwa Shishu Academy",
  metadataBase: new URL("https://www.tsa-v1.vercel.app/"),
  openGraph: {
    title: "Taqwa Shishu Academy",
    description: "A modern Islamic institution combining traditional and contemporary education.",
    url: "https://www.tsa-v1.vercel.app/",
    siteName: "Taqwa Shishu Academy",
    images: [
      {
        url: "/TSA Logo.png",
        width: 1200,
        height: 630,
        alt: "Taqwa Shishu Academy",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 merriweather-regular noto-sans-bengali-damm">
        <Navbar />
        {/* <ElectricCursor /> */}
        <ElectricCursorCSS />
        {children}
        <Footer />
      </body>
    </html>
  );
}