// Providers
import { ThemeProvider } from "@/providers/theme-provider/theme-provider";

// JETBRAINS font
import { jetbrains } from "../font/jetbrains";

// Custom components
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

// ProgressBar Component
import TopLoader from "nextjs-toploader";

// Global styles
import "./globals.css";

// Metadata
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

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
          <div className="container md:px-40 lg:px-64 xl:px-72 [animation:linear_reveal_both] [animation-range:entry_5%_cover_30%] [animation-timeline:view()]">
            <NextTopLoader color="#6d28d9" />
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
