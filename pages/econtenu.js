/* eslint-disable @next/next/no-img-element */
import Section from '/components/section'
import Image from 'next/image'
import eContenu from "../public/images/econtenu.PNG"


function Econtenu() {
  return (
    <Section className="h-screen lg:px-6 px-0 lg:justify-start flex items-center justify-center">
      <div>
        <Image src={eContenu}
          alt="E-contenu"
          quality="100"
          priority
        />
      </div>
    </Section>
  )
}

export default Econtenu
