import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <h1> milton</h1>
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
