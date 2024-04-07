import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Home | Aeroxee E-Commerce",
  description: "E-Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased flex flex-col min-h-screen",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader zIndex={10000} height={5} />
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
