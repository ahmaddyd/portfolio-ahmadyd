import React from "react";
import Typewriter from "typewriter-effect";

function TypingText() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Human Capital Information System Specialist",
          "Android Dev",
          "UI Design",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 25,
      }}
    />
  );
}

export default TypingText;
