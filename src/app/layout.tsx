import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

import ReactGA from 'react-ga';
const TRACKING_ID = "G-Y39NSX5FN4";
ReactGA.initialize(TRACKING_ID);

export const metadata: Metadata = {
  icons: "../../public/favicon.ico",
  title: "Paladium Stats",
  description: "Votre nouvel outil pour une meilleure expérience de jeux."
};

export const viewport: Viewport = {
  themeColor: "#60b1e2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
