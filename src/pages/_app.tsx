import "@/styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { UrlProvider } from "../../context/UrlContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <UrlProvider>
      <NextNProgress
        color="#00ff5f"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow
      />

      <Component {...pageProps} />
    </UrlProvider>
  );
}
