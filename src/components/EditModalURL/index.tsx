import { useContext } from "react";
import { UrlContext } from "context/UrlContext";
import styles from "./styles.module.scss";

export default function EditModalUrl() {
  const { handleCloseModalEditLink } = useContext(UrlContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h1>Editar Link</h1>
        <div className={styles.containerForm}>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-title">Título</label>
            <input type="text" id="link-title" autoFocus />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-url">URL</label>
            <input type="text" id="link-url" />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-description">Descrição</label>
            <textarea id="link-title"></textarea>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonSave}>Salvar</button>
          <button
            onClick={handleCloseModalEditLink}
            className={styles.buttonCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
