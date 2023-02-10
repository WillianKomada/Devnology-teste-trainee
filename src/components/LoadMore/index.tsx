import { FiChevronDown } from "react-icons/fi";

import styles from "./styles.module.scss";

export default function LoadMore() {
  return (
    <button className={styles.buttonLoadMore}>
      Ver mais{" "}
      <FiChevronDown size={16} color="#121214" className={styles.iconDown} />
    </button>
  );
}
