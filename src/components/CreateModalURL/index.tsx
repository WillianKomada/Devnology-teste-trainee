import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import styles from "./styles.module.scss";

import { Modal } from "../Modal";
import { Input } from "../Input";

interface AddUrl {
  title: string;
  url_link: string;
  description: string;
}

interface ModalAddUrlProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddUrl: (data: AddUrl) => void;
}

export default function CreateModalUrl({
  isOpen,
  setIsOpen,
  handleAddUrl,
}: ModalAddUrlProps) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: AddUrl) => {
    handleAddUrl(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} className={styles.container}>
        <h1>Novo Link</h1>
        <div className={styles.containerForm}>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-title">Título</label>
            <Input name="title" placeholder="Título" />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-url">URL</label>
            <Input name="url_link" placeholder="www.example.com/" />
          </div>
          <div className={styles.wrapContainer}>
            <label htmlFor="link-description">Descrição</label>
            <Input name="description" placeholder="descrição..." />
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
