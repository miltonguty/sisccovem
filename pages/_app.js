import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../font-end/redux/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
