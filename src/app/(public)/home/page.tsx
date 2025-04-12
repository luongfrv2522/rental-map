import React from "react";
import type {Metadata} from "next";
import HomePage from "@/app/(public)/home/home-page";

export const metadata: Metadata = {
  title: "Home",
  description: process.env.NEXT_PUBLIC_APP_NAME,
};

export default function Home() {
  return (
    <HomePage/>
  );
}
