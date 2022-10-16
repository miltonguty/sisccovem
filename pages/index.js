import Head from "next/head";
import Image from "next/image";
import Header from "../font-end/components/headers/header";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className="text-xl md-text-5xl text-center font-bold py-10">
          page
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Home;
