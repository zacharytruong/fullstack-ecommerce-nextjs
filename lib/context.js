import { createContext, useState, useContext } from 'react';

export const ShopContext = createContext();
export default ShopContext;

export const useStateContext = () => useContext(ShopContext);

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [qty, setQty] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Increase product quantify
  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };
  const decreaseQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };

  // Add products to cart
  const onAdd = (product, quantity) => {
    // Total Price
    setTotalPrice((prev) => prev + product.price * quantity);

    // Increase total quantity
    setTotalQuantities((prev) => prev + quantity);

    // Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product) => {
    // Total Price
    setTotalPrice((prev) => prev - product.price);

    // Decrease total quantity
    setTotalQuantities((prev) => prev - 1);

    // Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <ShopContext.Provider
      value={{
        qty,
        setQty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        onAdd,
        cartItems,
        setCartItems,
        onRemove,
        totalQuantities,
        totalPrice
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
