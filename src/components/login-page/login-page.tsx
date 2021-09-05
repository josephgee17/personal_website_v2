import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, Dispatch } from "../../store";
import { Card, Button, Alert } from "react-bootstrap";
import styles from "./login-page.module.css";
import { Header } from "../shared/header/header";

export const Login: React.FC = (): JSX.Element => {
  const [showLoginError, setShowLoginError] = React.useState(false);

  return (
    <div className={styles.loginPage}>
      <Header />
      <div className={styles.loginpageContainer}>
        <div className={styles.loginpageForm}>
          <Card className="text-center" style={{ width: "100%" }}>
            <Card.Body className="text-center">
              <input
                type="text"
                placeholder="username"
                className="form-control"
                style={{ maxWidth: "20em", margin: "auto" }}
               />
              <br />
              <input
                type="text"
                placeholder="first name (last name optional)"
                className="form-control"
                style={{ maxWidth: "20em", margin: "auto" }}
               />
              <br />
              <Button variant="primary" style={{ minWidth: "8.5em" }}>
                Login
              </Button>{" "}
              <hr />
              <Button variant="outline-success" style={{ marginBottom: "1em" }}>
                Create Account
              </Button>{" "}
              {showLoginError ? (
                <Alert
                  variant="danger"
                  onClose={() => setShowLoginError(false)}
                  dismissible
                >
                  <p style={{ margin: "0" }}>
                    Seems like a user already exsists with this info. Try
                    clicking the Login Button?
                  </p>
                </Alert>
              ) : null}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
