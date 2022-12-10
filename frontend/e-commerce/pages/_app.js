import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { AuthProvider } from '../context/AuthContext'
import { ProductProvider } from "../context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProductProvider>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </ProductProvider>
    </AuthProvider>

  );
}

export default MyApp;
