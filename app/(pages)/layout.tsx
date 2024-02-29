import type { Metadata } from "next";
import "@/app/globals.css";
import "@/app/styles/_base.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "alicely.io",
  description: "Alice Ly is a skilled Front End Developer. Her website showcases her work and other information about her. Take a look!",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        <main className="flex flex-col p-8 md:pt-32 md:p-16 relative">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
