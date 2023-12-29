"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useEffect, useRef, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import SidebarSection from './Sidebar';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavMobile } from './MobileNav';
import { routes } from "@/data/routeList";
const Header = () => {
 
 
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false);
  
  return (<>
      {/* {<SidebarSection isOpen={isOpen} setIsOpen={setOpen} />}    */}
    <header className="flex flex-row justify-between items-center border  rounded-t-lg border-border ">
    <Link href={"/"}> <h1 className="text-2xl font-bold text-center text-primary pl-3 border-x px-10 h-full border-border py-1 z-10">
        Adnan Gul
      </h1>
      </Link>
      <nav className=" flex-row justify-between p-1 hidden md:flex ">
        {
          routes.map((route,index)=>{
            return  <Link key={index} href={route.href}><li className={cn("border-x px-10 h-full border-border py-1 hover:bg-blue transition-all ease-linear",pathname===route.href?"bg-blue":"")}>{route.title}</li></Link>
          })
        }


      </nav>
      <Link href={"/contact"}><li className={cn(" hidden md:flex border-x px-10 h-full border-border py-1 hover:bg-blue transition-all ease-linear",pathname==="/contact"?"bg-blue":"")}>_contact me</li></Link>
      <div  className='block md:hidden'>
        {/* <Hamburger toggled={isOpen} toggle={setOpen} size={20} /> */}
      </div>
      <NavMobile/>
    </header>
    </>
    
  );
};

export default Header;
