import React, { useContext } from "react";
import { UrlContext } from "../../../context/UrlContext";
import Header from "@/components/Header";
import URL from "@/components/URL";

import styles from "./styles.module.scss";
import CreateModalUrl from "@/components/CreateModalURL";
import EditModalUrl from "@/components/EditModalURL";

export default function MyLinks() {
  const { handleOpenModalNewLink, isModalOpenNewLink, isModalOpenEditLink } =
    useContext(UrlContext);

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <h1>Meus Links</h1>

          <button onClick={handleOpenModalNewLink}>Novo Link</button>
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

      {isModalOpenNewLink && <CreateModalUrl />}
      {isModalOpenEditLink && <EditModalUrl />}
    </>
  );
}
