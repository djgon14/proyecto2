import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Don Bosco Sucre - Reservas";
  }, []);

  return (
    <main style={{ width: "100%", height: "100dvh", margin: 0, overflow: "hidden" }}>
      <iframe title="Sistema de reservas del Colegio Don Bosco" src="/proyecto3/index.html" style={{ display: "block", width: "100%", height: "100%", border: 0 }} />
    </main>
  );
}
