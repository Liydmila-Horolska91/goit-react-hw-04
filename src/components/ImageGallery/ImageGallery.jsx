import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export default function ImageGallery({ photos, openModal, modalContent }) {
  return (
    <ul className={s.gallery}>
      {photos.map((photo) => (
        <li key={photo.id} onClick={openModal}>
          <ImageCard photo={photo} modalContent={modalContent} />
        </li>
      ))}
    </ul>
  );
}