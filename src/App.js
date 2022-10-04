import React, { useState } from "react";
import "./styles.css";

var cuisineDictionery = {
  Indian: [
    {
      Name: "Invitation to Indian Cooking",
      Description:
        "There is no other book on Indian cooking as persuasive as this invitation from award-winning cookbook author Madhur Jaffrey. Focusing on the flavorful cooking of her native Delhi, Jaffrey offers more than 165 easy-to-follow recipes, with detailed instructions designed for those who have never cooked Indian cuisine.",
      Rating: "8/10",
      Author: "Madhur Jaffrey"
    },
    {
      Name: "How to Cook Indian",
      Description:
        "If you wonder why your Indian food does not taste as it should, then it could be the way you apply the cooking technique...",
      Rating: "9/10",
      Author: "Sanjeev Kapoor"
    },
    {
      Name: "The Dal Cookbook",
      Description:
        "A book full of dal recipes. The dal are dishes - mainly vegetarian but there are a few non-vegetarian recipes included here - including protein-rich lentils, peas and/or beans. There's over 60 types of dal out there, so give it a try..",
      Rating: "7.5/10",
      Author: "Krishna Dutta"
    }
  ],

  Itilian: [
    {
      Name: "The Tuscan Sun Cookbook: Recipes from Our Italian Kitchen",
      Description:
        "Frances and Edward Mayes generously invite us into their Tuscan world, to share in lavish, friend-filled feasts as we gather around the wood-fired bread oven. It's a book of joy and celebration, stories of the call of the owl, the invasion of wild boars, honest, earthy, and welcoming.",
      Rating: "8.5/10",
      Author: "Clarkson Potter"
    },
    {
      Name: "Pasta Grannies: The Official Cookbook",
      Description:
        "Featuring easy and accessible recipes from all over Italy, you will be transported into the very heart of the Italian home to learn how to make great-tasting Italian food. Pasta styles range from pici – a type of hand-rolled spaghetti that is simple to make – to lumachelle della duchessa – tiny, ridged, cinnamon-scented tubes that take patience and dexterity.",
      Rating: "8/10",
      Author: "Vickey Bennyson"
    },
    {
      Name: "The Italian baker",
      Description:
        "This is a book for Italian bread fanatics or for professional bakers, because it is far beyond what the amateur home baker is probably interested in. The supplies alone will set someone back quite a bit of money. But if you are determined to make authentic looking and tasting Italian regional breads in your own home, then this is the book for you.",
      Rating: "9/10",
      Author: "Carol Field"
    }
  ],
  Lebanese: [
    {
      Name:
        "Authentic Recipes for Fresh and Flavorful Mediterranean Home Cooking",
      Description:
        "In these 125 recipes, you’ll learn how easy it is to make such Lebanese staples as fresh labneh (strained yogurt) and how to put together your own delicious, multi-purpose spice mixes.Every chapter includes a multitude of dishes for eaters of all kinds and preferences, from meat-lovers to veggie-heads and everything in between.",
      Rating: "8/10",
      Author: "Julie Taboulie"
    },
    {
      Name: " 170 Fresh And Healthy Mediterranean Favorites",
      Description:
        "Savory, heart-healthy Lebanese recipes from a renowned chef The cuisine of Lebanon epitomizes the best of the Mediterranean diet, which is highly regarded for its positive health benefits. Abounding in vegetables, grains, fresh herbs and spices, poultry, and lamb, it yields meals replete with robust, earthy flavors",
      Rating: "9/10",
      Author: "Kamal Al-Faqih"
    },
    {
      Name: " Man’oushe: Inside the Lebanese Street Corner Bakery",
      Description:
        "The Arabic pizza that is fast becoming the world's most favorite snack. The manoush is the cherished national pie of Lebanon. It has a reserved place on the countrys breakfast table and has the unique ability to be worked into every meal of the day due to its simple versatility. This cookbook is dedicated entirely to the art of creating the perfect manoush. With over 70 simple recipes, it offers you a way to enjoy these typical piestraditionally baked in street corner bakeriesin the comfort of your own home",
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
              <p> {element.Description} </p>

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
