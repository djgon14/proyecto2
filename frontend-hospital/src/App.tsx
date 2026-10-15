import { useEffect } from "react";

/**
 * La portada, estilos, calendario, reservas y modales conservan el diseño
 * original de proyecto3. React monta la aplicación dentro de la página.
 */
export default function App() {
  useEffect(() => {
    document.title = "Don Bosco Sucre - Reservas";
  }, []);

  return (
    <main style={{ width: "100%", minHeight: "100dvh", margin: 0, padding: 0 }}>
      <iframe
        key="proyecto3-original"
        title="Sistema de reservas del Colegio Don Bosco"
        src="/proyecto3/index.html?v=20261015"
        style={{ display: "block", width: "100%", height: "100dvh", minHeight: "100dvh", border: 0 }}
      />
    </main>
  );
}
