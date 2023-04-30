import React from "react";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

export const Main: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
