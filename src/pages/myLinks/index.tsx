import React, { useState, useEffect } from "react";

import Header from "@/components/Header";
import URL from "@/components/URL";

import styles from "./styles.module.scss";
import CreateModalUrl from "@/components/CreateModalURL";
import EditModalUrl from "@/components/EditModalURL";
import api from "@/services/api";

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

export default function MyLinks() {
  const [urls, setUrls] = useState<IUrl[]>([]);
  const [editingUrl, setEditingUrl] = useState<IUrl>({} as IUrl);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function getUrl() {
      const response = await api.get("/urls");
      setUrls(response.data);
    }
    getUrl();
  }, []);

  const handleAddUrl = async (url: AddUrl): Promise<void> => {
    try {
      const response = await api.post("/urls", {
        ...url,
      });

      setUrls([...urls, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateUrl = async (url: AddUrl): Promise<void> => {
    try {
      const urlUpdated = await api.put(`/urls/${editingUrl.id}`, {
        ...editingUrl,
        ...url,
      });

      const urlsUpdated = urls.map((url) =>
        url.id !== urlUpdated.data.id ? url : urlUpdated.data
      );

      setUrls(urlsUpdated);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUrl = async (id: number) => {
    await api.delete(`/urls/${id}`);

    const urlsFiltered = urls.filter((url) => Number(url.id) !== id);

    setUrls(urlsFiltered);
  };

  const handleEditUrl = (url: IUrl) => {
    setEditModalOpen(true);
    setEditingUrl(url);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  return (
    <>
      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.headerContainer}>
          <h1>Meus Links</h1>

          <button onClick={toggleModal}>Novo Link</button>
        </div>

        {/* List of Links */}
        <div className={styles.linksContainer}>
          {urls &&
            urls.map((url) => (
              <URL
                key={url.id}
                url={url}
                handleDelete={handleDeleteUrl}
                handleEditUrl={handleEditUrl}
              />
            ))}
        </div>
      </main>

      <CreateModalUrl
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddUrl={handleAddUrl}
      />

      <EditModalUrl
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingUrl={editingUrl}
        handleUpdateUrl={handleUpdateUrl}
      />
    </>
  );
}
