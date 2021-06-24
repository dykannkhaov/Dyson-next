/* eslint-disable react/no-unescaped-entities */
import Section from '/components/section'

function About() {
  return (
    <Section className="h-screen lg:pt-20 lg:pl-20 md:pt-10 md:pl-10 pt-12 pl-6">
      <p className="md:text-base w-1/2 font-light text-sm">
        Dyson est une société anglaise d’électroménager, fondée et présidée par James Dyson. <br />
        Les principaux produits de cette entreprise sont des aspirateurs à séparation cyclonique sans sac, des
        purificateurs d'air, des ventilateurs, des sèche-cheveux et des sèche-mains. <br /> <br />
        En mai 1993, Dyson sort son premier aspirateur à séparation cyclonique au prix de 200 livres sterling qui mènera
        à un chiffre d'affaires de 2,9 millions en 1994 et 9 millions l'année suivante.
        <br />
        <br />
        En 2018, Dyson dépose le brevet Digital Motors nommé en l'honneur de sa future marque automobile prévu pour
        2020, James Dyson tente avec un plan d'investissement de 2.2 milliards d'euros de créer sa propre automobile.
        Avec 400 collaborateurs, le but était de créer une automobile innovante par rapport aux autres de sa catégorie.
        <br /> Cependant, le 11 octobre 2019, Dyson abandonne ce projet à cause des problèmes courants liée la
        complexité à créer des moteurs solides à grandes échelles tout en gardant un aspect rentable pour pérenniser
        l'entreprise.
      </p>
    </Section>
  )
}

export default About