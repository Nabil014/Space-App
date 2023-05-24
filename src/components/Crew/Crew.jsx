
export default function Crew ({ newCrew }) {
  return (
    <section className="text-[#e2e9ff] px-7 lg:px-0 flex flex-col gap-2 pb-4 md:gap-5">
      <h2 className="font-Castoro text-[#9ca3b8] self-start text-2xl lg:text-3xl">{newCrew.role}</h2>
      <h1 className="font-Castoro self-start text-4xl lg:text-5xl">{newCrew.name}</h1>
      <p className="lg:w-[70%] justify-center lg:self-start font-Roboto font-semibold tracking-[1px] text-[#c3d1ff] text-sm">{newCrew.bio}</p>
    </section>
  )
}
