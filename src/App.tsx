import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useGlobalStore } from "./zustand";
import {
  CartErrorComponent,
  CartFallback,
  DataLoading,
  DataLoadingError,
  ErrorBoundary,
  ItemsListFallback,
} from "./components";
import {
  AppCartWrapper,
  AppItemsWrapper,
  AppMainWrapper,
  CentralPostionWrapper,
} from "./App.styles";

const LazyCart = lazy(() => import("./modules/Cart"));
const LazyItemsList = lazy(() => import("./modules/ItemsList"));
const LazyFloatingCart = lazy(() => import("./modules/FloatingCart"));

export const App = () => {
  const {
    addItemToCart,
    cart,
    dataLoading,
    dataLoadingError,
    fetch: fetchData,
    itemsList,
    removeItemFromCart,
  } = useGlobalStore((state) => state);
  const [isCartLoaded, setIsCartLoaded] = useState(true);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onAddItem = useCallback(
    (itemId: string) => {
      addItemToCart(itemId);
    },
    [addItemToCart]
  );
  const onRemoveItem = useCallback(
    (itemId: string) => {
      removeItemFromCart(itemId);
    },
    [removeItemFromCart]
  );

  const onErrorCartLoading = useCallback(() => {
    setIsCartLoaded(false);
  }, []);

  const itemsInCart = useMemo(() => {
    return itemsList.filter((sourceItem) => cart.has(sourceItem.id));
  }, [cart, itemsList]);

  const lazyItemsListProps = useMemo(
    () => ({
      onAdd: isCartLoaded && onAddItem,
      onRemove: onRemoveItem,
      items: itemsList,
      itemsInCart: cart,
      externalModule: isCartLoaded && (
        <LazyFloatingCart itemsAmount={Array.from(cart.keys()).length} />
      ),
    }),
    [cart, itemsList, onAddItem, onRemoveItem, isCartLoaded]
  );

  return (
    <CentralPostionWrapper>
      {dataLoadingError && <DataLoadingError />}
      {dataLoading && !dataLoadingError ? (
        <DataLoading />
      ) : (
        <AppMainWrapper>
          <ErrorBoundary>
            <AppItemsWrapper>
              <Suspense fallback={<ItemsListFallback />}>
                <LazyItemsList {...lazyItemsListProps} />
              </Suspense>
            </AppItemsWrapper>
          </ErrorBoundary>
          <ErrorBoundary fallbackCallback={onErrorCartLoading}>
            <AppCartWrapper>
              <Suspense fallback={<CartFallback />}>
                {isCartLoaded ? (
                  <LazyCart items={itemsInCart} />
                ) : (
                  <CartErrorComponent />
                )}
              </Suspense>
            </AppCartWrapper>
          </ErrorBoundary>
        </AppMainWrapper>
      )}
    </CentralPostionWrapper>
  );
};

export default App;
