import React from "react";
import Typewriter from "typewriter-effect";

function TypingText() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Odoo Developer",
          "Android Development",
          "Product Owner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default TypingText;
