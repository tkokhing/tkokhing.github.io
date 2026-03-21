"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

type Props = {
  chart: string;
};

export default function RenderMermaid({ chart }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    if (!ref.current) return;

    if (!chart || typeof chart !== "string") {
      console.error("Invalid Mermaid chart:", chart);
      return;
    }

    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
    });

    const renderDiagram = async () => {
      try {
        const { svg } = await mermaid.render(
          `mermaid-${Date.now()}`,
          chart.trim()
        );
        setSvg(svg);
      } catch (err) {
        console.error("Mermaid render error:", err, chart);
      }
    };

    renderDiagram();
  }, [chart]);

  return (
    <div className="not-prose flex-auto justify-center my-8 mx-5">
      <div ref={ref}
      className="max-w-full overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}