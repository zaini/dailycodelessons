import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import "@fontsource/inconsolata";
import "../styles/styles.css";
import Layout from "../components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
}
