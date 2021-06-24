import Nav from '/components/nav'

function Header(props) {
  return (
    <header className="bg-black">
      <div className="flex items-center justify-end text-gray-500 text-xs border-b border-gray-700 h-8 pr-20">
        <span className="hover:text-white cursor-pointer">Trouver une boutique</span>
        <span className="ml-8 hover:text-white cursor-pointer">Newsroom</span>
        <span className="ml-8 hover:text-white cursor-pointer">Activer votre garantie</span>
      </div>
      <Nav />
    </header>
  )
}

export default Header