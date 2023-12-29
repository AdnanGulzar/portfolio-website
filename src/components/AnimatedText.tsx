"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedText = ({ text }: { text: string }) => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100,y:"100%", opacity: 0, rotate: -30 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            y:0,

            ease: "elastic.inOut",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          }
        )
       
        
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;

    return name.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block px-1">
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className={`name-animation  name-animation-${key}-index opacity-1`}
          >
            {letter}
          </span>
        ))}
        {wordIndex < name.split(" ").length - 1 && " "}
      </span>
    ));
  };
  return <span ref={component}>{renderLetters(text, text)}</span>;
};

export default AnimatedText;
