"use client"
import React, { useRef, useState } from "react";
import PageTransition from "@/components/PageTransition";
import AnimatedText from "@/components/AnimatedText";
import Text from "@/components/Text";
import { CodeBlock, dracula } from 'react-code-blocks';
import CodeSnippet from "@/components/CodeSnippet";
import { getFormattedDate } from "@/lib/utils";

const Page = () => {  
  const [name,setName]=useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  
  let code=`const button = document.querySelector('#sendBtn');

const message = {
	name:  "${name}",
	email:  "${email}",
	message:  "${message}",
	date:   "${getFormattedDate()}"
}

button.addEventListener('click', () => {
	form.send(message);
})`  
  return (
    <section className=" w-full  flex flex-row flex-wrap  border-border border min-h-[80vh]">
      <PageTransition />
      <section className=" flex  justify-center items-center  min-w-[23rem] w-[50%] ">
        <div>
          <form className="flex flex-col  items-center gap-2 " action="">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pl-2">_name</label>
              <input
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
                type="text"
                className="pl-2 w-[17rem] bg-transparent border-white border py-1.5 rounded-lg"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pl-2">_email</label>
              <input
               value={email}
               onChange={(e)=>{setemail(e.target.value)}}
                type="email"
                className="pl-2 w-[17rem] bg-transparent border-white border py-1.5 rounded-lg"
                placeholder="Enter Your email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="pl-2">_message</label>
              <textarea
               value={message}
               onChange={(e)=>{setmessage(e.target.value)}}
                name=""
                id=""
                cols={25}
                rows={5}
                className="pl-2 w-[17rem] bg-transparent border-white border py-1.5 rounded-lg"
                placeholder="Enter Your Message For Me"
              />
            </div>
            <div className="pl w-full">
              <button className="bg-blue hover:opacity-70 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className=" border-l-2 border-border flex justify-center flex-col pl-2 max-w-[30rem]">
    
    <CodeSnippet   code={code}/>

     
      </section>
    </section>
  );
};

export default Page;
