import { useEffect, useRef } from "react";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks = [];

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2;
      const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < 30; i++) {
        fireworks.push({
          x,
          y,
          radius: Math.random() * 2 + 1,
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 3 + 1,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.01,
          color,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fireworks.forEach((f, i) => {
        f.x += Math.cos(f.angle) * f.speed;
        f.y += Math.sin(f.angle) * f.speed;
        f.alpha -= f.decay;

        if (f.alpha <= 0) fireworks.splice(i, 1);

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(f.color)}, ${f.alpha})`;
        ctx.fill();
      });

      if (Math.random() < 0.05) createFirework();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r},${g},${b}`;
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default Fireworks;
