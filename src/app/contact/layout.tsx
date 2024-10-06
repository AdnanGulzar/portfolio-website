import {
  faGithub,
  faLinkedinIn,
  
} from "@fortawesome/free-brands-svg-icons";
import {
  
  faMailBulk,
  faCode,
  faPhone
  
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { socialLink } from "@/data/socialLinks";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex h-[100%] gap-2 ">
      <div className="hidden  p-2  pr-5 md:flex h-full flex-col gap-5 ">
        <h1 className="text-xl border-border border-2 "> Contacts</h1>
        <div className="w-25 flex gap-5">
          <a href={socialLink.toEmail} className="w-25 flex gap-2 items-center">
            <div className="text-sm w-6   ">
              <FontAwesomeIcon size="sm" icon={faMailBulk} color="#607B96" />
            </div>
            <div>adnan.gull548922@gmail.com</div>
          </a>
        </div>
        <div className="w-25 flex gap-6">
          <a href={socialLink.toPhone} className="w-25 flex gap-2 items-center">
            <div className="text-sm w-6   ">
              <FontAwesomeIcon size="sm" icon={faPhone} color="#607B96" />
            </div>
            <div>+923059361889</div>
          </a>
        </div>
        <h1 className="text-xl border-border border-2 "> Find me also</h1>
        <div className="w-25 flex gap-6">
          <a href={socialLink.linkenIn} className="w-25 flex gap-2 items-center">
            <div className="text-sm w-5   ">
              <FontAwesomeIcon size="sm" icon={faLinkedinIn} color="#607B96" />
            </div>
            <div>adnan gulzar</div>
          </a>
        </div>
        <div className="w-25 flex gap-6">
          <a href={socialLink.gitHub}  className="w-25 flex gap-2 items-center">
            <div className="text-sm w-6   ">
            <FontAwesomeIcon size="sm" icon={faGithub} color="#607B96" />
            </div>
            <div>Github</div>
          </a>
        </div>
        <div className="w-25 flex gap-6">
          <a href={socialLink.leetCode} className="w-25 flex gap-2 items-center">
            <div className="text-sm w-6   ">
            <FontAwesomeIcon size="sm" icon={faCode} color="#607B96" />
            </div>
            <div>LeetCode</div>
          </a>
        </div>
      </div>
      {children}
    </section>
  );
};

export default layout;
