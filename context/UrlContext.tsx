import { createContext, ReactNode, useState } from "react";

interface UrlContextData {
  handleOpenModalNewLink: () => void;
  handleCloseModalNewLink: () => void;
  isModalOpenNewLink: boolean;

  handleOpenModalEditLink: () => void;
  handleCloseModalEditLink: () => void;
  isModalOpenEditLink: boolean;
}

interface UrlProviderProps {
  children: ReactNode;
}

export const UrlContext = createContext({} as UrlContextData);

export const UrlProvider = ({ children }: UrlProviderProps) => {
  const [isModalOpenNewLink, setIsModalOpenNewLink] = useState(false);
  const [isModalOpenEditLink, setIsModalOpenEditLink] = useState(false);

  function handleOpenModalNewLink() {
    setIsModalOpenNewLink(true);
  }

  function handleCloseModalNewLink() {
    setIsModalOpenNewLink(false);
  }

  function handleOpenModalEditLink() {
    setIsModalOpenEditLink(true);
  }

  function handleCloseModalEditLink() {
    setIsModalOpenEditLink(false);
  }

  return (
    <UrlContext.Provider
      value={{
        handleOpenModalNewLink,
        handleCloseModalNewLink,
        isModalOpenNewLink,
        handleOpenModalEditLink,
        handleCloseModalEditLink,
        isModalOpenEditLink,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};
