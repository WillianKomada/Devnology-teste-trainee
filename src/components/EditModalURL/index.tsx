import { useRef } from "react";
import { FormHandles } from "@unform/core";
import styles from "./styles.module.scss";
import { Modal } from "../Modal";
import { Form } from "@unform/web";
import { Input } from "../Input";

interface IUrl {
  id: string;
  title: string;
  url_link: string;
  description: string;
}

interface AddUrl {
  title: string;
  url_link: string;
  description: string;
}

interface EditModalUrlProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingUrl: IUrl;
  handleUpdateUrl: (data: AddUrl) => void;
}

export default function EditModalUrl({
  isOpen,
  setIsOpen,
  editingUrl,
  handleUpdateUrl,
}: EditModalUrlProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddUrl) => {
    handleUpdateUrl(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={editingUrl}
        className={styles.container}
      >
        <h1>Editar Link</h1>
        <div className={styles.containerForm}>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-title">Título</label>
            <Input name="title" />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-url">URL</label>
            <Input name="url_link" />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-description">Descrição</label>
            <Input name="description" />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.buttonSave}>
            Salvar
          </button>
        </div>
      </Form>
    </Modal>
  );
}
