import { Transition } from '@headlessui/react'

// Import icons svg //
import IconHome from '../../assets/svg/icon-home';
import IconContact from '../../assets/svg/icon-contact';

import IconClose from '../../assets/svg/icon-close';


export default function NavbarMobile({ isOpenMenu, setIsOpenMenu }) {

    return (
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
                    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">

                                    {/** <!--Logo webpage.--> */}
                                    <div>
                                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                                    </div>

                                    {/** <!--Mobile menu button, hidden to action.--> */}
                                    <div className="-mr-2">
                                        <button type="button" onClick={() => setIsOpenMenu(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <IconClose size="26" />
                                        </button>
                                    </div>

                                </div>
                                <div className="mt-6">

                                    {/** <!--Links redirect.--> */}
                                    <nav className="grid gap-y-8">
                                        <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <IconHome size="26" className="flex-shrink-0 h-6 w-6" />
                                            <span className="ml-3 text-base text-gray-900">
                                                Inicio
                                            </span>
                                        </a>

                                        <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                            </svg>
                                            <span className="ml-3 text-base text-gray-900">
                                                Sobre nosotros
                                            </span>
                                        </a>

                                        <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">

                                            <IconContact size="26" className="flex-shrink-0 h-6 w-6" />
                                            <span className="ml-3 text-base text-gray-900">
                                                Contactanos
                                            </span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <h3 className="text-primary-50">Encuentra en arriendo</h3>

                                {/** <!--Anchors to action.--> */}
                                <div className="grid grid-cols-2 gap-y-4">

                                    <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                        <IconContact size="22" />
                                        <span className="ml-1">Casas</span>
                                    </a>

                                    <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                        <IconContact size="22" />
                                        <span className="ml-1">Apartamentos</span>
                                    </a>

                                    <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                        <IconContact size="22" />
                                        <span className="ml-1">Fincas</span>
                                    </a>

                                    <a href="#" className="text-base flex text-gray-900 hover:text-gray-700">
                                        <IconContact size="22" />
                                        <span className="ml-1">Locales</span>
                                    </a>

                                </div>

                                {/** <!--Button login.--> */}
                                <div>
                                    <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-primary hover:bg-primaryDark">
                                        Iniciar sesión
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}