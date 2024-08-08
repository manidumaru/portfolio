import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navigation/navbar";

const inter = Roboto({
  weight: '400',
  subsets: ['latin'],
})

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mani Dumaru | Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <div className="fixed z-50 bottom-5 left-1/2 -translate-x-1/2">
              <Navbar />
            </div>

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
