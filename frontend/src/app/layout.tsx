import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uygur Mutfağı | Otantik Uygur Yemekleri - Ankara Çankaya",
  description:
    "Ankara Çankaya'da otantik Uygur mutfağı. El yapımı laghman, pilav, mantı ve daha fazlası. Paket servis ve sipariş için hemen arayın. Kavaklıdere'nin en lezzetli Uygur restoranı.",
  keywords:
    "Uygur yemekleri Ankara, Çankaya paket servis, et ve pilav siparişi, Uygur mutfağı, laghman, Kavaklıdere restoran",
  openGraph: {
    title: "Uygur Mutfağı | Otantik Uygur Yemekleri - Ankara",
    description:
      "Ankara'nın kalbinde otantik Uygur lezzetleri. Pilav, laghman, mantı ve özel et yemekleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=ceedd031-0d13-41be-8e8a-0d84cf012fb9" defer></script>
      </body>
    </html>
  );
}
