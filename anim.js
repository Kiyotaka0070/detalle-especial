// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When the night has come", time: 14 },
  { text: "And the land is dark", time: 17 },
  { text: "Y la Luna es la luz que brilla ante mí", time: 22 },
  { text: "Miedo, no, no tendré", time: 30 },
  { text: "Oh, I won't, no me asustaré", time: 33 },
  { text: "Just as long as you stand, stand by me", time: 37 },
  { text: "And darlin', darlin', stand by me", time: 43 },
  { text: "Oh, stand by me", time: 47 },
  { text: "Oh, stand", time: 53 },
  { text: "Junto a mí", time: 55 },
  { text: "Junto a mí", time: 56 },
  { text: "Y aunque las montañas o el cielo caiga", time: 59 },
  { text: "No voy a preocuparme", time: 64 },
  { text: "Porque sé que tú estás junto a mí", time: 67 },
  { text: "No lloraré, no lloraré", time: 74 },
  { text: "Oh, I won't shed a tear", time: 79 },
  { text: "Porque sé que tú estás junto a mí", time: 82 },
  { text: "And darlin', darlin', stand by me", time: 88 },
  { text: "Oh, stand by me", time: 93 },
  { text: "Oh, stand", time: 98 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  // Busca la última frase cuyo tiempo ya haya comenzado
  var currentLine = lyricsData
    .slice() // Copia del arreglo para no modificar el original
    .reverse() // Invierte el orden para encontrar la frase más reciente
    .find((line) => time >= line.time);

  if (currentLine) {
    // Si ya comenzó al menos la primera frase, se mantiene visible
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Antes de que empiece la primera frase (ej. antes del segundo 15), está vacío
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Escuchar el evento timeupdate del audio para sincronizar perfectamente las letras
audio.addEventListener("timeupdate", updateLyrics);

// Iniciar el audio automáticamente cuando el usuario haga un clic en la página
document.addEventListener(
  "click",
  function () {
    audio.play();
  },
  { once: true }
);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

// Ocultar el título a los 216 segundos
setTimeout(ocultarTitulo, 216000);