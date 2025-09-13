import { Provider } from "react-redux";
import Wapper from "../Wapper/Wapper";
import { store } from "../../redex/store.ts";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <React.StrictMode> */}
          <Provider store={store}>
            <Wapper/>
          </Provider>
        {/* </React.StrictMode> */}
      </QueryClientProvider>
    </>
  );
}
