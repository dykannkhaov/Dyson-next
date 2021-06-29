/* eslint-disable @next/next/no-img-element */
import Section from '/components/section'
import Image from 'next/image'

function Diagnostic() {
  return (
    <Section className="lg:flex lg:justify-evenly lg:h-screen h-full md:py-6 py-0">
      <div className="flex lg:flex-row flex-col items-center ">
        <Image src="/images/details.PNG"
          alt="diagnostic dyson"
          width="550"
          height="600"
          quality="100"
          priority
        />
        <Image src="/images/concurrence.PNG"
          alt="concurrence dyson"
          width="620"
          height="400"
          quality="100"
          priority
        />
      </div>
    </Section>
  )
}

export default Diagnostic


