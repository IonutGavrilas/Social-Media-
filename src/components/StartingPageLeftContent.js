import classes from "./StartingPageLeftContent.module.scss";
import profileImageIcon from "../assets/profileImg.jpg";
import {
  FaUserFriends,
  FaMoneyBillWaveAlt,
  FaHistory,
  FaBookmark,
  FaAngleDown,
  FaLock
} from "react-icons/fa";
import { MdGroups, MdSmartDisplay, MdEventNote, MdNotifications,MdHelp } from "react-icons/md";
import { BsController, BsSearch,BsFillInfoSquareFill } from "react-icons/bs";
import { useState } from "react";

const StartingPageLeftContent = () => {
  const [dropdownMenuVisible, setDropdownMenuVisible] = useState(false);

  const toggleDropdownMenu = () => {
    setDropdownMenuVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <aside className={classes.leftContent}>
      <div className={classes.profileCard}>
        <div>
          <a href="#">
            <img
              src={profileImageIcon}
              alt="profile-img"
              className={classes.profileImageIcon}
            />
          </a>
        </div>
        <div className={classes.profileName}>
          <h4>
            <a href="#">Ionut Gavrilas</a>
          </h4>
          <p>
            <a href="#">@ionut_gavrilas</a>
          </p>
        </div>
      </div>
      <div className={classes.searchBar}>
        <BsSearch />
        <input type="search" placeholder="Cauta..." />
      </div>
      <div className={classes.menuList}>
        <ul className={classes.menuItems}>
          <li className={classes.mItem}>
            <FaUserFriends className={classes.icons} />
            <a href="#">Prieteni</a>
          </li>
          <li className={classes.mItem}>
            <MdGroups className={classes.icons} />
            <a href="#">Grupuri</a>
          </li>
          <li className={classes.mItem}>
            <FaMoneyBillWaveAlt className={classes.icons} />
            <a href="#">Marketplace</a>
          </li>
          <li className={classes.mItem}>
            <MdSmartDisplay className={classes.icons} />
            <a href="#">Watch</a>
          </li>
          <li className={classes.mItem}>
            <FaHistory className={classes.icons} />
            <a href="#">Amintiri</a>
          </li>
          <li className={classes.mItem}>
            <FaBookmark className={classes.icons} />
            <a href="#">Salvate</a>
          </li>
          <li className={classes.mItem}>
            <BsController className={classes.icons} />
            <a href="#">Jocuri</a>
          </li>
          <li className={classes.mItem}>
            <MdEventNote className={classes.icons} />
            <a href="#">Evenimente</a>
          </li>
          <li className={classes.mItem} onClick={toggleDropdownMenu}>
          {dropdownMenuVisible && <div className={classes.dropdownMenu}>
            <ul>
              <li><MdNotifications className={classes.icons} /> Notificari</li>
              <li><MdHelp className={classes.icons} /> Ajutor</li>
              <li><FaLock className={classes.icons} /> Confidentialitate</li>
              <li><BsFillInfoSquareFill className={classes.icons} /> About</li>
            </ul>
            </div>}
            <FaAngleDown className={classes.icons} />
            <a href="#" className={classes.dropdown}>
              Vezi mai mult
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default StartingPageLeftContent;
