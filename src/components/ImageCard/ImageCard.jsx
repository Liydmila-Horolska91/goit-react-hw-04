import s from "./ImageCard.module.css";

export default function ImageCard({ photo}) {
  return (
      <img
        className={s.card}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
  );
}