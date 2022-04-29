import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, Dispatch } from "../../store";
import Button from "react-bootstrap/Button";
import styles from "./home-page.module.css";
import { Header } from "../shared/header/header";
import mug from "../images/mug.jpeg";

export const Home: React.FC = (): JSX.Element => (
  <div className={styles.homePage}>
    <Header />
    <div className={styles.landingBanner}>
      <h1 className={styles.landingText}>
        Welcome to my personal website. <br />I hope you enjoy your stay~
      </h1>
    </div>

    <div>
      <div className={styles.homePageBlock}>
        <div className={styles.leftSideBlock}>
          <div>
            <h2 style={{ marginTop: 0 }}>
              A place for me to think and code at will.
              <br /> Confidently, Creatively.
            </h2>
            <Button className={styles.appButton} variant="outline-primary">
              Link to latest app
            </Button>{" "}
          </div>
        </div>
        <div className={styles.rightSideBlock} style={{ marginTop: 0 }}>
          <h4>
            I&apos;m just a software engineer coding here and there. Currently
            playing Maplestory and Valorant and sometimes I even cook.
            <br />
            <br />
            My current plans for this website are to further develop my coding
            skills and reinforce what I&apos;ve learned at work and school. In
            the future, I want to get my masters in computer science. Maybe even
            teach? Who knows
            <br />
            <br />
            For now, here&apos;s some more filler text: Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ad velit suscipit dolor est,
            laudantium sit iste minima voluptatum fuga ipsam ut voluptas fugit,
            earum qui consectetur possimus quidem doloribus nam.
          </h4>
        </div>
      </div>

      <div className={styles.fullscreenPictureContainer}>
        <div className={styles.rowPictureContainer}>
          <div className={styles.picturePictureContainer}>
            <img
              className={styles.homePageBlockPic}
              src="https://images.pexels.com/photos/6465964/pexels-photo-6465964.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="home page pic"
            />
          </div>
          <div className={styles.blocktextPictureContainer}>
            <div className={styles.subtextPictureContainer}>
              <h2 style={{ backgroundColor: "inherit" }}>Lorem Ipsum</h2> <br />
              <h4 style={{ backgroundColor: "inherit" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam, sed! Maiores consequuntur, dolores fugiat consequatur
                dignissimos rem quidem eaque voluptas. Dolorum nemo ipsam
                deserunt sequi magni illum ut nihil sint! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Aliquam, sed! Maiores
                consequuntur, dolores fugiat consequatur dignissimos rem quidem
                eaque voluptas. Dolorum nemo ipsam deserunt sequi magni illum ut
                nihil sint! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Aliquam, sed! Maiores consequuntur, dolores fugiat
                consequatur dignissimos rem quidem eaque voluptas. Dolorum nemo
                ipsam deserunt sequi magni illum ut nihil sint! Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Aliquam, sed!
                Maiores consequuntur, dolores fugiat consequatur dignissimos rem
                quidem eaque voluptas. Dolorum nemo ipsam deserunt sequi magni
                illum ut nihil sint!
              </h4>{" "}
              <br />
              <br />
              <Button className={styles.appButton} variant="outline-primary">
                Primary
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fullscreenPictureContainer}>
        <div className={styles.rowPictureContainer}>
          <div className={styles.blocktextPictureContainer}>
            <div className={styles.subtextPictureContainer}>
              <h2 style={{ backgroundColor: "inherit" }}>Lorem Ipsum</h2> <br />
              <h4 style={{ backgroundColor: "inherit" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam, sed! Maiores consequuntur, dolores fugiat consequatur
                dignissimos rem quidem eaque voluptas. Dolorum nemo ipsam
                deserunt sequi magni illum ut nihil sint! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Aliquam, sed! Maiores
                consequuntur, dolores fugiat consequatur dignissimos rem quidem
                eaque voluptas. Dolorum nemo ipsam deserunt sequi magni illum ut
                nihil sint! Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Aliquam, sed! Maiores consequuntur, dolores fugiat
                consequatur dignissimos rem quidem eaque voluptas. Dolorum nemo
                ipsam deserunt sequi magni illum ut nihil sint! Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Aliquam, sed!
                Maiores consequuntur, dolores fugiat consequatur dignissimos rem
                quidem eaque voluptas. Dolorum nemo ipsam deserunt sequi magni
                illum ut nihil sint!
              </h4>{" "}
              <br />
              <br />
              <Button
                className={styles.appButton}
                style={{ right: "50%", position: "absolute" }}
                variant="outline-primary"
              >
                Primary
              </Button>{" "}
            </div>
          </div>
          <div className={styles.picturePictureContainer}>
            <img
              className={styles.homePageBlockPic}
              src={mug}
              alt="home page pic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
