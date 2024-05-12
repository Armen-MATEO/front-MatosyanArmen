import styles from "./popup.module.css";

const Popup = ({ thisOne, setOPenPopUp }) => {
  return (
    <>
      <div className={styles.modalCaontainer}>
        <h1>{thisOne[0]?.title}</h1>
        <p>{thisOne[0]?.text}</p>
        <button onClick={() => setOPenPopUp(false)}>close</button>
      </div>
    </>
  );
};

export default Popup;
