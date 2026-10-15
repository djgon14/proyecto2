import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("/proyecto3/index.html");
  }, []);

  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",fontFamily:"Arial, sans-serif",color:"#071d3a"}}>Cargando el sistema de reservas de Don Bosco…</main>;
}

export default App;
