/* eslint-disable react/no-unescaped-entities */
import Section from '/components/section'

function Index() {
  return (
    <Section className="h-screen md:pl-8 md:pt-12 lg:pt-10 lg:pl-24 pt-16 pl-1">
      <div className="text-3xl md:mb-4 lg:mb-8 mb-1">
        <span className="font-extrabold mr-2">dyson</span>
        <span className="text-blue-500 font-bold mr-2">v15</span>
        <span className="text-gray-500 font-semibold">detect</span>
      </div>
      <h2 className="md:text-3xl md:tracking-normal lg:text-4xl lg:tracking-wider text-gray-700 font-light mb-4 text-xl">
        Découvrez notre nouvelle technologie
      </h2>
      <h2 className="md:text-3xl md:tracking-normal lg:text-4xl lg:tracking-wider text-gray-700 font-light mb-3 text-xl">
        Son laser révèle la poussière microscopique
      </h2>
      <p className="text-gray-700 font-semibold mb-6 lg:text-base md:text-base text-sm">
        L'aspirateur sans fil Dyson le plus puissant et intelligent.
      </p>
      <div>
        <button className="md:py-5 md:px-6 p-3 bg-gray-700 text-white mr-3 hover:bg-gray-800">En savoir plus</button>
        <button className="md:py-5 md:px-6 p-3 bg-green-600 font-semibold hover:bg-green-700">
          Achetez maintenant
        </button>
      </div>
    </Section>
  )
}

export default Index