import { useRef, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw the face (yellow circle)
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, 2 * Math.PI); // x, y, radius, start angle, end angle
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // Draw the left eye (black circle)
    ctx.beginPath();
    ctx.arc(200, 200, 15, 0, 2 * Math.PI); // x, y, radius
    ctx.fillStyle = "black";
    ctx.fill();

    // Draw the right eye (black circle)
    ctx.beginPath();
    ctx.arc(300, 200, 15, 0, 2 * Math.PI); // x, y, radius
    ctx.fillStyle = "black";
    ctx.fill();

    // Draw the smiling mouth (arc)
    ctx.beginPath();
    ctx.arc(250, 250, 60, 0, Math.PI); // x, y, radius, start angle, end angle
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

export default Canvas;
