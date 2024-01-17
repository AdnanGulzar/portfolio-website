"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AboutAnimatedText = ({ text }: { text: string }) => {
  const component = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        gsap.from('.name-animation', {
            y: '100%',
            opacity: 0,
            duration: 0.1,
            ease: 'elastic.inOut',
            stagger: 0.01,
            
          })
       
        
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
            className={`name-animation   opacity-1 relative`}
          >
            {letter}
          </span>
        ))}
        {wordIndex < name.split(" ").length - 1 && " "}
      </span>
    ));
  };
  return <span className="relative" ref={component}>{renderLetters(text, text)}</span>;
};

export default AboutAnimatedText;

{/* <script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

<script>
let typeSplit = new SplitType('[animate]', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('[animate] .word', {
  y: '100%',
  opacity: 0,
  duration: 3.6,
  ease: 'elastic.inOut',
  stagger: 0.1,
  
})
</script> */}
