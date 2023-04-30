import { Suspense, lazy, useCallback, useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import {
  getItemsThunk,
  getLoadingAndErrorStatus,
  AppDispatch,
} from "@dtest/storemodule";

import React from "react";

const LazyCart = lazy(() => import("@dtest/cart"));
const LazyItemsList = lazy(() => import("@dtest/itemslist"));

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { dataLoading, dataLoadingError } = useSelector(
    getLoadingAndErrorStatus
  );
  const [isCartLoaded, setIsCartLoaded] = useState(true);

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const onErrorCartLoading = useCallback(() => {
    setIsCartLoaded(false);
  }, []);

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
                <LazyItemsList />
              </Suspense>
            </AppItemsWrapper>
          </ErrorBoundary>
          <ErrorBoundary fallbackCallback={onErrorCartLoading}>
            <AppCartWrapper>
              <Suspense fallback={<CartFallback />}>
                {isCartLoaded ? <LazyCart /> : <CartErrorComponent />}
              </Suspense>
            </AppCartWrapper>
          </ErrorBoundary>
        </AppMainWrapper>
      )}
    </CentralPostionWrapper>
  );
};

export default App;
