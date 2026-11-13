import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CircleUserRound } from "lucide-react"

function Navbar() {
    return (

        <div className="bg-black py-2 px-4 ">
            {/* <div className="relative max-w-xs mx-auto">
                            <form action="/">
                                <input type="text" className="bg-gray-300 size-full my-3 rounded-xl h-6 pl-3 pr-15 py-2" />
                                <button className="absolute my-3 right-0 pr-4 bg-black rounded-r-xl pl-3 active:bg-gray-600 text-orange-700 active:text-black hover:bg-gray-800" >
                                    <FontAwesomeIcon icon={faSearch} className="" />
                                </button>
                            </form>
                        </div> */}
            <div className="flex justify-between items-center">
                <h1 className="text-orange-700 font-bold text-xl">NONTONS</h1>
                <FontAwesomeIcon icon={faBars} className="text-orange-700" size="xl" />
            </div>
        </div>
    )
}

export default Navbar