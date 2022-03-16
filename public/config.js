const { Console } = require("console");

function searchRank() {
  let steam32ID = document.getElementById("steam32ID").value;
  fetch("localhost:3000/dota/ranking", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ steam32ID: steam32ID }),
  })
    .then((res) => {
      Console.log(res);
      return res.json();
    })
    .then((json) => {
      if (json === Anciente) {
        <img src="./" alt=""></img>;
      }

      document.getElementById("imagem").innerHTML = postElements;
    });
}
