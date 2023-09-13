import styled from "styled-components";
import styles from "./Card.module.css";
import { useRef } from "react";

const CardNum = styled.p`
  font-size: 1.8rem;
  padding: 0 2rem;
  margin: 2.5rem 0 1.2rem 0;
  color: white;
  font-family: kredit;
  font-weight: 900;
  letter-spacing: 4px;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Card = ({ data }) => {
  const number = useRef();
  const num = (d) => {
    let bag = [];
    for (var i = 0; i < d.length; i += 4) {
      bag.push(d.slice(i, i + 4));
    }
    number.current = bag.join(" ");
  };
  if (data.cardnumber !== undefined) num(data.cardnumber);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require("./visa.png")} alt="" />
      </div>
      <div className={styles.chip}>
        <img src={require("./pngegg.png")} alt="" />
      </div>
      <CardNum className={styles.Numfont}>{number.current}</CardNum>
      <div className={styles.cardInfo}>
        <div>
          <p className={styles.cardInfoText}>Card Holder</p>
          <CardText>{data.name}</CardText>
        </div>
        <div>
          <p className={styles.cardInfoText}>Expiry</p>
          <CardText>
            {data.month !== undefined && data.year !== undefined
              ? `${data.month}/${data.year}`
              : ""}
          </CardText>
        </div>
        <div>
          <p className={styles.cardInfoText}>CVC</p>
          <CardText>{data.cvc}</CardText>
        </div>
      </div>
    </div>
  );
};
