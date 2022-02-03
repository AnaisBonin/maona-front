import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([{
    category: "femmes",
    categoryId: 1,
    coverPicture: 1,
    description: "Description d'un chouchou rose en soie - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur.",
    id: 8,
    imageId: 8,
    isAvailable: 1,
    isEssential: 1,
    link: "/uploads/chouchou_rouge.png",
    name: "Chouchou rouge",
    price: 25,
    productId: 7,
    review: null,
    shortDescription: "Chouchou rose en soie - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante.",
    stock: 20,
    subCategoryId: 10,
    subcategory: "accessoires",
    title: "Chouchou rouge",
    quantity: 1,
  }]);
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
