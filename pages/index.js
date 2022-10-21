import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "../font-end/components/headers/header";
import styles from "../styles/Home.module.css";
import Company from "../font-end/components/forms/company";
import { fetchCompanyById } from "../font-end/redux/slices/Company";

const Home = () => {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.Company.data);
  useEffect(() => {
    dispatch(fetchCompanyById(1));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Header title={company.name} />
      <Company data={company} />
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline">page</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};
export default Home;
