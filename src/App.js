import "./styles.css";
import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import Images from "./Imagesfood";

export default function App() {
  const [labelts, setLabel] = useState("");
  const [checks, setCheck] = useState([
    { id: 0, checked: false, label: "Pasta" },
    { id: 1, checked: false, label: "Pizza" },
    { id: 2, checked: false, label: "Riso" },
    { id: 3, checked: false, label: "Legumi" },
    { id: 4, checked: false, label: "Insalata" },
    { id: 5, checked: false, label: "Verdura" },
    { id: 6, checked: false, label: "Panino" },
    { id: 7, checked: false, label: "Carne" },
    { id: 8, checked: false, label: "Pesce" },
    { id: 9, checked: false, label: "Uova" },
    { id: 10, checked: false, label: "Minestrone" },
    { id: 11, checked: false, label: "Grigliata" },
    { id: 12, checked: false, label: "Cous Cous" },
    { id: 13, checked: false, label: "Formaggio" },
    { id: 14, checked: false, label: "Piadina" },
    { id: 15, checked: false, label: "Kebab" },
    { id: 16, checked: false, label: "Crepes" },
    { id: 17, checked: false, label: "Farro" },
    { id: 18, checked: false, label: "Orzo Pelato" },
    { id: 19, checked: false, label: "Rustici" },
    { id: 20, checked: false, label: "Torta Salata" }
  ]);

  const checkedArrFunc = (id) =>
    checks.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      if (item.checked) {
      }
      return item;
    });

  const controlCheck = (id) => {
    setCheck(checkedArrFunc(id));
  };

  const generateRandomFood = () => {
    const foodListChecked = checks.filter((select) => select.checked === true);
    if (foodListChecked.length >= 1) {
      const randomFood =
        foodListChecked[Math.floor(Math.random() * foodListChecked.length)];
      setLabel(randomFood.label);
    } else alert("you must first select foods");
  };

  return (
    <div className="App">
      <h1 className="title">Generator Food Idea</h1>
      <Images />
      <ul className="foodList">
        {checks.map((check) => {
          return (
            <div className="row">
              <button
                id={check.id}
                className="buttonCheckbox"
                onClick={() => controlCheck(check.id)}
              >
                {check.checked && <MdDone />}
              </button>
              <li className="foodItem">{check.label}</li>
            </div>
          );
        })}
      </ul>
      <button className="start" onClick={() => generateRandomFood()}>
        Start
      </button>

      <div className="responseRandomFood">
        <p>{labelts}</p>
      </div>
    </div>
  );
}
