import React from 'react';

// Import icons svg //
import IconSearch from '../../assets/svg/icon-search';
import IconPublic from '../../assets/svg/icon-public';


export default function NavbarAnchors() {

    return (
        <nav className="hidden md:flex space-x-10">
            <a href="#"
               className="text-base flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <IconSearch color="#52525b" size={24}/>
                <span className="ml-1">Buscar arriendo</span>
            </a>
            <a href="#"
               className="text-base flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <IconPublic color="#52525b" size={22}/>
                <span className="ml-1">Publicar propiedad</span>
            </a>
        </nav>
    )
}