"use client";
import Hamburger from "hamburger-react";
import React from "react";
import Sidebar from "react-sidebar";

const SidebarSection = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Sidebar
      sidebar={
        <>
            <div className="absolute right-1">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}  />
            </div>
          <ul className="text-center pt-10 flex flex-col gap-5">
            <li>_hello</li>
            <li>_hello</li>
            <li>_hello</li>
            <li>_hello</li>
          </ul>{" "}
        </>
      }
      open={isOpen}
      docked={false}
      // touch={true}
      // shadow={true}
      onSetOpen={() => setIsOpen(!isOpen)}
      styles={{
        sidebar: {
          background: "#011627",
          padding: "10px",
          width: "200px",
          transition: "all 1s linear",
        },
      }}
    ></Sidebar>
  );
};

export default SidebarSection;
