import classes from "./StartingPage.module.scss";
import StartingPageLeftContent from "./StartingPageLeftContent";
import StartingPageRightContent from "./StartingPageRightContent";
import StartingPageMainContent from "./StartingPageMainContent";

const StartingPage = () => {
  return (
    <div className={classes.mainContainer}>
      <StartingPageLeftContent></StartingPageLeftContent>
      <StartingPageMainContent></StartingPageMainContent>
      <StartingPageRightContent></StartingPageRightContent>
    </div>
  );
};

export default StartingPage;
