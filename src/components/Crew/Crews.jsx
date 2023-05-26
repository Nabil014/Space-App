import { useState } from 'react'
import NavBar from '../NavBar'
import Crew from './Crew'
import { crew } from '../../data/data.json'

export default function Crews () {
  const [newCrew, setNewCrew] = useState(crew[0])
  const [crewSelected, setCrewSelected] = useState(crew[0].name)

  const onSelect = (e) => {
    setNewCrew(e)
    setCrewSelected(e.name)
  }
  return (
    <div>
      <NavBar />
      <section>
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <img src="https://res.cloudinary.com/demf45vva/image/upload/v1685029747/background-crew-desktop_u0jcmc.jpg" alt="bg-crew" className="object-cover  h-full w-full" />
        </div>
      </section>
      <main className="relative flex flex-col-reverse justify-around lg:h-[88vh] h-[90vh] lg:grid lg:grid-cols-2">
        <div className='flex justify-around lg:justify-end'>

          <div className="flex flex-col lg:items-center lg:justify-center lg:gap-28 lg:w-[70%]">
            <div className="flex gap-2 pl-2 md:gap-4 w-full">
              <span className="text-[#616670] font-bold text-xl">02</span>
              <h2 className="text-[#cfd3d8] text-xl font-semibold font-Roboto ">MEET YOUR CREW</h2>
            </div>

            <Crew newCrew={newCrew} />
            <ul className="flex justify-around w-full gap-14">
              {
                crew.map((crew) => {
                  return (
                    <button key={crew.name} className={crewSelected === crew.name ? 'h-5 w-5 rounded-full bg-white ' : 'h-5 w-5 rounded-full bg-[#616670] transition-colors hover:bg-[#a5aab6]'} onClick={() => onSelect(crew)} />
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='flex lg:self-end place-content-center'>
          <img className="h-[300px] lg:h-[550px]" src={newCrew.images.png} alt="MARS" />
        </div>
      </main>
    </div>
  )
}
