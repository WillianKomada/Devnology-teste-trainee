import { ActiveLink } from "../ActiveLink";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          Dev<span>nology</span>
        </h1>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/MyLinks">
            <a>Meus Links</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
