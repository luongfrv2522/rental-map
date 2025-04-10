import type {Metadata} from "next";
import {Provider} from "@/components/ui/provider";
import PageProvider from "@/app/(public)/page-provider";
import Header from "@/components/layout/header";
import {Container, HStack, Image} from "@chakra-ui/react";
import {ColorModeButton} from "@/components/ui/color-mode";
import Nav from "@/app/(public)/nav";

export const metadata: Metadata = {
  title: "Home",
  description: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <PageProvider>
        <Header
          logo={
            <Image
              src="https://wallpapercave.com/uwp/uwp4261619.png"
              alt="Naruto vs Sasuke"
              aspectRatio={2}
              width="150px"
            />
          }
          actions={
            <HStack>Đăng nhập | Đăng ký | <ColorModeButton/></HStack>
          }
        />
        <Nav />
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
  );
}
