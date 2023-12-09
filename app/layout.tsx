// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// JETBRAINS font
import { jetbrains } from "../font/jetbrains";

// Custom components
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

// Global styles
import "./globals.css";

// Metadata
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevBlocks",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrains.className} font-jetbrains`}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container md:px-40 lg:px-64 xl:px-72">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
