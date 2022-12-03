import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <NextUIProvider>
    <SessionProvider session={session}>

      <Component {...pageProps} />

    </SessionProvider>
    </NextUIProvider>
  );
}

export default MyApp;
