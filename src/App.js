import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import insignia from "./insignia.png";
import grupo from "./grupo.PNG";
import distrito from "./distrito.PNG";
import "./App.scss";

function App() {
  const canvasSize = "400";
  const [nombre, setNombre] = useState("");
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    setCanvas(canvas);
    const context = canvas.getContext("2d");
    // setContextReact(context);
    //Our first draw
    context.fillStyle = "#fff";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.globalAlpha = 1;
    // context.drawImage(imageRef.current, 10, 10);
    context.drawImage(
      imageRef.current,
      0,
      0,
      imageRef.current.width,
      imageRef.current.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    //Set the font size and the fontface to use.
    context.font = "13px Arial";

    //Set the color of the text. This can be
    //an RGB color or a textual description
    //such as red.
    context.fillStyle = "white";

    //The X coordinate where to start
    const x = 137;

    //The Y coordinate where to start
    const y = 275;

    //Use the fillText method to draw the text.
    context.fillText(nombre, x, y);
  }, [nombre]);

  const handleDownload = () => {
    const element = document.createElement("a");
    element.href = canvas.toDataURL();
    element.download = "Insignia.jpg";
    element.click();
    console.log(canvas.toDataURL());
  };

  return (
    <div className="container">
      <div className="header">
        <img src={distrito} className="header__logo" />
        <h1 className="header__text">
          Gracias por participar en la Ruta de la Cuaresma 2021
        </h1>
        <img src={grupo} className="header__logo" />
      </div>
      <h4>
        A continuación, ingresa tu nombre para descargar tu insignia virtual
      </h4>
      <div className="controller-container">
        <label class="input">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            class="input__field"
            placeholder=" "
          />
          <span class="input__label">Nombre</span>
        </label>
        <button className="download-button" onClick={() => handleDownload()}>
          Descargar
        </button>
      </div>
      <img src={insignia} ref={imageRef} style={{ display: "none" }} />
      <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />
    </div>
  );
}

export default App;
