import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ openModal, closeModal, src, alt }) {
  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div>
        <img className={s.modalImg} src={src} alt={alt} />
      </div>
    </ReactModal>
  );
}