import classes from "./Newsfeed.module.scss";
import { useState } from "react";
import profileImageIcon from "../assets/profileImg.jpg";
import timisoara from "../assets/timisoara.jpg";
import japan from "../assets/japan.jpg";
import { BsThreeDots, BsPlusSquareFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaComments, FaShare } from "react-icons/fa";
import chatUserIcon from "../assets/chat6.jpg";

const Newsfeed = (props) => {
  const [reactions, setReactions] = useState({
    likesNumber: props.postData.numberOfLikes,
    commentsNumber: props.postData.numberOfComments,
  });

  const toggleReactions = (reactionType) => {
    if (reactionType === "likes") {
      setReactions((prevState) => {
        return {
          ...prevState,
          likesNumber: prevState.likesNumber + 1,
        };
      });
    } else {
      setReactions((prevState) => {
        return {
          ...prevState,
          commentsNumber: prevState.commentsNumber + 1,
        };
      });
    }
  };

  return (
    <div>
      <div className={classes.newsfeed}>
        <div className={classes.postHeader}>
          <div className={classes.userInfo}>
            <div>
              <img
                src={profileImageIcon}
                alt="profile-img"
                className={classes.profileImageIcon}
              />
            </div>
            <div className={classes.profileName}>
              <span>
                <a href="#"> Ionut Gavrilas</a>
              </span>
              <span>22 MAR 2022</span>
            </div>
          </div>
          <div className={classes.profileOptions}>
            <a href="#">
              <BsThreeDots className={classes.profileDots} />{" "}
            </a>
          </div>
        </div>
        <div>
          <img src={timisoara} className={classes.postImage} alt="Timisoara" />
          <p className={classes.postDescription}>
            <GoLocation /> Piata Unirii, Timisoara
          </p>
        </div>
        <div className={classes.reacts}>
          <div className={classes.countReacts}>
            <span className={classes.icons}>
              <AiFillLike />
            </span>
            <span className={classes.count}>{reactions.likesNumber} Likes</span>
          </div>
          <div className={classes.commentsNumber}>
            <span className={classes.count}>
              {reactions.commentsNumber} Comments
            </span>
          </div>
        </div>
        <div className={classes.reactsAction}>
          <ul className={classes.actions}>
            <li
              className={classes.reaction}
              onClick={() => toggleReactions("likes")}
            >
              <AiFillLike />
              <span>Like</span>
            </li>
            <li
              className={classes.reaction}
              onClick={() => toggleReactions("comments")}
            >
              <FaComments />
              <span>Comments</span>
            </li>
            <li className={classes.reaction}>
              <FaShare />
              <span>Share</span>
            </li>
          </ul>
        </div>
        <div className={classes.commentSection}>
          <div className={classes.comment}>
            <div className={classes.commentUsers}>
              <a href="#">
                <img
                  src={profileImageIcon}
                  alt="profile-image"
                  className={classes.profileImageIcon}
                />
              </a>

              <div className={classes.commentText}>
                <a href="#"> Ionut Gavrilas</a>
              </div>
            </div>
            <div className={classes.commentContent}>
              <input
                type="text"
                placeholder="Introduceti comentariul aici..."
              />
              <button className={classes.commentBtn}>
                <a href="#">Post</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.newsfeed}>
        <div className={classes.postHeader}>
          <div className={classes.userInfo}>
            <div>
              <img
                src={chatUserIcon}
                alt="profile-img"
                className={classes.profileImageIcon}
              />
            </div>
            <div className={classes.profileName}>
              <span>
                <a href="#">{props.postData.userName}</a>
              </span>
              <span>{props.postData.postDate}</span>
            </div>
          </div>
          <div className={classes.profileOptions}>
            <a href="#">
              <BsThreeDots className={classes.profileDots} />
            </a>
          </div>
        </div>
        <div>
          <img src={japan} className={classes.postImage} alt="Japan" />
          <p className={classes.postDescription}>
            <GoLocation /> {props.postData.location}
          </p>
        </div>
        <div className={classes.reacts}>
          <div className={classes.countReacts}>
            <span className={classes.icons}>
              <AiFillLike />
            </span>
            <span className={classes.count}>156 Likes</span>
          </div>
          <div className={classes.commentsNumber}>
            <span className={classes.count}>23 Comments</span>
          </div>
        </div>
        <div className={classes.reactsAction}>
          <ul className={classes.actions}>
            <li className={classes.reaction}>
              <AiFillLike />
              <span>Like</span>
            </li>
            <li className={classes.reaction}>
              <FaComments />
              <span>Comments</span>
            </li>
            <li className={classes.reaction}>
              <FaShare />
              <span>Share</span>
            </li>
          </ul>
        </div>
        <div className={classes.commentSection}>
          <div className={classes.comment}>
            <div className={classes.commentUsers}>
              <a href="#">
                <img
                  src={profileImageIcon}
                  alt="profile-image"
                  className={classes.profileImageIcon}
                />
              </a>

              <div className={classes.commentText}>
                <a href="#"> Ionut Gavrilas</a>
              </div>
            </div>
            <div className={classes.commentContent}>
              <input
                type="text"
                placeholder="Introduceti comentariul aici..."
              />
              <button className={classes.commentBtn}>
                <a href="#">Post</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
