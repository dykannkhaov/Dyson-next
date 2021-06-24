import { FaTruck, FaStar, FaExchangeAlt, FaEuroSign } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark-gray text-gray-300 py-4 md:text-sm text-xs">
      <div className="flex justify-evenly">
        <div className="flex mr-1">
          <FaStar className="text-white text-3xl mr-2" />
          <ul>
            <li className="text-white">Produits exclusifs</li>
            <li>Des produits exclusivement</li>
            <li>disponibles sur dyson.fr et dans</li>
            <li>nos Dyson demo stores</li>
          </ul>
        </div>

        <div className="flex">
          <FaTruck className="text-white text-3xl mr-2" />
          <ul>
            <li className="text-white">Livraison gratuite</li>
            <li>Pour toutes commandes</li>
            <li>supérieures à 60€</li>
            <li>Livraison en 24h*</li>
          </ul>
        </div>

        <div className="flex">
          <FaExchangeAlt className="text-white text-3xl mr-2" />
          <ul>
            <li className="text-white">Droit de rétraction 30 jours</li>
            <li>14 jours pour un paiement en</li>
            <li>4x sans frais</li>
          </ul>
        </div>
        <div className="flex">
          <FaEuroSign className="text-white text-2xl mr-1" />
          <ul>
            <li className="text-white">Paiement en 4x sans frais</li>
            <li>Echelonner votre paiement en 4x sans frais</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer