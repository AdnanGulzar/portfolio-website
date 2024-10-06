"use client"
import Skills from "@/components/Skills";
import React from "react";
import AboutAnimatedText from '../../components/AboutAnimatedText';
import PageTransition from "@/components/PageTransition";
import Experience from "@/components/ExperieceTimeLine";
// @ts-ignore
import { SkillBars } from 'react-skills';

const skillsData= [
  {
    name: 'ReactJS',
    level: 80,
    color: 'blue',
  },
  {
    name: 'Nextjs',
    level: 70,
    color: 'green',
  },
  {
    name: 'Angular',
    level: 60,
    color: 'orange',
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
 ** About me  **
Building quality websites and applications with HTML, CSS, JavaScript and React.js .
A passionate web developer with 4+ years’ of well-rounded experience in web development and design.
Also worked as a freelancer and remote job . Currently working on projects with react.js and node.js.
And now seeks a position with a top technology firm to work with in a professional environment . Web
Applications features like responsiveness , progressives'
web apps , animation and futuristic design are the concerned things that are focused
 **/
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
