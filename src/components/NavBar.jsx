import { useState } from "react";
import { Link, } from "react-router-dom";

export default function NavBar () {

  const [showNavbar, setShowNavbar] = useState(false)
  const url = new URL(window.location.href);

  return (
    <nav>
      <header className="relative md:pt-6 z-40 items-center top-0  text-white flex justify-around lg:grid lg:grid-cols-2 gap-2">
        <div className="flex ">
          <svg src="../../src/icon/logo.svg" alt="logo" className="md:px-11 " />
          <div className="h-[1px] hidden w-[70%] items-center left-32 bg-slate-500/30 self-center lg:flex  z-40"></div>
        </div>
        <nav className={`bg-gradient-to-r w-[70vw] md:visible transition-transform lg:w-full pt-6 from-slate-600/30 via-transparent to-slate-600/10 backdrop-blur-sm ${showNavbar ? "visible" : "invisible"}`}>
          <ul className="text-white font-Roboto  md:tracking-[0.5px] flex text-xs md:text-sm justify-around ">

            <Link className={url.pathname === '/' ? 'pb-6 border-b-[3px] flex gap-1 md:gap-2' : 'hover:pb-6 hover:border-b-[2px] hover:border-slate-500 flex gap-1 md:gap-2'} to={'/'}><span className="font-bold hidden md:block font-Roboto">00</span> HOME</Link>

            <Link className={url.pathname === '/destination' ? 'pb-6  border-b-[3px] flex gap-1 md:gap-2' : 'flex gap-1 md:gap-2 hover:pb-6 hover:border-slate-500 hover:border-b-[2px]'} to={'/destination'} ><span className="font-bold hidden md:block font-Roboto gap-4">01</span> DESTINATION</Link>

            <Link className={url.pathname === '/crews' ? 'pb-6  border-b-[3px] flex gap-1 md:gap-2' : 'flex gap-1 md:gap-2 hover:pb-6 hover:border-slate-500 hover:border-b-[2px]'} to={'/crews'} ><span className="font-bold hidden md:block font-Roboto gap-4">02</span> CREW</Link>

            <Link className={url.pathname === '/technology' ? 'pb-6  border-b-[3px] flex gap-1 md:gap-2' : 'flex gap-1 md:gap-2 hover:pb-6 hover:border-slate-500 hover:border-b-[2px]'} to={'/technology'} ><span className="font-bold hidden md:block font-Roboto gap-4">03</span> TECHNOLOGY</Link>
          </ul>
        </nav>
        <svg src='../../src/icon/icon-hamburger.svg' className="md:hidden z-40 cursor-pointer" onClick={() => setShowNavbar(!showNavbar)} alt="icon-hamburger" />
      </header>
    </nav>
  )
}
