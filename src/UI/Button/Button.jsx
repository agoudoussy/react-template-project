import React, { useState } from "react";

function Button({ text, hanldleClick, disable, color, icone, isLoading }) {
  const [style, setStyle] = useState("");

  const applyBtnStyle = (color) => {
    switch (color) {
      case "primary":
        return setStyle("button-primary");
      case "secondary":
        return setStyle("button-secondary");
      case "danger":
        return setStyle("button-danger");
      case "success":
        return setStyle("button-success");
      case "failed":
        return setStyle("button-failed");
      case "secondary-w-full":
        return setStyle("btn-full");
      default:
        setStyle("button-primary");
    }
  };
  return (
    <>
      <button
        className={`button ${style}`}
        onClick={hanldleClick}
        disabled={disable || isLoading}
      >
        <i className={icone}></i>
        {text}
        {isLoading && <Spinner size="sm" className="ml-2" />}
      </button>
    </>
  );
}

export default Button;
