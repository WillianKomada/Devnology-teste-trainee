import { FiTrash2, FiEdit } from "react-icons/fi";

import styles from "./styles.module.scss";

export default function URL() {
  return (
    <div className={styles.linkContainer}>
      <span>Primeiro link</span>

      <div>
        <FiTrash2 size={16} color="#121214" className={styles.iconTrash} />
        <FiEdit size={16} color="#121214" className={styles.iconEdit} />
      </div>
    </div>
  );
}
