import CardURL from "@/components/CardURL";
import Header from "@/components/Header";
import LoadMore from "@/components/LoadMore";

import styles from "@/styles/Home.module.scss";

export default function Home() {
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
