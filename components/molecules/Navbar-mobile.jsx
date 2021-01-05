import {useState} from "react";
import {Transition} from '@headlessui/react'
import Link from 'next/link'

// Import icons svg //
import IconPublic from '../../assets/svg/icon-public';
import IconSearch from '../../assets/svg/icon-search';
import IconHome from '../../assets/svg/icon-home';
import IconLocal from '../../assets/svg/icon-local';
import IconApartament from '../../assets/svg/icon-apartament';
import IconFarm from '../../assets/svg/icon-farm';
import IconClose from '../../assets/svg/icon-close';

// Import organisms //
import PublishRealestate from "../organisms/Publish-realestate";


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
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div ref={ref}>
                        <div
                            className="absolute top-0 inset-0 z-50 p-2 transition transform origin-top-right md:hidden">
                            <div
                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
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
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <IconClose size="26"/>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="mt-6">

                                        {/** <!--Links redirect.--> */}
                                        <nav className="grid gap-y-8">

                                            <a href="#"
                                               className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                                <IconSearch size={26} className="flex-shrink-0 h-6 w-6"/>
                                                <span className="ml-3 text-base text-gray-900">
                                                Buscar arriendo
                                            </span>
                                            </a>

                                            <a href="#" onClick={() => {
                                                setShowModal(true);
                                                setIsOpenMenu(false);
                                            }}
                                               className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                                <IconPublic size={24} className="flex-shrink-0 h-6 w-6"/>
                                                <span className="ml-3 text-base text-gray-900">
                                                Publicar propiedad
                                            </span>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <h3 className="text-primary font-axiformaHeavy">Encuentra en arriendo</h3>

                                    {/** <!--Anchors to action.--> */}
                                    <div className="grid grid-cols-2 gap-y-4">

                                        <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                            <IconHome size="24"/>
                                            <span className="ml-1">Casas</span>
                                        </a>

                                        <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                            <IconApartament size="24"/>
                                            <span className="ml-1">Apartamentos</span>
                                        </a>

                                        <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                            <IconFarm size="24"/>
                                            <span className="ml-1">Fincas</span>
                                        </a>

                                        <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                            <IconLocal size="24"/>
                                            <span className="ml-1">Locales</span>
                                        </a>

                                    </div>

                                    {/** <!--Button for companies.--> */}
                                    <div>
                                        <Link href="/para-inmobiliarias">
                                            <a onClick={() => setIsOpenMenu(false)}
                                               className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-primary hover:bg-primaryDark">
                                                Para Inmobiliarias
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
            <PublishRealestate showModal={showModal} setShowModal={setShowModal}/>
        </>
    );
}