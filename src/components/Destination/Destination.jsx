/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import NavBar from "../NavBar";
import Planets from "./Planets";
import { destinations } from '../../data/data.json'

export default function Destination () {
  const [info, setInfo] = useState(destinations[0])
  const [selected, setSelected] = useState(destinations[0].name)
  const onSelect = (e) => {
    setInfo(e)
    setSelected(e.name)
  }
  return (
    <>
      <NavBar />
      <section>
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src="https://res.cloudinary.com/demf45vva/image/upload/v1684962108/bg-destination_imxsjj.webp" alt="bg-space" className="object-cover  h-full w-full" />
        </div>
      </section>

      <main className="relative h-[80vh] grid lg:grid-cols-2">
        <div className="flex flex-col items-center justify-self-center justify-around lg:justify-center">
          <div className="flex gap-4 pb-4 sm:pb-16">
            <span className="text-[#616670] font-bold text-xl">01</span>
            <h2 className="text-[#cfd3d8] text-xl font-medium font-Ysabeau">PICK YOUR DESTINATION</h2>
          </div>
          <img className="h-52 lg:h-96 md:h-72" src={info.images.png} alt={info.name} />
        </div>
        <div className='flex flex-col items-start justify-self-center justify-around lg:justify-center w-full '>
          <ul className="flex justify-center items-center self-center lg:self-start  gap-10 pb-10">
            {
              destinations.map(d => {
                return (
                  <button key={d.name} onClick={() => onSelect(d)} className={selected === d.name ? 'border-b-[3px] flex font-Roboto gap-4 text-sm py-4 text-[#e2e9ff] font-semibold' : 'flex font-Roboto gap-4 hover:border-b-[2px] hover:border-slate-500 text-sm py-4 text-[#e2e9ff]'}>{(d.name).toUpperCase()}</button>
                )
              })
            }
          </ul>
          <Planets info={info} />
        </div>
      </main>
    </>
  )
}
