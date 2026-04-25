import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";

import Script from "next/script"; // ✅ Import Next.js Script component

export const metadata: Metadata = {
  title: "Prasunet Company - IT Consulting | IT Services | Digital Transformation",
  description: "Prasunet Company - Your Trusted Partner in IT Services and Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Prasunet",
    "alternateName": "Prasunet",
    "description": "Prasunet Company - Your Trusted Partner in IT Services and Consulting",
    "url": "https://prasunet.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://prasunet.com/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
  <head>
    {/* ✅ Google AdSense meta tag */}
    <meta name="google-adsense-account" content="ca-pub-9096209867795576" />

    {/* ✅ Google AdSense script */}
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9096209867795576"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />

    {/* ✅ Structured data for SEO */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  </head>
  <body className="transition-colors duration-200 ease-in-out">
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AuthProvider>
  </body>
</html>

  );
}
