import Button from "../../../UI/Button/Button";
import React from "react";
import classes from "./MAB.module.scss";
const MAB = () => {
  return (
    <div className={classes.NewsList}>
      <h className={classes.htext}>Мэдээллийн Аюулгүй Байдал</h>
      <p className={classes.text}>
        Технологийн эрин зуунд байгууллагын мэдээллээ хамгаалах гэдэг нь маш
        чухал асуудлуудын нэг болсон. Манай Empasoft компани тухайн байгууллагын
        мэдээллийн аюулгүй байдалд бодит үр дүн өгдөг, багц бүтээгдэхүүн санал
        болгодог. 
      </p>
    </div>
  );
};

export default MAB;
