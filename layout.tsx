import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/animations/custom-cursor";
import LoadingScreen from "@/components/animations/loading-screen";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skyline Corps - Premium IT Solutions & Services",
  description: "Transform your digital vision into reality with Skyline Corps. Expert IT services, innovative solutions, and cutting-edge technology.",
  keywords: ["IT services", "web development", "mobile apps", "UI/UX design", "blockchain", "AI solutions", "skyline corps"],
  authors: [{ name: "Skyline Corps Team" }],
  openGraph: {
    title: "Skyline Corps - Premium IT Solutions & Services",
    description: "Experience excellence in digital transformation with Skyline Corps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
