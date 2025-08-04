"use client";
import { MobileNav } from "./mobile-nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  MobileNav();

  return (
    <html lang="en">
      <body>
        <main>{children}</main>.
      </body>
    </html>
  );
}

