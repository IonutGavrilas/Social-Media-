import classes from "./FriendRequest.module.scss";
import { BsThreeDots } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import markZ from "../assets/markZ.jpg";
import React, { useState } from "react";

const FriendRequest = () => {

  const friendRequests = [
    {
      username: "Mark Zuckerberg",
      clickedOptions: [
        { optionToClick: "Confirma"},
        { optionToClick: "Sterge"},
      ]
    },
    {
      username: "Anda",
      clickedOptions: [
        { optionToClick: "Confirma" },
        { optionToClick: "Sterge" },
      ]
    },
    {
      username: "Ovidiu",
      clickedOptions: [
        { optionToClick: "Confirma" },
        { optionToClick: "Sterge" },
      ]
    },
    {
      username: "Laurentiu",
      clickedOptions: [
        { optionToClick: "Confirma" },
        { optionToClick: "Sterge"},
      ]
    },
  ];

  const [currentFriendRequest, setCurrentFriendRequest] = useState(0);

  const handleAnswerOptionClick = () => {
    const nextFriendRequest = currentFriendRequest + 1;
    if(nextFriendRequest < friendRequests.length){
        setCurrentFriendRequest(nextFriendRequest);
    } else {
        alert("You don't have friends requests anymore!")
    }
    
  };

  return (
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
        {/* <img
          src={friendRequests[currentFriendRequest].icon}
          alt="1/4"
          className={classes.personIcon}
        /> */}
        <span>{currentFriendRequest + 1}</span>/{friendRequests.length}
        <div className={classes.personName}>
          <h4>{friendRequests[currentFriendRequest].username}</h4>
          <div className={classes.personApproval}>
        
            <div>
              {friendRequests[currentFriendRequest].clickedOptions.map(
                (clickedOption) => (
                  <button
                    onClick={handleAnswerOptionClick
                    }
                  >
                    {clickedOption.optionToClick}
                  </button>
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
