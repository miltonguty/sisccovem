import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sisccovem</title>
        <meta name="description" content="sisccovem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-xl md-text-5xl text-center font-bold py-10">
          page
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
