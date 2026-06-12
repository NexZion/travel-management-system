import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Xplore | Intelligent Sri Lankan Travel Platform",
  description: "A travel management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      {/* suppressHydrationWarning: browser extensions (Grammarly, ColorZilla, etc.)
          inject attributes onto <body> before hydration. This only silences attribute
          diffs on <body> itself, not real mismatches inside the app. */}
      <body
        className="antialiased selection:bg-[#ac683f]/20 selection:text-[#ac683f]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
