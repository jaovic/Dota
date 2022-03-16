const form = document.getElementById("form");
const imagem = document.getElementById("imagem");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  console.log("teste");
  // let steam32ID = document.getElementById("steam32ID").value;
  // console.log(steam32ID);
  // fetch("localhost:3000/dota/ranking", {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   method: "POST",
  //   body: JSON.stringify({ steam32ID: steam32ID }),
  // })
  //   .then((res) => {
  //     Console.log(res);
  //     return res.json();
  //   })
  //   .then((json) => {
  //     const resultado = "";
  //     if (json === Anciente) {
  //       resultado = <img src="./imagens/ancient.png" alt="ancient Logo" />;
  //     }

  //     document.getElementById("imagem").innerHTML = resultado;
  form.style.display = "none";
  imagem.style.display = "block";
  console.log("teste");
  // });
});
