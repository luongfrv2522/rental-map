import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import {Provider} from "@/components/ui/provider";
import PageProvider from "@/app/page-provider";
import Header from "@/components/layout/header";
import {Container, HStack, Image} from "@chakra-ui/react";
import {ColorModeButton} from "@/components/ui/color-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <Provider>
      <PageProvider>
        <Header
          logo={
            <Image
              src="https://wallpapercave.com/uwp/uwp4261619.png"
              alt="Naruto vs Sasuke"
              aspectRatio={2}
              width="200px"
            />
          }
          actions={
            <HStack>Đăng nhập | Đăng ký | <ColorModeButton/></HStack>
          }
        />
        
        <main>
          <Container fluid={true}>
            {children}
          </Container>
        </main>
        <footer style={{padding: "16px", background: "#222", color: "white", textAlign: "center"}}>
          © 2025 Rental Map
        </footer>
      </PageProvider>
    </Provider>
    </body>
    </html>
  );
}
