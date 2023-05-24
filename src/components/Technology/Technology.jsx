import { useState } from 'react'
import NavBar from '../NavBar'
import { technology } from '../../data/data.json'
import Tech from './Tech'

export default function Technology () {
  const [infoTech, setInfoTech] = useState(technology[0])

  const onSelect = (tech) => {
    setInfoTech(tech)
  }

  return (
    <div>
      <NavBar />
      <section>
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src="/src/assets/technology/background-technology-desktop.jpg" alt="bg-space" className="object-cover  h-full w-full" />
        </div>
      </section>

      <main className="relative h-[84vh] gap-4 flex flex-col-reverse px-4 md:grid md:grid-cols-2">
        <div className='flex justify-center md:justify-end'>
          <div className="flex flex-col md:items-center md:justify-center md:gap-28 w-[80%] md:w-[70%]">

            <div className="flex gap-4 w-full">

              <span className="text-[#616670] font-bold text-xl">03</span>
              <h2 className="text-[#cfd3d8] text-xl font-semibold font-Roboto ">SPACE LAUNCH 101</h2>
            </div>
            <div className='flex flex-row-reverse gap-6 md:gap-8 md:justify-center items-center'>
              <Tech infoTech={infoTech} />
              <ul className="flex flex-col w-full gap-8">
                {
                  technology.map((tech, index) => {
                    return (
                      <li key={tech.name} className={infoTech.name === tech.name ? 'h-14 w-14 flex rounded-full justify-center items-center bg-white cursor-pointer font-Castoro text-2xl' : 'h-14 w-14 rounded-full border-[#616670] border-solid border-2 text-white hover:border-white transition-colors flex justify-center items-center font-Castoro text-2xl cursor-pointer'} onClick={() => onSelect(tech)}>{index + 1}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className='flex self-center place-content-end'>
          <img className="h-[300px] md:h-[500px]" src={infoTech.images.portrait} alt="MARS" />
        </div>
      </main>
    </div>
  )
}
