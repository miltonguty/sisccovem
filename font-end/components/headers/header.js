import Head from "next/head";
import Link from "next/link";

const Header = ({ title }) => {
  return (
    <div>
      <Head>
        <title>sisccovem</title>
        <meta name="description" content="sisccovem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <h1> {title}</h1>
        </div>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>menu1</a>
          </Link>
          <Link href="/">
            <a>Menu2</a>
          </Link>
          <Link href="/">
            <a>Menu3</a>
          </Link>
          <Link href="/">
            <a>Menu4</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
