// render-mermaid.tsx
"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

let mermaidInitialized = false;

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
      });
      mermaidInitialized = true;
    }

    const renderChart = async () => {
      if (!ref.current) return;

      const id = "mermaid-" + Math.random().toString(36).slice(2);

      const { svg } = await mermaid.render(id, chart);

      // Inject white background rectangle into SVG
      const svgWithBg = svg.replace(
        "<svg",
        `<svg style="background:white"`
      );

      ref.current.innerHTML = svgWithBg;
    };

    renderChart();
  }, [chart]);

  return (
    <div className="not-prose flex-auto justify-center my-8 mx-5">
      <div ref={ref} className="max-w-full overflow-x-auto" />
    </div>
  );
}