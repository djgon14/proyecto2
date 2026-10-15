import { useEffect } from "react";

/**
 * React inicia el sitio original de proyecto3 desde public/proyecto3.
 * Así se conserva el HTML, CSS, JavaScript y el diseño original sin
 * reconstruir ni alterar tamaños, colores o distribución.
 */
export default function App() {
  useEffect(() => {
    document.title = "Don Bosco Sucre - Reservas";
    window.location.replace("/proyecto3/index.html");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial, sans-serif",
        color: "#071d3a",
      }}
    >
      Cargando el sistema de reservas…
    </main>
  );
}
