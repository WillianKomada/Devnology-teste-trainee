import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CardURL from "@/components/CardURL";
import Header from "@/components/Header";
import LoadMore from "@/components/LoadMore";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.cardsContainer}>
        <div className={styles.cardsContent}>
          <CardURL />
          <CardURL />
          <CardURL />
          <CardURL />
          <CardURL />
        </div>
      </main>
      <div className={styles.buttonContainer}>
        <LoadMore />
      </div>
    </>
  );
}
