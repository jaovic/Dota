const form = document.getElementById("form");
const formFora = document.querySelector(".form");
const btn = document.getElementById("btn");

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  let steam32ID = document.getElementById("steam32ID").value;
  let _steam = { steam32ID: steam32ID };

  const resposta = await fetch("http://localhost:3000/dota/ranking", {
    method: "POST",
    body: JSON.stringify(_steam),
    headers: { "Content-type": "application/json" },
  });
  const data = await resposta.json();
  console.log(data);

  const incert = `<div class="center">
    <h2>Ranking:</h2>
  </div>
  <div id="insert"><img src="./imagens/${data}.png" alt="${data} Logo" /></div>
  <div class="center">
    <a href="/"><button>Pesquisar novamente</button></a>
  </div>`;

  const imagem = document.getElementById("imagem");
  imagem.innerHTML = incert;

  form.style.display = "none";
  formFora.style.backgroundColor = "transparent";
  formFora.style.border = "none";
  imagem.style.display = "block";
});
