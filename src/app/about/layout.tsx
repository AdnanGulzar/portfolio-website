import PageTransition from "@/components/PageTransition";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faFolder,
  faFolderBlank,
} from "@fortawesome/free-solid-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons/faBarsProgress";
import { faCodeMerge } from "@fortawesome/free-solid-svg-icons/faCodeMerge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-[100%] gap-2 ">
       {/* <PageTransition/>  */}
      <div className="hidden    p-2  pr-5 md:flex flex-col gap-5 mt-5">
        <div className="text-sm w-6 ">
          <FontAwesomeIcon size="sm" icon={faCode} color="#607B96" />
        </div>
        <div className="text-sm w-6 ">
          <FontAwesomeIcon size="sm" icon={faCodeMerge} color="#607B96" />
        </div>
        <div className="text-sm w-6 ">
          <FontAwesomeIcon size="sm" icon={faBarsProgress} color="#607B96" />
        </div>
        <div className="text-sm w-6 ">
          <FontAwesomeIcon size="sm" icon={faFolderBlank} color="#607B96" />
        </div>
      </div>
      {children}
    </section>
  );
};

export default layout;
