import React from "react";

function Example() {
  const name = "Діма";
  const welcomeText = "Ласкаво просимо до нашого сайту!";
  const imageUrl = "https://via.placeholder.com/300"; 
  const imageAlt = "Приклад";

  const favoriteSite = {
    name: "Google",
    url: "https://www.google.com/"
  };

  const num1 = 7;
  const num2 = 5;
  const sum = num1 + num2;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div>
      <h1>{name}</h1>
      <p>{welcomeText}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>
        Улюблений сайт: <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">{favoriteSite.name}</a>
      </p>
      <p>Сума {num1} + {num2} = {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default Example;

