import Header from "@/components/Header";
import URL from "@/components/URL";

import styles from "./styles.module.scss";

export default function myLinks() {
  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <h1>Meus Links</h1>

          <button>Novo Link</button>
        </div>

        {/* List of Links */}
        <div className={styles.linksContainer}>
          <URL />
          <URL />
          <URL />
          <URL />
          <URL />
        </div>
      </main>
    </>
  );
}
