import { useEffect, useState } from "react";

export default function TronBackground() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Generate a fixed number of lines with random properties
    const numLines = 30;
    const newLines = [];
    
    for (let i = 0; i < numLines; i++) {
      const isHorizontal = Math.random() > 0.5;
      const position = Math.random() * 100; // 0 to 100%
      const duration = 2 + Math.random() * 4; // 2s to 6s
      const delay = Math.random() * 5; // 0s to 5s
      
      // Random colors for a vibrant Tron feel (Cyan, Purple, Blue, Neon Green)
      const colors = [
        "rgba(34, 211, 238, 1)",   // Cyan
        "rgba(168, 85, 247, 1)",   // Purple
        "rgba(59, 130, 246, 1)",   // Blue
        "rgba(57, 255, 20, 1)"     // Neon Green
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      newLines.push({
        id: i,
        isHorizontal,
        position,
        duration,
        delay,
        color
      });
    }
    
    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[-1] overflow-hidden">
      {/* Subtle background grid for that Tron feel */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      ></div>

      {/* Luminous Shooting Lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute"
          style={{
            ...(line.isHorizontal 
              ? {
                  top: `${line.position}%`,
                  left: "-100%",
                  width: "100%",
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${line.color} 80%, transparent)`,
                  boxShadow: `0 0 10px ${line.color}, 0 0 20px ${line.color}`,
                  animation: `shootRight ${line.duration}s linear infinite`,
                  animationDelay: `${line.delay}s`,
                }
              : {
                  left: `${line.position}%`,
                  top: "-100%",
                  height: "100%",
                  width: "2px",
                  background: `linear-gradient(180deg, transparent, ${line.color} 80%, transparent)`,
                  boxShadow: `0 0 10px ${line.color}, 0 0 20px ${line.color}`,
                  animation: `shootDown ${line.duration}s linear infinite`,
                  animationDelay: `${line.delay}s`,
                })
          }}
        />
      ))}

      <style>{`
        @keyframes shootRight {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(200vw); opacity: 0; }
        }
        @keyframes shootDown {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(200vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
