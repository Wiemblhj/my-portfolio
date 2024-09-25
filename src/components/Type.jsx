import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
            
              "Web developer",
              "UI UX  designer",
              "Graphic designer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10, // Adjust this value
            typeSpeed: 10, 
          }}
        />
      )
}

export default Type