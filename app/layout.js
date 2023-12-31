import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { Providers } from "./providers";


const noto_sans = Noto_Sans({ subsets: ["latin"], weight: ["400","500", "600", "700"] });

export const metadata = {
  title: "Adspoosh",
  description: "Find and buy the best advertising options",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
          <Providers>{children}</Providers>
        
      </body>
    </html>
  );
}
