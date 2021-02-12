import Link from 'next/link';

// Import icons svg //
import IconSearch from '../../assets/svg/icon-search';

// Import icons svg //
import PublishButton from "./Publish-button";


export default function NavbarAnchors() {

    return (
        <>
            <nav className="hidden md:flex space-x-10 opacity-100">
                <Link href="/buscar-propiedad">
                    <a
                        className="flex text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        <IconSearch color="#52525b" size={24}/>
                        <span className="ml-1">Buscar arriendo</span>
                    </a>
                </Link>
                <PublishButton showIcon="true"/>
            </nav>
        </>
    )
}