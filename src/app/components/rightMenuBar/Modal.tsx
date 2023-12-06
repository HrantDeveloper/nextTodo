import styles from "./modal.module.css";

const Modal:React.FC<{data:itemDataType,setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,removeItem:any}> = ({ data, setModalIsOpen, removeItem }) => {
  return (
    <div className={styles.wrapper}>
      <div className="modal">
        <h3>Delete task </h3>
        <p style={{ marginTop: "10px" }}>{data.name}</p>
        <div className={styles.buttonDiv}>
          <button
            className={styles.deleteButton}
            onClick={() => removeItem(data.id)}
          >
            Delete
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setModalIsOpen((prev) => !prev)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
