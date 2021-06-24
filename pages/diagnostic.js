/* eslint-disable @next/next/no-img-element */
import Section from '/components/section'

function Diagnostic() {
  return (
    <Section className="lg:flex lg:justify-evenly lg:h-screen h-full md:py-6 py-0">
      <div className="flex lg:flex-row flex-col items-center ">
        <img
          className="lg:pb-16 lg:mr-2"
          src="details.PNG"
          alt="diagnostic dyson"
        />
        <img src="concurrence.PNG"
          alt="concurrence dyson"
        />
      </div>
    </Section>
  )
}

export default Diagnostic