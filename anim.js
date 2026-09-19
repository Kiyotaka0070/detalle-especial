// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
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

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);