"use client";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavMobile } from './MobileNav';
import { routes } from "@/data/routeList";
import CircularText from './CircularText';
const Header = () => {
 
 
  const pathname = usePathname()

  
  return (<>
    <header className="flex flex-row justify-between items-center border  rounded-t-lg border-border relative">
    <Link href={"/"}> <h1 className="text-2xl font-bold text-center text-primary pl-3 border-x px-10 h-full border-border py-1 z-10">
        Adnan Gul
      </h1>
      </Link>
      <nav className=" flex-row justify-between p-1 hidden md:flex ">
        {
          routes.map((route,index)=>{
            if(route?.title==="_contact"){
              return ""
            }
            return  <Link key={index} href={route.href}><div className={cn("border-x px-10 h-full border-border py-1 hover:bg-blue transition-all ease-linear",pathname===route.href?"bg-blue":"")}>{route.title}</div></Link>
          })
        }


      </nav>
      <Link href={"/contact"}><div className={cn(" hidden md:flex border-x px-10 h-full border-border py-1 hover:bg-blue transition-all ease-linear",pathname==="/contact"?"bg-blue":"")}>_contact me</div></Link>
      <div  className='block md:hidden'>
        {/* <Hamburger toggled={isOpen} toggle={setOpen} size={20} /> */}
      </div>
      <NavMobile/>
      
        <CircularText/>
    </header>
    </>
    
  );
};

export default Header;
