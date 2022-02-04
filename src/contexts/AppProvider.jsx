import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [user, setUser] = useState();
  const [finalOrder, setFinalOrder] = useState();

  const totalOrder = () => {
    const array = cart.map((article) => article.totalPrice);
    const reducer = (a, b) => a + b;
    let total = 0;

    if (cart.length > 0) {
      total = array.reduce(reducer);
    }

    return setFinalOrder({...finalOrder, totalOrder: total});
  };

    useEffect(() => {
      totalOrder();
    }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalQuantity(() => {
        const array = cart.map((article) => article.quantity);
        const reducer = (a, b) => a + b;

        if (cart.length > 0) {
          return array.reduce(reducer);
        }
        return 0;
      });
    }
  }, [cart]);

  const AppStates = useMemo(() => ({
    cart,
    setCart,
    totalQuantity,
    setTotalQuantity,
    user,
    setUser,
    finalOrder,
    setFinalOrder
  }), [cart, totalQuantity, user, finalOrder]);

  return (
    <AppContext.Provider value={AppStates}>
      { children }
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
