import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "스튜디오 웨이브 | 프리미엄 웹 디자인 스튜디오",
  description:
    "전환율을 높이는 프리미엄 웹사이트를 합리적인 가격에. 소상공인·스타트업을 위한 맞춤형 웹 디자인 & 개발.",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased min-h-screen pt-[var(--header-gap)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
