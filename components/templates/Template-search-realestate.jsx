import {useState} from 'react'

import SectionCard from "../organisms/Section-card"
import Search from "../molecules/Search"
import Form from "../molecules/Form"
import Modal from "../molecules/Modal";
import DropDawn from "../molecules/DropDawn";


export default function TemplateSearchRealestate() {

    const [showModal, setShowModal] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    const optionsSortBy = ["De menor a mayor precio", "De mayor a menor precio"];

    const fieldsFilter = [
        {
            name: "inpu6", placeholder: "Habitaciones", type: "select",
            options: ["1", "2", "3", "4", "Más"]
        },
        {name: "inpu2", placeholder: "Desde $", type: "number"},
        {name: "inpu3", placeholder: "Hasta $", type: "number"}
    ]


    /**
     * function onSubmitModal
     * @paramFields array - form fields
     * @paramTxtBtn string - form text button submit
     * @return Form
     */
    const componentForm = (paramFields, paramTxtBtn) => {
        return (
            <Form arrFields={paramFields}
                  fSumbmit={onSubmitModal}
                  textBtn={paramTxtBtn}
            />
        )
    }


    /**
     * function onSubmitModal
     * @out json form data
     * @return out Data inputs
     */
    const onSubmitModal = (out) => {
        console.log(out)
        setShowModal(false)
    }


    /**
     * function onSubmit
     * @out json form data
     * @return out Data inputs
     */
    const onSubmitSearch = (out) => {
        console.log(out);
    }


    /**
     * function SelectSortBy
     * @out json form data
     * Update the state (setShowDropDown), close options DropDawn
     */
    const SelectSortBy = event => {
        const textCurrentOption = event.target.text;

        setShowDropDown(false)
        console.log(textCurrentOption)
    }


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">

                {/** <!-- SECTION LEFT FILTERS.--> */}
                <div className="w-full flex flex-col px-2 md:px-5 md:my-8">

                    {/** <!-- Search action.--> */}
                    <Search roundBtn={true}
                            fSumbmit={onSubmitSearch}/>

                    {/** <!-- Form filters in desktop.--> */}
                    <div className="hidden md:block my-5">
                        {componentForm(fieldsFilter, 'Aplicar')}
                    </div>

                    {/** <!-- Modal filter and Dropdawn sort by in mobile.--> */}
                    <div className="block md:hidden grid grid-cols-2 gap-1 my-5">

                        <div className="bg-primary rounded-l-lg">

                            {/** <!-- Button show modal filter.--> */}
                            <button
                                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 w-full rounded-l-lg text-white hover:bg-primaryDark"
                                onClick={() => setShowModal(true)}>Filtros
                            </button>
                        </div>

                        <div className="bg-primary rounded-r-lg">
                            <div className="relative inline-block text-left w-full">
                                <div>

                                    {/** <!-- Button show DropDawn sort by.--> */}
                                    <button type="button"
                                            onClick={() => setShowDropDown(true)}
                                            className="w-full whitespace-nowrap inline-flex items-center justify-center px-4 py-2 rounded-r-lg text-white hover:bg-primaryDark"
                                            id="options-menu" aria-haspopup="true" aria-expanded="true">
                                        Ordenar por

                                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </button>
                                </div>

                                {/** <!-- Options DropDawn sort by.--> */}
                                <DropDawn isShow={showDropDown}
                                          inputOptions={optionsSortBy}
                                          outOption={SelectSortBy}
                                          aling="right"
                                />

                            </div>

                        </div>
                    </div>

                    {/** <!-- Modal filter.--> */}
                    <Modal showModal={showModal}
                           setShowModal={setShowModal}
                    >

                        {/** <!-- Form filter.--> */}
                        {componentForm(fieldsFilter, 'Aplicar')}
                    </Modal>

                </div>


                {/** <!-- SECTION RIGTH CARD.--> */}
                <section className="col-span-3 w-full px-2 md:px-0 py-8">
                    <div className="grid grid-cols-1 justify-items-center">

                        {/** <!-- Card RealEstate.--> */}
                        <SectionCard/>
                    </div>
                </section>
            </div>

            <style jsx>{`

              section {
                background-color: #F4F6F7;
              }

            `}</style>

        </>
    );
}

