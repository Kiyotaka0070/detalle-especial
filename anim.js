// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos con el texto de tu imagen y los tiempos sincronizados
var lyricsData = [
  { text: "Él la estaba esperando Con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando Con la luz en su pupila", time: 25 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 33 },
  { text: "Lo sentía tan cercano lo sentía desde niña", time: 41 },
  { text: "Ella sabía que él sabía Que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 52 },
];

// Función para actualizar el texto en pantalla
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

// Evento para seguir el tiempo de la canción
audio.addEventListener("timeupdate", updateLyrics);

// Función para activar el audio al interactuar
function activarMusica() {
  audio.play().catch((error) => console.log("Esperando interacción:", error));
}

window.addEventListener("load", activarMusica);
document.addEventListener("click", activarMusica, { once: true });
document.addEventListener("touchstart", activarMusica, { once: true });