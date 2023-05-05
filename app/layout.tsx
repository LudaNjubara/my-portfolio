import "@styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My portofolio",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
