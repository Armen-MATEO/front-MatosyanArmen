import styles from "./card.module.css";

const Card = ({ content, setChoosed, setOPenPopUp, openPopUP }) => {
  const choseCard = (id) => {
    setChoosed(id);
  };

  return (
    <>
      <div
        className={styles.cardContainer}
        onClick={() => {
          choseCard(content.title);
          setOPenPopUp(!openPopUP);
        }}
      >
        <img
          src={content.img}
          srcSet={content.img_2x}
          className={styles.imgwraper}
        />
        <h4 className={styles.tags}>{content.tags}</h4>
        <h1 className={styles.title}>{content.title}</h1>
        <div className={styles.autdate}>
          <h5 className={styles.autor}>{content.autor}</h5>
          <h5 className={styles.oval}></h5>
          <h5 className={styles.date}>{content.date}</h5>
          <h5 className={styles.oval}></h5>

          <h5 className={styles.views}>{content.views} views</h5>
        </div>
        <h4 className={styles.text}>{content.text} </h4>
      </div>
    </>
  );
};

export default Card;
