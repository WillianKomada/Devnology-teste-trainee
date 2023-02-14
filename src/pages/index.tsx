import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CardURL from "@/components/CardURL";
import Header from "@/components/Header";

import styles from "@/styles/Home.module.scss";
import api from "@/services/api";

interface IUrl {
  id: string;
  title: string;
  url_link: string;
  description: string;
}

export default function Home() {
  const [urls, setUrls] = useState<IUrl[]>([]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    async function getUrl() {
      const response = await api.get("/urls");
      setUrls(response.data);
    }
    getUrl();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.cardsContainer}>
        <div className={styles.cardsContent}>
          {urls &&
            urls.map((url) => (
              <CardURL
                key={url.id}
                title={url.title}
                url_link={url.url_link}
                description={url.description}
              />
            ))}
        </div>
      </main>
    </>
  );
}
