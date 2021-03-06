import {Transition} from '@headlessui/react';

// Import icons svg //
import IconClose from '../../assets/svg/icon-close';


/**
 * -- PROPS ENTRIES --
 * @title prop String - That does not exceed 40 characters
 * @svg prop JSX-Element
 * @children prop JSX-Element
 * @showModal prop Boolean
 * @setShowModal prop FunctionState
 * @return JSX.Element Modal
 */
export default function Modal({title = 'Modal title', body = 'Modal body', svg, children, showModal, setShowModal}) {

    return (
        <Transition
            show={showModal}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {(ref) => (
                <div ref={ref} className="fixed z-50 inset-0 overflow-y-auto font-axiformaMedium">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"/>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
                              aria-hidden="true">&#8203;</span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            role="dialog" aria-modal="true" aria-labelledby="modal-headline">

                            {/* Modal Button close*/}
                            <div className="absolute top-0 right-0 m-3">
                                <button onClick={() => setShowModal(false)}
                                   className="bg-white rounded-md p-2 inline-flex items-center justify-center hover:bg-third focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryDark">
                                    <IconClose/>
                                </button>
                            </div>

                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div
                                        className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-third sm:mx-0 sm:h-10 sm:w-10">

                                        {/* Modal svg*/}
                                        {svg}
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full md:pr-10">

                                        <h3 className="text-2xl leading-6 text-gray-900" id="modal-headline">

                                            {/* Modal title*/}
                                            {title}
                                        </h3>
                                        <div className="mt-2 text-left">

                                            {/* Modal body*/}
                                            <p className="my-2 text-center sm:text-left text-base text-gray-500">
                                                {body}
                                            </p>
                                            <div className="mt-8">
                                                {children}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    );
}
