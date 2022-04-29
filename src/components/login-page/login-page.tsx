import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, Dispatch } from "../../store";
import { Card, Button, Alert } from "react-bootstrap";
import styles from "./login-page.module.css";
import { Header } from "../shared/header/header";
import japanese_wave from "../images/japanese_wave.png";

export const Login: React.FC = (): JSX.Element => {
  // const [showLoginError, setShowLoginError] = React.useState(false);
  const dispatch = useDispatch<Dispatch>();
  const showLoginStatement = useSelector(
    (state: RootState) => state.User.loginStatement
  );

  // console.log(showLoginStatement)
  // if (showLoginStatement) {
  //   setShowLoginError(true)
  // }

  return (
    <div className={styles.loginPage}>
      <Header />
      <div className={styles.loginpageContainer}>
        <div className={styles.loginpageTextContainer}>
          <h1>Login or Create an Account</h1>
          <br />
          <h3>Come and join the wave</h3>
        </div>
        <div className={styles.loginpageForm}>
          <Card className="text-center" style={{ width: "100%" }}>
            <Card.Body className="text-center">
              <input
                type="text"
                placeholder="username"
                className="form-control"
                style={{ maxWidth: "20em", margin: "auto" }}
                onChange={(e) => {
                  dispatch.User.setUsernameInput(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                placeholder="first name (last name optional)"
                className="form-control"
                style={{ maxWidth: "20em", margin: "auto" }}
                onChange={(e) => {
                  dispatch.User.setNameInput(e.target.value);
                }}
              />
              <br />
              <Button
                variant="primary"
                style={{ minWidth: "8.5em" }}
                onClick={() => {
                  dispatch.User.testExistingUser();
                }}
              >
                Login
              </Button>{" "}
              <hr />
              <Button
                variant="outline-success"
                style={{ marginBottom: "1em" }}
                onClick={() => {
                  dispatch.User.createNewUser();
                }}
              >
                Create Account
              </Button>{" "}
              {showLoginStatement ? (
                <Alert
                  variant={
                    showLoginStatement.includes("You have been logged in!")
                      ? "success"
                      : "danger"
                  }
                >
                  <p style={{ margin: "0" }}>{showLoginStatement}</p>
                </Alert>
              ) : null}
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className={styles.loginpageLandingPicture}>
        {/* <img src={japanese_wave} alt="japanese wave" className={styles.japaneseWave} /> */}
      </div>
    </div>
  );
};
