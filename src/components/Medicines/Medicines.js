import React, { useContext } from "react";
import FormContext from "../../store/formcontext";
import MedicineItem from "./MedicineItem";
import Card from "../UI/Card";

const Medicines = () => {
  const medicineItems = useContext(FormContext);
  const listitems = medicineItems.items.map((item) => {
    return <MedicineItem key={item.id} items={item} />;
  });
  return (
    <div className="container">
    <h2 className="menu">Availble Medicines</h2>
    <section className="meditems">
      <Card>
        <ul>{listitems}</ul>
      </Card>
    </section>
    </div>
  );
};

export default Medicines;
