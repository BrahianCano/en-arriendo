import {Transition} from "@headlessui/react";


/**
 * -- PROPS ENTRIES --
 * @inputOptions prop Array - Options to be displayed
 * @outOption Function - function return current option
 * @isShow Boolean - show dropdown
 * @aling String - Display container
 * @return JSX.Element DropDawn
 */
export default function DropDawn({inputOptions, outOption, isShow, aling}) {

    return (
        <Transition
            show={isShow}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            {(ref) => (
                <div ref={ref}
                     className={`origin-top-${aling} absolute ${aling}-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}>
                    <div className="py-1" role="menu" aria-orientation="vertical"
                         aria-labelledby="options-menu">

                        {/** <!-- options.--> */}
                        {
                            inputOptions.map((elem, key) =>
                                <a key={key} onClick={(event) => outOption(event)}
                                   className="block cursor-pointer px-4 py-2 text-sm md:text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">{elem}</a>
                            )
                        }

                    </div>
                </div>
            )}
        </Transition>
    )
}