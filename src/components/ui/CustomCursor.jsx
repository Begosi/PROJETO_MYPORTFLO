import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the luminous trail
  // The mass and damping are adjusted for a "light and short" trail
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch based
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    const moveCursor = (e) => {
      // Offset by half the width of the main cursor (w-4 = 16px -> 8px offset)
      mouseX.set(e.clientX - 8);
      mouseY.set(e.clientY - 8);
    };
    
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main Cursor (Constant RGB Circle) */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999]"
        style={{ x: mouseX, y: mouseY }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
            animation: "spinRGB 2s linear infinite",
          }}
        />
      </motion.div>
      
      {/* Luminous Trail */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] opacity-60 blur-md"
        style={{ x: cursorXSpring, y: cursorYSpring, marginLeft: -16, marginTop: -16 }}
      >
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)",
            animation: "spinRGB 2s linear infinite",
          }}
        />
      </motion.div>
      
      <style>{`
        @keyframes spinRGB {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        body, a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
