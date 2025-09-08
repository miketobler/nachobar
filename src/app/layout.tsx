import { UserProvider } from "@/provider/user";
import { VisualThemeProvider } from "@/provider/visual-theme";
import "@/style/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello, Martians!",
  description: "A login form to the next stage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <VisualThemeProvider>{children}</VisualThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
