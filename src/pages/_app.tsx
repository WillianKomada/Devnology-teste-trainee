import "@/styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#00ff5f"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow
      />
      <Component {...pageProps} />
    </>
  );
}
