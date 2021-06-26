/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
// import { Link, useLocation } from 'react-router-dom'

import Link from "next/link"
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useRouter } from "next/router"

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const closeMenuOnDesktop = (e) => {
      if (e.target.innerWidth >= 1024) {
        if (isMenuOpen) return
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', closeMenuOnDesktop)
    return () => {
      window.removeEventListener('resize', closeMenuOnDesktop)
    }
  }, [])

  const router = useRouter()

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [router])

  return (
    <div
      className={`relative px-4 flex justify-between lg:justify-around lg:items-center h-16 text-sm text-gray-300 font-light
    ${isMenuOpen ? 'mb-56' : 'mb-0'}`}
    >
      <nav className="flex items-center">
        <Link href="/">
          <a>
            <img
              className="cursor-pointer w-20"
              src="https://cdn.discordapp.com/attachments/691321186797486100/841246324623671296/Dyson-Embleme.png"
              alt="dyson logo"
            />
          </a>
        </Link>
        <Link href="/about">
          <a className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Qui sommes nous
          </a>
        </Link>
        <Link href="/diagnostic">
          <a className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Diagnostic stratégique
          </a>
        </Link>
        <Link href="/segmentation">
          <a className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Segmentation
          </a>
        </Link>
        <Link href="/strategie">
          <a className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            Stratégie web
          </a>
        </Link>
        <Link href="/econtenu">
          <a className="lg:block hidden ml-6 cursor-pointer hover:text-white">
            E-contenu
          </a>
        </Link>
      </nav>

      <div className="flex items-center">
        <span className="border-b border-white cursor-pointer pr-12 pb-1 hidden lg:block">
          Rechercher des produits et accesoires
        </span>
        <nav id="hamnav" className="lg:hidden">
          <label
            htmlFor="hamburger"
            className="inline-block text-gray-400 hover:text-white text-3xl cursor-pointer"
            onClick={handleClick}
          >
            &#9776;
          </label>
          <input type="checkbox" id="hamburger" className="hidden" />

          {isMenuOpen ?
            <div id="hamitems" className="bg-black absolute left-0 bottom-0 transform translate-y-full w-full">
              <Link href="/about">
                <a className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                  Qui sommes nous
                </a>
              </Link>
              <Link href="/diagnostic">
                <a className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                  Diagnostic stratégique
                </a>
              </Link>
              <Link href="/segmentation">
                <a className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                  Segmentation
                </a>
              </Link>
              <Link href="/strategie">
                <a className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                  Stratégie web
                </a>
              </Link>
              <Link href="/econtenu">
                <a className="box-border block text-white border-t hover:bg-gray-900 text-lg p-2">
                  E-contenu
                </a>
              </Link>
            </div>
            : null
          }

        </nav>
        <FaSearch className="cursor-pointer hover:text-white text-xl lg:block hidden" />
        <FaTrashAlt className="text-xl cursor-pointer hover:text-white ml-6 lg:block hidden" />
      </div>
    </div>
  )
}

export default Nav