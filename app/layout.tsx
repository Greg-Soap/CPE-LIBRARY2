import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./_components/sidebar";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: {
    default: "CPE-E-Library",
    template: "%s | CPE-E-Library",
  },
  description:
    "A digital library for CPE students to access course materials, notes, and more.",
  authors: [{ name: "Retrodevs" }],
  openGraph: {
    title: { default: "CPE-E-Library", template: "%s | CPE-E-Library" },
    description:
      "A digital library for CPE students to access course materials, notes, and more.",
    images: "",
    siteName: "CPE-E-Library",
    url: "",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: { default: "CPE-E-Library", template: "%s | CPE-E-Library" },
    description:
      "A digital library for CPE students to access course materials, notes, and more.",
    creator: "RetroDevs",
    images: [
      "https://www.pexels.com/photo/grayscale-photo-of-bicycle-beside-seashore-103523/",
    ], // Must be an absolute URL
  },
  metadataBase: new URL(
    "https://www.pexels.com/photo/grayscale-photo-of-bicycle-beside-seashore-103523/"
  ),
  icons: { shortcut: ["/favicon.ico"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="flex">
          <aside className="fixed top-0 bottom-0 w-[200px]">
            <Sidebar />
          </aside>
          <div id="current-page" className="ml-[200px] w-full pb-5">
            <div
              id="layout-wrapper"
              className="container min-h-screen flex flex-col justify-between"
            >
              <div id="content-wrapper">
                <div id="dashboard-top" className="h-[120px]">
                  topp
                </div>
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
