import { faBars, faCircleUser, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

function Navbar({ favourites }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <div className={`sticky top-0 z-50 ${scrolled ? 'bg-black/80' : 'bg-black'} py-2 px-4`}>
            {/* <div className="relative max-w-xs mx-auto">
                            <form action="/">
                                <input type="text" className="bg-gray-300 size-full my-3 rounded-xl h-6 pl-3 pr-15 py-2" />
                                <button className="absolute my-3 right-0 pr-4 bg-black rounded-r-xl pl-3 active:bg-gray-600 text-orange-700 active:text-black hover:bg-gray-800" >
                                    <FontAwesomeIcon icon={faSearch} className="" />
                                </button>
                            </form>
                        </div> */}
            <nav className="flex justify-between items-center w-[92%] mx-auto py-1 ">
                <h1 className="text-orange-700 font-bold text-xl">NONTONS</h1>
                <ul className={`absolute md:static bg-black/80 md:bg-black/0 z-20 ${isMenuOpen ? 'top-full' : 'top-[-1500%]'} left-0 w-full md:w-auto flex items-center flex-col md:flex-row gap-[10vh] md:gap-10 lg:gap-20 min-h-[60vh] md:min-h-fit justify-center duration-400`}>
                    <li>
                        <Link to={'/'} className={`hover:text-orange-700 ${location.pathname === '/' ? 'text-yellow-400' : 'text-white'}`}>Now Playing</Link>
                    </li>
                    <li>
                        <Link to={'/popular'} className={`hover:text-orange-700 ${location.pathname === '/popular' ? 'text-yellow-400' : 'text-white'}`}>Popular</Link>
                    </li>
                    <li>
                        <Link to={'/top-rated'} className={`hover:text-orange-700 ${location.pathname === '/top-rated' ? 'text-yellow-400' : 'text-white'}`}>Top Rated</Link>
                    </li>
                    <li>
                        <Link to={'/favourites'} className={`hover:text-orange-700 ${location.pathname === '/favourites' ? 'text-yellow-400' : 'text-white'} md:!hidden`}>Favourites</Link>
                    </li>
                </ul>
                <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="text-orange-700 cursor-pointer md:!hidden" size="xl" onClick={(e) => setIsMenuOpen(!isMenuOpen)} />
                <Link to={'/favourites'} className={`text-orange-700 hover:text-orange-700  cursor-pointer !hidden md:!block  ${location.pathname === '/favourites' ? 'text-yellow-400' : 'text-white'}`}>Favourites {favourites.length > 0 ? favourites.length : 'tidak'}</Link>
            </nav>
        </div>
    )
}

export default Navbar