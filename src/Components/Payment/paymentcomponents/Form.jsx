import React from "react";
import Input from "./Input";

import styles from "./Form.module.css";

export const Form = ({ getCardData }) => {
  const [CardData, setCardData] = React.useState({});
  const form = React.useRef();

  const changeHandler = (e) => {
    let inputName = e.target.name;
    setCardData({
      ...CardData,
      [inputName]: e.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getCardData(CardData);
    form.current.reset();
  };

  return (
    <div>
      <h2>Payment Details</h2>
      <form ref={form} onSubmit={submitHandler} className={styles.Form}>
        <div>
          <p>CARDHOLDER NAME</p>
          <div className={styles.inputDiv}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0E2A47"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
            <Input
              name="name"
              onChange={changeHandler}
              placeholder="Enter your Name"
            />
          </div>
        </div>

        <div>
          <p>CARD NUMBER</p>
          <div className={styles.inputDiv}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#0E2A47"
                className="bi bi-credit-card"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </span>
            <Input
              name="cardnumber"
              onChange={changeHandler}
              placeholder="Card Number"
              size="20"
            />
          </div>
        </div>

        <div className={styles.info}>
          <div>
            <p>EXPIRY MONTH</p>
            <div className={styles.inputDiv}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0E2A47"
                  className="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </span>
              <Input
                name="month"
                onChange={changeHandler}
                placeholder="Month"
                min="1"
                max="12"
                size="2"
              />
            </div>
          </div>
          <div>
            <p>EXPIRY YEAR</p>
            <div className={styles.inputDiv}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0E2A47"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </span>
              <Input
                name="year"
                onChange={changeHandler}
                placeholder="Year"
                min="2020"
                max="2050"
                size="4"
                maxlength="4"
              />
            </div>
          </div>
          <div>
            <p>CVC</p>
            <div className={styles.inputDiv}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0E2A47"
                  className="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </span>
              <Input
                name="cvc"
                onChange={changeHandler}
                placeholder="CVC"
                minlength="1"
                maxlength="3"
                size="2"
              />
            </div>
          </div>
        </div>
        <input type="submit" value="SUBMIT" className="submitCard" />
      </form>
    </div>
  );
};
