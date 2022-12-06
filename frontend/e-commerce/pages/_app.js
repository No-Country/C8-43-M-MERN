import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ProductProvider } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ProductProvider>
  );
}

export default MyApp;
