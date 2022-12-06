import { useContext, createContext, useState } from "react";

const ProductContext = createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [purchases, setPurchases] = useState([])


  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart, purchases, setPurchases }}>
      {children}
    </ProductContext.Provider>
  );
};
