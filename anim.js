// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con cada frase y su segundo de inicio
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

// Función para actualizar las letras sin que desaparezcan hasta la siguiente
function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  // Busca la frase más reciente según el tiempo actual
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

// Escuchar el avance de la canción
audio.addEventListener("timeupdate", updateLyrics);

// Función para reproducir audio
function reproducir() {
  audio.play().catch(function (error) {
    console.log("Esperando toque del usuario para audio:", error);
  });
}

// Intentar reproducir automáticamente al cargar la página
window.addEventListener("load", reproducir);

// Si el navegador del celular lo frena, iniciar al primer toque/clic
document.addEventListener("click", reproducir, { once: true });
document.addEventListener("touchstart", reproducir, { once: true });

// Ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}
setTimeout(ocultarTitulo, 216000);