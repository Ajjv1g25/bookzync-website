"use client";

import { useId } from "react";

/**
 * TechNetwork — animated SVG neural-network overlay for the hero background.
 *
 * Renders a stylized graph of nodes with connecting paths. Selected paths
 * carry a bright pulse that travels end-to-end on a loop (via stroke
 * dashoffset animation), simulating data flowing between AI nodes.
 *
 * Pure SVG + CSS keyframes — no JavaScript animation loops.
 * Designed to overlay at low opacity behind the hero content.
 */

interface Node {
  id: string;
  x: number;
  y: number;
  /** Pulsing delay (seconds) for stagger */
  delay: number;
  /** Size multiplier */
  size?: number;
}

interface Edge {
  from: string;
  to: string;
  /** If true, this edge has a flowing data pulse animation */
  pulse?: boolean;
  /** Pulse animation delay */
  delay?: number;
}

// Hand-tuned positions across a 1200x600 viewbox for a balanced composition.
// Nodes cluster in 3 columns suggesting input → AI → output.
const nodes: Node[] = [
  // Left column (input)
  { id: "i1", x: 120, y: 120, delay: 0.0 },
  { id: "i2", x: 100, y: 280, delay: 0.4 },
  { id: "i3", x: 140, y: 440, delay: 0.8 },
  { id: "i4", x: 200, y: 200, delay: 1.2, size: 0.7 },
  { id: "i5", x: 180, y: 360, delay: 1.6, size: 0.7 },

  // Center column (AI nodes — slightly larger)
  { id: "c1", x: 500, y: 100, delay: 0.2, size: 1.3 },
  { id: "c2", x: 540, y: 250, delay: 0.6, size: 1.5 },
  { id: "c3", x: 480, y: 400, delay: 1.0, size: 1.3 },
  { id: "c4", x: 600, y: 180, delay: 1.4 },
  { id: "c5", x: 620, y: 340, delay: 1.8 },
  { id: "c6", x: 560, y: 500, delay: 0.5, size: 0.8 },

  // Right column (output)
  { id: "o1", x: 940, y: 140, delay: 0.3 },
  { id: "o2", x: 1000, y: 260, delay: 0.7 },
  { id: "o3", x: 960, y: 420, delay: 1.1 },
  { id: "o4", x: 1080, y: 200, delay: 1.5, size: 0.7 },
  { id: "o5", x: 1060, y: 380, delay: 1.9, size: 0.7 },
];

// Hand-tuned edges — only between adjacent columns, no crossing chaos.
const edges: Edge[] = [
  // Input → Center
  { from: "i1", to: "c1", pulse: true, delay: 0.0 },
  { from: "i1", to: "c2" },
  { from: "i2", to: "c2", pulse: true, delay: 1.2 },
  { from: "i2", to: "c3" },
  { from: "i3", to: "c3", pulse: true, delay: 2.4 },
  { from: "i3", to: "c6" },
  { from: "i4", to: "c1" },
  { from: "i4", to: "c2", pulse: true, delay: 0.6 },
  { from: "i5", to: "c3" },
  { from: "i5", to: "c5" },

  // Internal center connections
  { from: "c1", to: "c2", pulse: true, delay: 1.8 },
  { from: "c2", to: "c3" },
  { from: "c2", to: "c4", pulse: true, delay: 3.0 },
  { from: "c2", to: "c5" },
  { from: "c3", to: "c5", pulse: true, delay: 3.6 },
  { from: "c4", to: "c5" },
  { from: "c5", to: "c6" },

  // Center → Output
  { from: "c1", to: "o1", pulse: true, delay: 4.2 },
  { from: "c2", to: "o1" },
  { from: "c2", to: "o2", pulse: true, delay: 4.8 },
  { from: "c4", to: "o2" },
  { from: "c4", to: "o4", pulse: true, delay: 5.4 },
  { from: "c3", to: "o3", pulse: true, delay: 6.0 },
  { from: "c5", to: "o3" },
  { from: "c5", to: "o5", pulse: true, delay: 6.6 },
];

function getNode(id: string): Node | undefined {
  return nodes.find((n) => n.id === id);
}

export function TechNetwork({ className }: { className?: string }) {
  // Unique IDs so multiple instances don't collide
  const uid = useId().replace(/:/g, "");
  const grad = `tn-grad-${uid}`;
  const glow = `tn-glow-${uid}`;
  const pulseGrad = `tn-pulse-${uid}`;

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        {/* Edge gradient — fades along the line */}
        <linearGradient id={grad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.0" />
          <stop offset="50%" stopColor="hsl(var(--brand))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0.0" />
        </linearGradient>

        {/* Pulse gradient — bright spot moving along edge */}
        <linearGradient id={pulseGrad} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(188 100% 70%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0" />
        </linearGradient>

        {/* Node glow filter */}
        <filter id={glow} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges — solid faint lines */}
      <g stroke="hsl(var(--brand))" strokeWidth="0.8" fill="none" opacity="0.25">
        {edges.map((e, i) => {
          const a = getNode(e.from);
          const b = getNode(e.to);
          if (!a || !b) return null;
          return (
            <line key={`edge-${i}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
          );
        })}
      </g>

      {/* Edges with flowing pulse — dashed segments that move along the line */}
      <g fill="none" strokeWidth="1.5" strokeLinecap="round">
        {edges
          .filter((e) => e.pulse)
          .map((e, i) => {
            const a = getNode(e.from);
            const b = getNode(e.to);
            if (!a || !b) return null;
            const length = Math.hypot(b.x - a.x, b.y - a.y);
            const delay = e.delay ?? 0;
            return (
              <line
                key={`pulse-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={`url(#${pulseGrad})`}
                strokeDasharray={`30 ${length}`}
                strokeDashoffset={length}
                style={{
                  animation: `tn-flow-${uid} 4s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })}
      </g>

      {/* Nodes */}
      <g filter={`url(#${glow})`}>
        {nodes.map((n) => {
          const r = 3 * (n.size ?? 1);
          return (
            <g key={n.id}>
              {/* Halo ring */}
              <circle
                cx={n.x}
                cy={n.y}
                r={r * 3}
                fill="none"
                stroke="hsl(var(--brand))"
                strokeWidth="0.6"
                opacity="0.15"
                style={{
                  animation: `tn-ring-${uid} 3s ease-in-out infinite`,
                  animationDelay: `${n.delay}s`,
                  transformOrigin: `${n.x}px ${n.y}px`,
                }}
              />
              {/* Core dot */}
              <circle
                cx={n.x}
                cy={n.y}
                r={r}
                fill="hsl(var(--brand))"
                style={{
                  animation: `tn-pulse-${uid} 3s ease-in-out infinite`,
                  animationDelay: `${n.delay}s`,
                }}
              />
            </g>
          );
        })}
      </g>

      {/* Inline keyframes — scoped via unique ID */}
      <style>{`
        @keyframes tn-flow-${uid} {
          from { stroke-dashoffset: ${0}; }
          to { stroke-dashoffset: -800; }
        }
        @keyframes tn-pulse-${uid} {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes tn-ring-${uid} {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.4); }
        }
      `}</style>
    </svg>
  );
}
