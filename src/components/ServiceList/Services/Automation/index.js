import Button from "../../../UI/Button/Button";
import React from "react";
import classes from "./Automation.module.scss";
const Automation = () => {
  return (
    <div className={classes.NewsList}>
      <h className={classes.htext}>Автоматжуулалт</h>
      <p className={classes.text}>
        ​Технологийн хөгжилтэй хөл нийлүүлэн алхах нь өнөө цагийн байгууллагын
        нэр хүндийг илэрхийлдэг. Манай Empasoft компани байгууллагын энгийн гар
        ажилгаатай болон байгууллагын бүтэц, зохион байгуулалтын процесс-д
        тулгуурлан автоматжуулалтын үйлчилгээ үзүүлдэг. 
      </p>
    </div>
  );
};

export default Automation;
