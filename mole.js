let score = 0;



let gameOver = false;



let currTiles = [];



const palavras = [

    ["exceção", "excessão"], ["ansioso", "ancioso"], ["subsídio", "subcídio"], ["paralisado", "paralizado"],

     ["licença", "licensa"], ["descanso", "descanço"], ["cansaço", "cançaço"], ["ascensão", "ascenção"], 

     ["incomodar", "encomodar"], ["estender", "extender"], ["com certeza", "concerteza"], 

     ["de repente", "derrepente"], 

     ["por isso", "porisso"],

     ["a partir de", "apartir de"], ["mexer", "mecher"], ["xingar", "chingar"], ["chuchu", "xuxu"],

      ["jeito", "geito"], ["bege", "beje"], ["quis", "quiz"], ["abstrato", "abistrato"],

       ["acessório", "acessorio"], ["aceitar", "asseitar"], ["açúcar", "açucar"], ["amizade", "amizadi"], 

       ["análise", "análize"], ["aprender", "apreender"], 

      ["assistência", "asistência"], ["atendimento", "atendemento"], ["audácia", "audacía"],

       ["biscoito", "bixcoito"], ["celebrar", "selibrar"], ["chocolate", "xocolate"], 

       ["decepcionar", "desepcionar"], ["exceção", "exessão"], ["família", "familia"],

        ["gramática", "gramatica"], ["hospital", "ospital"], ["impressionante", "imprecionante"],

         ["interessante", "enteressante"], ["jardineiro", "jardinero"], ["legível", "legivel"], 

         ["melancolia", "melancolia"], ["ocasião", "ocassião"], ["organização", "organição"], 

      ["pássaro", "passaro"], ["qualidade", "qualidade"], ["responsável", "responsavel"]

];



window.onload = function() {

  setGame();

}



function setGame() {

  // Configurar o tabuleiro no HTML

  for (let i = 0; i < 9; i++) {

    let tile = document.createElement("div");

    tile.className = "tile";

    tile.id = i.toString();

    tile.addEventListener("click", selectTile);

    document.getElementById("board").appendChild(tile);

  }

  setInterval(setWords, 4000); // A cada 4 segundos

}



function getRandomTile() {

  let num = Math.floor(Math.random() * 9);

  return num.toString();

}



function setWords() {

  if (gameOver) {

    return;

  }



  // Limpar quadrados anteriores

  currTiles.forEach(tile => {

    tile.innerHTML = "";

  });

  currTiles = [];



  // Escolher aleatoriamente um índice para a palavra correta

  let index = Math.floor(Math.random() * palavras.length);

  let correta = palavras[index][0];

  let incorreta = palavras[index][1];



  // Escolher aleatoriamente um quadrado para a palavra correta

  let corretaIndex = getRandomTile();

  let incorretaIndex = getRandomTile();



  // Garantir que os índices correta e incorreta sejam diferentes

  while (incorretaIndex === corretaIndex) {

    incorretaIndex = getRandomTile();

  }



  // Definir a palavra correta no quadrado correto

  let divCorreta = document.createElement("div");

  divCorreta.className = "palavra-correta";

  divCorreta.textContent = correta;

  document.getElementById(corretaIndex).appendChild(divCorreta);

  currTiles.push(document.getElementById(corretaIndex));



  // Definir a palavra incorreta no quadrado incorreto

  let divIncorreta = document.createElement("div");

  divIncorreta.className = "palavra-incorreta";

  divIncorreta.textContent = incorreta;

  document.getElementById(incorretaIndex).appendChild(divIncorreta);

  currTiles.push(document.getElementById(incorretaIndex));

}



function selectTile() {

  if (gameOver) {

    return;

  }



  // Verificar se o quadrado clicado contém a palavra correta

  if (this.querySelector(".palavra-correta")) {

    score += 10;

    document.getElementById("score").innerText = score.toString();

  } else {

    document.getElementById("score").innerText = "FIM DE JOGO: " + score.toString();

    gameOver = true;

  }

}
