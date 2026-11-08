const IDLE_MS = 10000;
const BOLITA = document.getElementById("bolita");
let temporizador;

/**
 * Función para retirar el estado de visible de la bolita que indica
 * que bajes.
 * Además, cuando pasa un tiempo vuelve a ponerle el estado visible.
 */
function reiniciar() {
  BOLITA.classList.remove("visible");
  clearTimeout(temporizador);
  // Si esta casi abajo, no hagas la animación
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 270) return;
  temporizador = setTimeout(() => BOLITA.classList.add("visible"), IDLE_MS);
}

// Al recivir cualquier evento de interactuar, reinicia
["mousemove", "mousedown", "keydown", "wheel", "touchstart"].forEach((ev) =>
  window.addEventListener(ev, reiniciar, { passive: true })
);
window.addEventListener("scroll", reiniciar, { passive: true, capture: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearTimeout(temporizador);
    BOLITA.classList.remove("visible");
  } else {
    reiniciar();
  }
});

reiniciar();
