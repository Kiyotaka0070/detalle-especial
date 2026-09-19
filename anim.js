// Sincronizar elementos de audio y texto
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Lista de tiempos e historias/letras
var lyricsData = [
  { text: "When the night has come", time: 15 },
  { text: "And the land is dark", time: 17 },
  { text: "Y la Luna es la luz que brilla ante mí", time: 22 },
  { text: "Miedo, no, no tendré", time: 30 },
  { text: "Oh, I won't, no me asustaré", time: 35 },
  { text: "Just as long as you stand, stand by me", time: 38 },
  { text: "And darlin', darlin', stand by me", time: 43 },
  { text: "Oh, stand by me", time: 52 },
  { text: "Oh, stand", time: 53 },
  { text: "Junto a mí", time: 55 },
  { text: "Junto a mí", time: 56 },
  { text: "Y aunque las montañas o el cielo caiga", time: 60 },
  { text: "No voy a preocuparme", time: 65 },
  { text: "Porque sé que tú estás junto a mí", time: 67 },
  { text: "No lloraré, no lloraré", time: 74 },
  { text: "Oh, I won't shed a tear", time: 79 },
  { text: "Porque sé que tú estás junto a mí", time: 83 },
  { text: "And darlin', darlin', stand by me", time: 88 },
  { text: "Oh, stand by me", time: 93 },
  { text: "Oh, stand", time: 98 },
];

// Actualizar el texto según el tiempo actual de la canción
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  var currentLine = lyricsData
    .slice()
    .reverse()
    .find((line) => time >= line.time);

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Evento para actualizar sincronizado con la canción
audio.addEventListener("timeupdate", updateLyrics);

// Función universal para iniciar el audio en móviles y navegadores
function activarMusica() {
  audio.play().then(() => {
    console.log("Audio sonando perfectamente.");
  }).catch((error) => {
    console.log("Esperando toque del usuario...", error);
  });
}

// Intentar reproducir de inmediato o al interactuar con la pantalla
window.addEventListener("load", activarMusica);
document.addEventListener("click", activarMusica, { once: true });
document.addEventListener("touchstart", activarMusica, { once: true });