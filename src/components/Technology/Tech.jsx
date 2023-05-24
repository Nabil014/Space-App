
export default function Tech ({ infoTech }) {
  return (
    <div className="flex flex-col gap-y-6 text-[#e2e9ff]">
      <h3 className="text-xs font-Roboto font-semibold text-[#9ca3b8]">THE TERMINOLOGY...</h3>
      <h1 className="text-4xl font-Castoro">{infoTech.name}</h1>
      <p className="font-Roboto font-semibold tracking-[1px] text-[#c3d1ff] text-xs md:w-[80%]">{infoTech.description}</p>
    </div>
  )
}
