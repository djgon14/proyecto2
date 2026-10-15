import { useEffect, useRef } from "react";
import htmlSource from "../reservas/index.html?raw";
import cssSource from "../reservas/styles.css?raw";
import jsSource from "../reservas/script.js?raw";

export default function ReservasPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const parsed = new DOMParser().parseFromString(htmlSource, "text/html");
    parsed.querySelectorAll("script").forEach((node) => node.remove());
    root.innerHTML = parsed.body.innerHTML;

    const style = document.createElement("style");
    style.textContent = cssSource;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.textContent = jsSource;
    root.appendChild(script);

    return () => {
      style.remove();
      script.remove();
      root.innerHTML = "";
    };
  }, []);

  return <div ref={rootRef} className="reservas-app" />;
}
