import React, { useState } from "react";
import "./styles.css";

var cuisineDictionery = {
  Indian: [
    {
      Name: "Invitation to Indian Cooking",
      Rating: "8/10",
      Author: "Madhur Jaffrey"
    },
    {
      Name: "How to Cook Indian",
      Rating: "9/10",
      Author: "Sanjeev Kapoor"
    },
    {
      Name: "The Dal Cookbook",
      Rating: "7.5/10",
      Author: "Krishna Dutta"
    }
  ],

  Itilian: [
    {
      Name: "The Tuscan Sun Cookbook: Recipes from Our Italian Kitchen",
      Rating: "8.5/10",
      Author: "Clarkson Potter"
    },
    {
      Name: "Pasta Grannies: The Official Cookbook",
      Rating: "8/10",
      Author: "Vickey Bennyson"
    }
  ],
  Lebanese: [
    {
      Name:
        "Authentic Recipes for Fresh and Flavorful Mediterranean Home Cooking",
      Rating: "8/10",
      Author: "Julie Taboulie"
    },
    {
      Name: " 170 Fresh And Healthy Mediterranean Favorites",
      Rating: "9/10",
      Author: "Kamal Al-Faqih"
    },
    {
      Name: " Man’oushe: Inside the Lebanese Street Corner Bakery",
      Rating: "7.5/10",
      Author: "Barbara Abdeni Massaad"
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
      <div>
        <h1>F🍔🍝d &nbsp;&nbsp;Books &nbsp;&nbsp; R🥚🥐🍛mmendati🥞ns!!!</h1>
        <p>
          Checkout these different cook books from different cuisines...and help
          urself if u love cooking.
        </p>
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
      <hr />
      <div>
        <ui>
          {cuisineDictionery[selectedDish].map((element) => (
            <li key={element}>
              <p style={{ fontWeight: "bolder" }}>{element.Name} </p>
              <p style={{ fontStyle: "italic" }}>-by {element.Author} </p>
              <p
                style={{
                  fontSize: "smaller",
                  fontStyle: "italic",
                  color: "blue"
                }}
              >
                {element.Rating}
              </p>
            </li>
          ))}
        </ui>
      </div>
    </div>
  );
}
