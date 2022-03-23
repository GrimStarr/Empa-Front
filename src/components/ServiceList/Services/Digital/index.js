import Button from "../../../UI/Button/Button";
import React from "react";
import classes from "./Digital.module.scss";
const Digital = () => {
  return (
    <div className={classes.NewsList}>
      <h className={classes.htest}>Дижитал оффис</h>
      <p className={classes.text}>
        Байгууллагын хувьд дотоод харилцаа болон гадаад харилцааг  тасралтгүй
        ухаалгаар хөгжүүлэх нь тогтвортой өсөлтийн үндэс болдог. Манай Empasoft
        компани дижитал шилжилт буюу үүлэн технологид суурилсан Microsoft Office
        365 багц бүтээгдэхүүн үйлчилгээг тухайн компани онцлогт тулгуурлан санал
        болгодог.
      </p>
    </div>
  );
};

export default Digital;
