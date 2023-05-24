import { Link } from 'react-router-dom';
import NavBar from "./NavBar";

export default function Home () {
  return (
    <main>
      <NavBar />
      <section>
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src="../src/assets/media/globe-1849404.webp" alt="bg-space" className="object-cover  h-full w-full" />
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-4 relative w-screen h-[80vh] lg:justify-center justify-around ">
        <div className=" flex justify-self-center">
          <div className="flex px-4 justify-center flex-col">
            <h3 className="text-slate-300 font-Ysabeau font-medium self-start text-xl">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="text-white font-Castoro font-medium text-8xl lg:text-9xl pt-7">SPACE</h1>
            <p className="text-[#bec4e4] font-Roboto lg:w-[80%] md:w-[70%] font-semibold text-sm md:text-lg  pt-8 tracking-[0.5px]">Let&apos;s  face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we`ll give you a truly out of this world experience!</p>
          </div>
        </div>
        <div className="flex items-center justify-center  lg:pt-20">
          <Link to={'destination'} className="text-black hover:scale-105 transition-all hover:shadow-slate-600 flex bg-white w-52 h-52 font-Castoro text-3xl font-medium rounded-full items-center justify-center hover_explore">EXPLORE</Link>
        </div>
      </section>
    </main>
  )
}
