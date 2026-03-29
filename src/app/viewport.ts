import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#124e6a" },
    { media: "(prefers-color-scheme: dark)", color: "#1f2a33" },
  ],
};
