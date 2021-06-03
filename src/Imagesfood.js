import React from "react";
import Pizza from "./images/pizza.jpg";
import Insalata from "./images/insalata.jpg";
import Pasta from "./images/pasta.jpg";

export default function ImagesFood() {
  return (
    <div className="boxImages">
      <div>
        <img className="images" src={Pizza} alt="Pizza" />
      </div>
      <div>
        <img className="images" src={Insalata} alt="Insalata" />
      </div>
      <div>
        <img className="images" src={Pasta} alt="Pasta" />
      </div>
    </div>
  );
}
