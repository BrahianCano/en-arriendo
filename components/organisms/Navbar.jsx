import React, { useState } from 'react';

// Import resorces //
import NavbarAnchors from '../molecules/navbar-anchors';
import NavbarLogo from '../molecules/navbar-logo'
import NavbarBtnlogin from '../molecules/navbar-btnlogin'
import NavbarMobile from '../molecules/navbar-mobile'


export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="relative bg-white font-axiformaHeavy">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

          {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
          <NavbarLogo />

          {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={() => setIsOpenMenu(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
          <NavbarAnchors />

          {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
          <NavbarBtnlogin />

        </div>
      </div>

      {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
      <NavbarMobile isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

    </div>
  );
}
