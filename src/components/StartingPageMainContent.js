import classes from "./StartingPageMainContent.module.scss";
import profileImageIcon from "../assets/profileImg.jpg";
import alexander from "../assets/alexander.jpg";
import benjamin from "../assets/benjamin.jpg";
import diana from "../assets/diana.jpg";
import eileen from "../assets/eileen.jpg";
import { BsPlusSquareFill } from "react-icons/bs";
import japan from "../assets/japan.jpg";
import viena from "../assets/viena.jpg";
import { useState } from "react";
import Newsfeed from "./Newsfeed";


const POST_DATA = [
  {
    id: "0",
    userName: "Luiza Manea",
    postDate: "28/03/2022",
    numberOfLikes: 23,
    numberOfComments: 14,
    profileImage: "../assets/chat6.jpg",
    postImage: "../assets/japan.jpg",
    location: "Mount Fuji, Japan"
  },
  {
    id: "1",
    userName: "Diana Gog",
    postDate: "1/04/2022",
    numberOfLikes: 15,
    numberOfComments: 41,
    profileImage: "../assets/story4.jpg",
    postImage: "../assets/viena.jpg",
    location: "Vienna, Austria"
  }
];

const StartingPageMainContent = () => {

  const [postData, setDeletePost] = useState(POST_DATA);

  return (
    <section className={classes.mainContent}>
      <div className={classes.stories}>
        <div className={classes.story}>
          <div className={classes.storyProfile}>
            <img
              src={profileImageIcon}
              alt="mountain"
              className={classes.storyProfilePic}
            />
            <p className={classes.storyUser}>Your story </p>
            <BsPlusSquareFill className={classes.addStory} />
          </div>
        </div>
        <div className={classes.story}>
          <div className={classes.storyProfile}>
            <img
              src={alexander}
              alt="mountain"
              className={classes.storyProfilePic}
            />
            <p className={classes.storyUser}>Alex Marza</p>
          </div>
        </div>
        <div className={classes.story}>
          <div className={classes.storyProfile}>
            <img
              src={benjamin}
              alt="mountain"
              className={classes.storyProfilePic}
            />
            <p className={classes.storyUser}>Benjamin BJ</p>
          </div>
        </div>
        <div className={classes.story}>
          <div className={classes.storyProfile}>
            <img
              src={diana}
              alt="mountain"
              className={classes.storyProfilePic}
            />
            <p className={classes.storyUser}>Diana Gog</p>
          </div>
        </div>
        <div className={classes.story}>
          <div className={classes.storyProfile}>
            <img
              src={eileen}
              alt="mountain"
              className={classes.storyProfilePic}
            />
            <p className={classes.storyUser}>Eileen Guilty</p>
          </div>
        </div>
      </div>
      <div className={classes.createPost}>
        <div className={classes.createPostBar}>
          <img src={profileImageIcon} className={classes.profileImageIcon} />
          <input
            type="search"
            className={classes.postBar}
            placeholder="Adauga postare"
          />
          <button className={classes.postBtn}>
            <a href="#">Post</a>
          </button>
        </div>
      </div>

      <div> 
         {postData.map((singlePost) => {
          return (
            <Newsfeed
    postData={singlePost}
    key={singlePost.id}
    />
          );
        })}
      </div>
    </section>
  );
};

export default StartingPageMainContent;
