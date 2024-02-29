import type { Metadata } from "next";
import "./styles/_base.scss";

export const metadata: Metadata = {
  title: "alicely.io",
  description: "Alice Ly is a skilled Front End Developer. Her website showcases her work and other information about her. Take a look!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
