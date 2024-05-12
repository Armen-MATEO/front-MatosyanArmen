import styles from "./menu.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Menu = ({ card, setCard, query, setQuery }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const setValue = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          {openMenu === true && (
            <div>
              <div className={openMenu ? styles.hambNavactive : styles.hambNav}>
                <h2 className={styles.mobileLogo}>LOGOTYPE</h2>
                <IoClose
                  onClick={() => setOpenMenu(false)}
                  className={styles.close}
                />
              </div>
              <div className={styles.mobileList}>
                <ul>
                  <li>
                    Demos <MdKeyboardArrowDown />
                  </li>
                  <hr className={styles.mobhorizont} />
                  <li>
                    Post <MdKeyboardArrowDown />
                  </li>
                  <li>
                    Features <MdKeyboardArrowDown />
                  </li>
                  <li>
                    Categories <MdKeyboardArrowDown />
                  </li>
                  <li>
                    Shop <MdKeyboardArrowDown />
                  </li>
                  <li>Buy Now </li>
                </ul>
              </div>
            </div>
          )}
          {openMenu === false && (
            <div
              className={styles.hambwraper}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <GiHamburgerMenu onClick={() => setOpenMenu(!openMenu)} />
              <hr />
            </div>
          )}
          <h1 className={styles.logotype}>LOGOTYPE</h1>

          <input
            className={styles.input}
            id="search"
            type="text"
            onChange={setValue}
            value={query}
          />
          <IoSearchSharp className={styles.inputicon} />
        </div>
        <hr className={styles.horizont} />

        <div className={styles.menulist}>
          <div className={styles.menuwraper}>
            <ul className={styles.menuitem}>
              <li className={styles.itemlist}>
                Demos{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.submenuItem}>
                      Post Header
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Post Layout
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Share Buttons
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Gallery Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Video Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                  </ul>
                </div>
              </li>

              <li className={styles.itemlist}>
                Post{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.submenuItem}>
                      Post Header
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Post Layout
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Share Buttons
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Gallery Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Video Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                  </ul>
                </div>
              </li>
              <li className={styles.itemlist}>
                feautures{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.submenuItem}>
                      Post Header
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Post Layout
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Share Buttons
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Gallery Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Video Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                  </ul>
                </div>
              </li>
              <li className={styles.itemlist}>
                Categories{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.submenuItem}>
                      Post Header
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Post Layout
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Share Buttons
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Gallery Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Video Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                  </ul>
                </div>
              </li>
              <li className={styles.itemlist}>
                {" "}
                Shop{" "}
                <span>
                  <MdKeyboardArrowDown />
                </span>
                <div className={styles.submenu}>
                  <ul>
                    <li className={styles.submenuItem}>
                      Post Header
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Post Layout
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Share Buttons
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Gallery Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                    <li className={styles.submenuItem}>
                      Video Post
                      <span>
                        <MdKeyboardArrowRight />
                      </span>
                    </li>
                    <hr />
                  </ul>
                </div>
              </li>
              <li className={styles.itemlist}>Buy now</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
