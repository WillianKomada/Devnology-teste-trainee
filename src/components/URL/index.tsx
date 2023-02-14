import { FiTrash2, FiEdit } from "react-icons/fi";

import styles from "./styles.module.scss";

interface IUrl {
  id: string;
  title: string;
  url_link: string;
  description: string;
}

interface UrlProps {
  url: IUrl;
  handleEditUrl: (url: IUrl) => void;
  handleDelete: (id: number) => void;
}

export default function URL({ url, handleEditUrl, handleDelete }: UrlProps) {
  function setEditingUrl() {
    handleEditUrl(url);
  }

  return (
    <div data-aos="fade-right" className={styles.linkContainer} key={url.id}>
      <span>{url.title}</span>

      <div>
        <FiTrash2
          size={16}
          color="#121214"
          className={styles.iconTrash}
          onClick={() => handleDelete(Number(url.id))}
        />
        <FiEdit
          size={16}
          color="#121214"
          className={styles.iconEdit}
          onClick={setEditingUrl}
        />
      </div>
    </div>
  );
}
