import Card from "./Card";
import Popup from "./Popup";
import styles from "./content.module.css";

import { useState } from "react";

const Content = ({ card, query, setOPenPopUp, openPopUP }) => {
  const [choosed, setChoosed] = useState("");

  const thisOne = card?.filter((item) => {
    if (item.title === choosed) return item;
  });

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setOPenPopUp(!openPopUP)}
      >
        {query
          ? card
              ?.filter((unit) => {
                return unit.title
                  .toLowerCase()
                  .toString()
                  .includes(query.toLowerCase());
              })
              .map((item) => (
                <div key={item.title}>
                  <Card
                    content={item}
                    setChoosed={setChoosed}
                    setOPenPopUp={setOPenPopUp}
                    openPopUP={openPopUP}
                  />
                </div>
              ))
          : card?.map((item) => (
              <div key={item.title}>
                <Card
                  content={item}
                  setOPenPopUp={setOPenPopUp}
                  setChoosed={setChoosed}
                  openPopUP={openPopUP}
                />
              </div>
            ))}

        {openPopUP && <Popup thisOne={thisOne} setOPenPopUp={setOPenPopUp} />}
      </div>
    </>
  );
};

export default Content;
