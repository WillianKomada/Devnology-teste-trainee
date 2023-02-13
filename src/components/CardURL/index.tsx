import styles from "./styles.module.scss";

export default function CardURL() {
  return (
    <div data-aos="zoom-in">
      <div className={styles.cardContainer}>
        <h1>title</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
          laboriosam excepturi. Officiis adipisci repellat repellendus
          accusantium architecto alias quisquam, tenetur corporis pariatur.
          Aperiam, nostrum? Esse dignissimos ad qui itaque veniam.
        </p>
        <div className={styles.link}>
          <span></span>
          <a href="#">Acessar!</a>
        </div>
      </div>
      <div className={styles.cardBackground}></div>
    </div>
  );
}
