import { useState, useEffect } from "react";

import "./App.css";
import Menu from "./components/menu";
import Content from "./components/Content";
import axios from "axios";

function App() {
  const [limit, setLimit] = useState(false);
  const [card, setCard] = useState();
  const [query, setQuery] = useState("");
  const [openPopUP, setOPenPopUp] = useState(false);

  useEffect(() => {
    getCards();
  }, []);

  const getCards = async () => {
    const { data } = await axios.get(
      "https://cloud.codesupply.co/endpoint/react/data.json"
    );
    setCard(data);
  };

  const changeNavbar = () => {
    if (window.scrollY >= 200) {
      setLimit(true);
    } else {
      setLimit(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);

  return (
    <>
      <div className="homeContainer">
        <div className={limit ? "menuwraper active" : "menuwraper"}>
          <Menu
            card={card}
            setCard={setCard}
            query={query}
            setQuery={setQuery}
          />
        </div>
        <div onClick={() => setOPenPopUp(!openPopUP)} className="contentWraper">
          <Content
            card={card}
            query={query}
            setOPenPopUp={setOPenPopUp}
            openPopUP={openPopUP}
          />
        </div>
      </div>
    </>
  );
}

export default App;
