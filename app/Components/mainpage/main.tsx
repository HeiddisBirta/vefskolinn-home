import type { ReactNode } from "react";
import Image from "next/image";


interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        {/* … other components … */}
        {/* Use the arrow image wherever needed */}
       
        {children}
      </body>
    </html>
  );
}