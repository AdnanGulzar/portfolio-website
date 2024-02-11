"use client"
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import ExperienceSection from "@/components/ExperieceTimeLine";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import AboutAnimatedText from '../../components/AboutAnimatedText';
import PageTransition from "@/components/PageTransition";
import Experience from "@/components/ExperieceTimeLine";
// @ts-ignore
import { SkillBars } from 'react-skills';

const skillsData= [
  {
    name: 'ReactJS',
    level: 70,
    color: 'blue',
  },
  {
    name: 'Node',
    level: 85,
    color: 'red',
  }
]

const Page = () => {

  return (
    <section className="px-2 flex flex-row w-full justify-center flex-wrap border-border border-l-2">
      <PageTransition/>
    <section className="m-10p-2  pr-5 flex flex-col gap-5 mt-5">
      <div
        style={{
          fontFamily: "Fira Code",
        }}
      >
        <div className="flex flex-col mt-10">
          <h1>About me</h1>
          <code className="text-md text-code max-w-[400px] block">
          < AboutAnimatedText text={`/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */
        `}/>
            
          </code>
       
        </div>
      </div>
      <SkillBars skills={skillsData} />
      <Skills  />
     
    </section>
    
     <Experience/>
     
   
     </section>
  );
};

export default Page;
