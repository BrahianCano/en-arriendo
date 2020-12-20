import React/*, { useState }*/ from 'react';

// Import molecules //
//import NavbarDropdown from '../molecules/navbar-dropdown';
import IconSearch from '../../assets/svg/icon-search';
import IconPublic from '../../assets/svg/icon-public';


export default function NavbarAnchors() {
    //const [isOpenDrop, setIsOpenDrop] = useState(false);

    return (
        <nav className="hidden md:flex space-x-10">
            <a href="#"
               className="text-base flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <IconSearch color="#52525b" size={24} />
                <span className="ml-1">Buscar arriendo</span>
            </a>
            <a href="#"
               className="text-base flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <IconPublic color="#52525b" size={22} />
                <span className="ml-1">Publicar propiedad</span>
            </a>
            {
                /** <!--Dropdown options.--> */
                /**
                 <div className="relative">
                 <button type="button" onClick={() => setIsOpenDrop(!isOpenDrop)} className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                 <span>More</span>

                 <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                 </svg>
                 </button>

                 <NavbarDropdown isOpenDrop={isOpenDrop} />

                 </div>
                 */
            }
        </nav>
    )
}