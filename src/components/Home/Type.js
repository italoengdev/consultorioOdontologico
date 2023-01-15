import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Facetas/Lentes de Contato",
          "Implante Dentário",
          "Ortodontia",
          "Prótese",
          "Endodontia",
          "Harmonização Orofacial",
          "Bucomaxilofacial",
          "Clínico Geral",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
