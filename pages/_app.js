import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
};

export default MyApp;
