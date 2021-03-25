import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  //  useEffect(() => {
  //    const canvas = canvasRef.current;
  //    const context = canvas.getContext("2d");
  //    // setContextReact(context);
  //    //Our first draw
  //    context.fillStyle = "#fff";
  //    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  //    context.drawImage(imageRef.current, 10, 10);
  //  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvas(canvas);
    const context = canvas.getContext("2d");
    // setContextReact(context);
    //Our first draw
    context.fillStyle = "#fff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(imageRef.current, 10, 10);
    //Set the font size and the fontface to use.
    context.font = "25px Arial";

    //Set the color of the text. This can be
    //an RGB color or a textual description
    //such as red.
    context.fillStyle = "red";

    //The X coordinate where to start
    var x = 50;

    //The Y coordinate where to start
    var y = 100;

    //Use the fillText method to draw the text.
    context.fillText(nombre, x, y);

    // if (contextReact) {
    //  //Set the font size and the fontface to use.
    //  contextReact.font = "25px Arial";

    //  //Set the color of the text. This can be
    //  //an RGB color or a textual description
    //  //such as red.
    //  contextReact.fillStyle = "255,255,255";

    //  //The X coordinate where to start
    //  var x = 50;

    //  //The Y coordinate where to start
    //  var y = 100;

    //  //Use the fillText method to draw the text.
    //  contextReact.fillText(nombre, x, y);
    //}
  }, [nombre]);

  const handleDownload = () => {
    const element = document.createElement("a");
    element.href = canvas.toDataURL();
    element.download = "Insignia.jpg";
    element.click();
    console.log(canvas.toDataURL());
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <img src={logo} ref={imageRef} style={{ display: "none" }} />
      <button onClick={() => handleDownload()}>Descargar</button>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default App;
