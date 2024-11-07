import "@/styles/globals.css";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Layout from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useLayoutEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider {...{ theme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
