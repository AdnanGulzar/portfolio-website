
import { faJs, faLinkedinIn, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFolder,
  faFolderBlank,
} from "@fortawesome/free-solid-svg-icons";
import { TbBrandNextjs } from "react-icons/tb";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";
import { faCodeMerge } from "@fortawesome/free-solid-svg-icons/faCodeMerge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SiNestjs } from "react-icons/si";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-[100%] gap-2 ">
       {/* <PageTransition/>  */}
      <div className="hidden    p-2  pr-5 md:flex h-full flex-col gap-5 mt-5">
        <div className="w-25 flex gap-5">
            <input type="checkbox" name="" id="" className="bg-red-500" />
        <div className="w-25 flex gap-2 items-center">
        <div className="text-sm w-6   ">
          <FontAwesomeIcon size="sm" icon={faReact} color="#607B96" />
          
        </div>
        <div>React</div>
        </div>

        </div>
        <div className="w-25 flex gap-6">
            <input type="checkbox" name="" id="" />
        <div className="w-25 flex gap-2 items-center">
        <div className="text-sm w-6   ">
          <FontAwesomeIcon size="sm" icon={faNodeJs} color="#607B96" />
          
        </div>
        <div>Node</div>
        </div>

        </div>
        <div className="w-25 flex gap-6">
            <input type="checkbox" name="" id="" />
        <div className="w-25 flex gap-2 items-center">
        <div className="text-sm w-5   ">
          <FontAwesomeIcon size="sm" icon={faJs} color="#607B96" />
          
        </div>
        <div>JavaScript</div>
        </div>

        </div>
        <div className="w-25 flex gap-6">
            <input type="checkbox" name="" id="" />
        <div className="w-25 flex gap-2 items-center">
        <div className="text-sm w-6   ">
        <TbBrandNextjs size="1.5rem" />
          
        </div>
        <div>Nextjs</div>
        </div>

        </div>
        <div className="w-25 flex gap-6">
            <input type="checkbox" name="" id="" />
        <div className="w-25 flex gap-2 items-center">
        <div className="text-sm w-6   ">
        <SiNestjs  size={"1.5rem"}/>

          
        </div>
        <div>Nestjs</div>
        </div>

        </div>
       
      </div>
      {children}
    </section>
  );
};

export default layout;
