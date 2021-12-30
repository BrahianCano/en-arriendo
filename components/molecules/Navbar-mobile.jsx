import {useState} from "react";
import {Transition} from '@headlessui/react'
import Link from 'next/link'

// Import icons svg //
import IconPublic from '../svg/Icon-public';
import IconSearch from '../svg/Icon-search';
import IconHome from '../svg/Icon-home';
import IconLocal from '../svg/Icon-local';
import IconApartament from '../svg/Icon-apartament';
import IconFarm from '../svg/Icon-farm';
import IconClose from '../svg/Icon-close';

// Import organisms //
import PublishRealestate from "../organisms/Publish-realestate";
import SectionFilters from "../organisms/Section-filters";

/**
 * -- PROPS ENTRIES --
 * @isOpenMenu prop Bool: true = open
 * @setIsOpenMenu prop Function: close menu
 * @return NavbarMobile
 */
export default function NavbarMobile({isOpenMenu, setIsOpenMenu}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Transition
                show={isOpenMenu}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
 
                    <div >
                        <div className="absolute top-0 inset-0 z-50 p-2 transition transform origin-top-right md:hidden">
                            <div className="h-screen rounded-lg shadow-lg ring-1 p-5 ring-black ring-opacity-5 bg-lightgray">
                                <div>
                                    <div className="flex items-center justify-between">

                                        {/** <!--Logo webpage.--> */}
                                        <div>
                                            <img className="h-8 w-auto"
                                                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                 alt="Workflow"/>
                                        </div>

                                        {/** <!--Mobile menu button, hidden to action.--> */}
                                        <div className="-mr-2">
                                            <button type="button" onClick={() => setIsOpenMenu(false)}
                                                    className="rounded-md p-2 inline-flex items-center justify-center bg-third focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryDark">
                                                <IconClose size="26"/>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="my-10">

                                        {/** <!--Links redirect.--> */}
                                        <nav className="grid gap-y-8">

                                            <Link href="/buscar-propiedad">
                                                <a onClick={() => {
                                                    setIsOpenMenu(false);
                                                }}
                                                   className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                                    <IconSearch size={26} className="flex-shrink-0 h-6 w-6"/>
                                                    <span className="ml-3 text-gray-900">
                                                Buscar arriendo
                                            </span>
                                                </a>
                                            </Link>

                                            <a href="#" onClick={() => {
                                                setShowModal(true);
                                                setIsOpenMenu(false);
                                            }}
                                               className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                                <IconPublic size={24} className="flex-shrink-0 h-6 w-6"/>
                                                <span className="ml-3 text-gray-900">
                                                Publicar propiedad
                                            </span>
                                            </a>
                                        </nav>
                                    </div>
                                    <hr/>
                                </div>
                                <div>
                                    {/** <!--Section for users.--> */}
                                    <section className="my-5">

                                        <h3 className="text-primary font-axiformaHeavy mb-3">Encuentra en arriendo</h3>

                                        {/** <!--Anchors to action.--> */}
                                        <div className="grid grid-cols-2 gap-y-6">

                                            <a href="#" className=" flex text-gray-900 hover:text-gray-700">
                                                <IconHome size="24"/>
                                                <span className="ml-1">Casas</span>
                                            </a>

                                            <a href="#" className=" flex text-gray-900 hover:text-gray-700">
                                                <IconApartament size="24"/>
                                                <span className="ml-1">Apartamentos</span>
                                            </a>

                                            <a href="#" className=" flex text-gray-900 hover:text-gray-700">
                                                <IconFarm size="24"/>
                                                <span className="ml-1">Fincas</span>
                                            </a>

                                            <a href="#" className=" flex text-gray-900 hover:text-gray-700">
                                                <IconLocal size="24"/>
                                                <span className="ml-1">Locales</span>
                                            </a>

                                        </div>
                                    </section>
                                    <hr/>
                                    {/** <!--Section for companies.--> */}
                                    <section className="my-5">
                                        <h3 className="text-primary font-axiformaHeavy mb-3">Trabajemos juntos</h3>
                                        <Link href="/para-inmobiliarias">
                                            <button onClick={() => setIsOpenMenu(false)}
                                                    className="inline-flex items-center justify-center px-4 py-2.5 w-full md:w-32 border border-transparent rounded-md shadow-md text-base text-white bg-primary hover:bg-primaryDark">
                                                Para Inmobiliarias
                                            </button>
                                        </Link>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </Transition>
            <PublishRealestate showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
}