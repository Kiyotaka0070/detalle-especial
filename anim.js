// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "When the night has come", time: 15 },
  { text: "And the land is dark", time: 18 },
  { text: "Y la Luna es la luz que brilla ante mí", time: 27 },
  { text: "Miedo, no, no tendré", time: 32 },
  { text: "Oh, I won't, no me asustaré", time: 33 },
  { text: "Just as long as you stand, stand by me", time: 41 },
  { text: "And darlin', darlin', stand by me", time: 47 },
  { text: "Oh, stand by me", time: 54 },
  { text: "Oh, stand", time: 59 },
  { text: "Junto a mí", time: 67 },
  { text: "Junto a mí", time: 72 },
  { text: "Y aunque las montañas o el cielo caiga", time: 78 },
  { text: "No voy a preocuparme", time: 83 },
  { text: "Porque sé que tú estás junto a mí", time: 91 },
  { text: "No lloraré, no lloraré", time: 97 },
  { text: "Oh, I won't shed a tear", time: 104 },
  { text: "Porque sé que tú estás junto a mí", time: 108 },
  { text: "And darlin', darlin', stand by me", time: 144 },
  { text: "Oh, stand by me", time: 148 },
  { text: "Oh, stand", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
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