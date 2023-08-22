import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import cn from "classnames";

import Providers from "providers";

import styles from "./styles.module.scss";

import "./globals.scss";

const poppins = Poppins({
  weight: "400",
});

export const metadata: Metadata = {
  title: "Aboba Corp",
  description: "Aboba Corporation home page",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cn(poppins.className, styles.layout)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
