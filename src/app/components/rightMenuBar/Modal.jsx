const Modal = ({ data, setModalIsOpen, removeItem }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "300px",
        height: "180px",
        borderRadius: "5px",
        backgroundColor: "whitesmoke",
        padding: "30px",
        right: "600px",
        top: "250px",
      }}
    >
      <div className="modal">
        <h3>Delete task </h3>
        <p style={{ marginTop: "10px" }}>{data.name}</p>
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            display: "flex",
            paddingLeft: "30px",
            paddingRight: "30px",
            justifyContent: "space-between",
          }}
        >
          <button
            style={{
              width: "85px",
              height: "35px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => removeItem(data.id)}
          >
            Delete
          </button>
          <button
            style={{
              width: "85px",
              height: "35px",
              backgroundColor: "white",
              borderRadius: "5px",
              cursor: "pointer",
              border: "1px solid #C0C0C0",
              color: "grey",
            }}
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
