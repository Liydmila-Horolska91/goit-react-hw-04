import { useState, useEffect } from "react";
import { fetchPhotos } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setError(false);
        setLoader(true);
        if (query) {
          const data = await fetchPhotos(page, query);
          setPhotos((prev) => [...prev, ...data.results]);
        }

        return;
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSearchReset = (input) => {
    setQuery(input);
    setPhotos([]);
    setPage(1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalContent = (src, alt) => {
    setModalImage(src);
    setAlt(alt);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearchReset} />
      {photos.length > 0 && (
        <ImageGallery
          photos={photos}
          openModal={openModal}
          modalContent={handleModalContent}
        />
      )}
      {loader && <Loader />}
      {query && error && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn handleClick={handleChangePage} />}
      <ImageModal
        openModal={modalIsOpen}
        closeModal={closeModal}
        src={modalImage}
        alt={alt}
      />
    </>
  );
}