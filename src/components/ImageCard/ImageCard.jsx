import s from "./ImageCard.module.css";

export default function ImageCard({ photo, modalContent }) {
  return (
    <div onClick={() => modalContent(photo.urls.regular)}>
      <img
        className={s.card}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
}