import api from "@/services/api";
import { useContext, useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Url {
  title: string;
  url_link: string;
  description: string;
}

export default function CardURL({ title, url_link, description }: Url) {
  return (
    <div data-aos="zoom-in">
      <div className={styles.cardContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.link}>
          <span></span>
          <a href={url_link} target="_blank" rel="noreferrer">
            Acessar!
          </a>
        </div>
      </div>
      <div className={styles.cardBackground}></div>
    </div>
  );
}
