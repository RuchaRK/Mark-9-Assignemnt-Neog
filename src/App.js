import React, { useState } from "react";
import "./styles.css";

var cuisineDictionery = {
  Indian: [
    {
      Name: "Samosa",
      Rating: "7/10"
    },
    {
      Name: "Dosa",
      Rating: "9/10"
    }
  ],

  Itilian: [
    {
      Name: "Pizza",
      Rating: "7/10"
    },
    {
      Name: "Pasta",
      Rating: "9/10"
    }
  ],
  Lebanese: [
    {
      Name: "Falafal",
      Rating: "7/10"
    },
    {
      Name: "Peta Bread with Hummas",
      Rating: "9/10"
    }
  ]
};
var diffCuisine = Object.keys(cuisineDictionery);
console.log(diffCuisine);

export default function App() {
  var [selectedDish, setSelectedDish] = useState("Indian");
  function clickHandler(item) {
    setSelectedDish(item);
  }

  return (
    <div className="App">
      <h1>Food Recommendations!!!</h1>
      <div>
        {diffCuisine.map((item) => (
          <button
            key={item}
            onClick={() => {
              clickHandler(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <ui>
          {cuisineDictionery[selectedDish].map((element) => (
            <li>
              {element.Name}

              {element.Rating}
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
}
