import classes from "./StartingPageRightContent.module.scss";
import { FaUserFriends, FaVideo } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import markZ from "../assets/markZ.jpg";
import elonMusk from "../assets/elonMusk.jpg";
import chat1 from "../assets/chat1.jpg";
import chat2 from "../assets/chat2.jpg";
import chat3 from "../assets/chat3.jpg";
import chat4 from "../assets/chat4.jpg";
import chat5 from "../assets/chat5.jpg";
import chat6 from "../assets/chat6.jpg";
import chat7 from "../assets/eileen.jpg";
import chat8 from "../assets/benjamin.jpg";
import chat9 from "../assets/alexander.jpg";
import chat10 from "../assets/diana.jpg";
import { useState } from "react";
import FriendRequest from "./FriendRequest";

const StartingPageRightContent = () => {

  const friendRequests = [
    {
      username: "Mark Zuckerberg",
      icon: markZ,
      clickedOption: [
        {confirmFriendRequest: "Confirma", isCorrect: true },
        {deleteFriendRequest: "Sterge", isCorrect: false }
      ],
      id: "0"
    },
    {
      username: "Elon Musk",
      clickedOption: [
        {confirmFriendRequest: "Confirma", isCorrect: true },
        {deleteFriendRequest: "Sterge", isCorrect: false }
      ],
      id: "1"
    },
    {
      username: "Ovidiu",
      clickedOption: [
        {confirmFriendRequest: "Confirma", isCorrect: true },
        {deleteFriendRequest: "Sterge", isCorrect: false }
      ],
      id: "2"
    },
    {
      username: "Laurentiu",
      clickedOption: [
        {confirmFriendRequest: "Confirma", isCorrect: true },
        {deleteFriendRequest: "Sterge", isCorrect: false }
      ],
      id: "3"
    }
  ];

  return (
    <div className={classes.rightContent}>
      <FriendRequest/>
      {/* <div className={classes.friendRequestBox}>
        <div className={classes.friendRequestHeader}>
          <span>
            <FaUserFriends />
            Cereri de prietenie
          </span>
          <span>
            <BsThreeDots />
          </span>
        </div>
        <div className={classes.person}>
          <img
            src={markZ}
            alt="Mark Zuckerberg"
            className={classes.personIcon}
          />
          <div className={classes.personName}>
            <h4>{friendRequests[0].username}</h4>
            <div className={classes.personApproval}>
              <button className={classes.acceptBtn}>
                {friendRequests[0].confirmFriendRequest}
              </button>
              <button className={classes.declineBtn}>
                {friendRequests[0].deleteFriendRequest}
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className={classes.friendRequestBox}>
        <div className={classes.friendRequestHeader}>
          <span>
            <FaUserFriends />
            Cereri de prietenie
          </span>
          <span>
            <BsThreeDots />
          </span>
        </div>
        <div className={classes.person}>
          <img src={elonMusk} alt="Elon Musk" className={classes.personIcon} />
          <div className={classes.personName}>
            <h4>{friendRequests[1].username}</h4>
            <div className={classes.personApproval}>
              <button className={classes.acceptBtn}>Confirma</button>
              <button className={classes.declineBtn}>Sterge</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.chatWrapper}>
        <div className={classes.chatHeader}>
          <h4>Prieteni</h4>
          <div>
            <FaVideo />
            <IoMdSettings />
          </div>
        </div>
        <div className={classes.chat}>
          <input
            type="search"
            placeholder="Cauta prieten"
            className={classes.chatSearchbar}
          ></input>
          <ul className={classes.chatList}>
            <li className={classes.chatUser}>
              <a>
                <img src={chat1} className={classes.chatUserIcon} />
                Cristiana Stan
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat2} className={classes.chatUserIcon} />
                Daniel Cass
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat3} className={classes.chatUserIcon} />
                Alina Albu
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat4} className={classes.chatUserIcon} />
                Amalia Rus
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat5} className={classes.chatUserIcon} />
                Lauren O'Reilly
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat6} className={classes.chatUserIcon} />
                Luiza Manea
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat7} className={classes.chatUserIcon} />
                Eileen Guilty
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat8} className={classes.chatUserIcon} />
                Benjamin BJ
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat9} className={classes.chatUserIcon} />
                Alex Marza
              </a>
            </li>
            <li className={classes.chatUser}>
              <a>
                <img src={chat10} className={classes.chatUserIcon} />
                Diana Gog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartingPageRightContent;
