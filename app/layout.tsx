import { Inter } from "next/font/google";

import "@styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My portfolio",
  description: "Porfolio where you can view my projects and learn more about me!",
  authors: [
    {
      name: "Mihael Šestak",
      url: "https://www.linkedin.com/in/mihael-sestak-b73590241/",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="background_wrapper">
          <div id="background_inner">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
