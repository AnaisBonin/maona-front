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
  }), [cart, totalQuantity, user]);

  return (
    <AppContext.Provider value={AppStates}>
      { children }
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppProvider;
