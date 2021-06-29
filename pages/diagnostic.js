/* eslint-disable @next/next/no-img-element */
import Section from '/components/section'
import Image from 'next/image'
import infoDyson from "../public/images/details.PNG"
import competitorsOfDyson from "../public/images/concurrence.PNG"

function Diagnostic() {
  return (
    <Section className="lg:flex lg:justify-evenly lg:h-screen h-full md:py-6 py-0">
      <div className="flex lg:flex-row flex-col items-center ">
        <Image src={infoDyson}
          alt="Diagnostic Dyson"
          quality="100"
          priority
        />
        <Image src={competitorsOfDyson}
          alt="Concurrence Dyson"
          quality="100"
          priority
        />
      </div>
    </Section>
  )
}

export default Diagnostic


