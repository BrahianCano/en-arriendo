import React, { useState } from 'react';

// Import resorces //
import NavbarAnchors from '../molecules/navbar-anchors';
import NavbarLogo from '../molecules/navbar-logo'
import NavbarButton from '../molecules/navbar-button'
import NavbarMobile from '../molecules/navbar-mobile'

// Import icons //
import IconMenu from '../../assets/svg/icon-menu'



export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="relative bg-white font-axiformaMedium">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">

          {/** <!--Logo webpage.--> */}
          <NavbarLogo />

          {/** <!--Mobile menu button, show to action.--> */}
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={() => setIsOpenMenu(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <IconMenu size="36"/>
            </button>
          </div>

          {/** <!--Links redirect.--> */}
          <NavbarAnchors />

          {/** <!--Buttons to action.--> */}
          <NavbarButton />

        </div>
      </div>

      {/** <!--Mobile menu, show/hide based on mobile menu state.--> */}
      <NavbarMobile isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

    </div>
  );
}
