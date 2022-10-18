import Head from "next/head";
import Link from "next/link";
import { get } from "../../services/company";
import { useQuery } from "react-query";
const Header = () => {
  const { loading, isError, data, error, status } = useQuery("companys", get);
  if (loading) return <div> Loading.....</div>;
  if (isError) return <div> error {error}</div>;

  return (
    <div>
      <Head>
        <title>sisccovem</title>
        <meta name="description" content="sisccovem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            {data.map((company) => (
              <h1 key={company.id}>{company.name}</h1>
            ))}
          </div>
        )}
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
