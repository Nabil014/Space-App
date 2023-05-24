
export default function Planets ({ info }) {
  return (
    <div>

      <h1 className="text-[#e9eeff] flex justify-center items-center lg:justify-start text-6xl md:text-8xl font-Castoro">{info.name}</h1>
      <p className="text-[#bfceff] flex font-Roboto px-12 lg:px-0  text-center lg:text-start font-semibold text-md lg:w-[60%] mt-4">{info.description}</p>

      <div className="h-[2px] md:mt-8 mt-6 lg:w-[70%] bg-[#373a43]"></div>

      <div className="flex justify-center items-center lg:justify-start md:mt-8 mt-6 gap-16 text-white">
        <div className="flex flex-col justify-center items-center">
          <span className="font-Roboto text-xs font-semibold text-[#bfceff]">AVG. DISTANCE</span>
          <p className="font-Castoro pt-2 text-2xl  text-[#bfceff]">{info.distance}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <span className="font-Roboto text-xs font-semibold text-[#bfceff]">EST. TRAVEL TIME</span>
          <p className="font-Castoro w-full flex items-center pt-2 text-2xl text-[#bfceff]">{info.travel}</p>
        </div>
      </div>

    </div>
  )
}
