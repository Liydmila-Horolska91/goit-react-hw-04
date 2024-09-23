import s from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleClick }) {
  return (
    <button className={s.loadBtn} onClick={handleClick}>
      Load more
    </button>
  );
}