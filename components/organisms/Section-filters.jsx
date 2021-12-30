import {useState} from 'react'

// Import molecules //
import Search from "../molecules/Search"
import DropDawn from "../molecules/DropDawn"
import Modal from "../molecules/Modal"
import Form from "../molecules/Form"

// Import icons svg //
import IconFilter from "../svg/Icon-filter";
import IconSort from "../svg/Icon-sort";


export default function SectionFilters() {

    const [showModal, setShowModal] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    const optionsSortBy = ["De menor a mayor precio", "De mayor a menor precio"]

    const fieldsFilter = [
        {
            name: "inpu6", placeholder: "Habitaciones", type: "select",
            options: ["1", "2", "3", "4", "Más"]
        },
        {name: "inpu2", placeholder: "Precio desde", type: "number"},
        {name: "inpu3", placeholder: "Precio hasta", type: "number"}
    ]


    /**
     * function componentForm
     * @paramFields array - form fields
     * @paramTxtBtn string - form text button submit
     * @return Form JSX.Element
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
     * function componentSortBy
     * @roundBtn String - The rounded of button
     * @return JSX.Element
     */
    const componentSortBy = (roundBtn) => {
        return (
            <div className="relative w-full h-full">

                    {/** <!-- Button show DropDawn sort by.--> */}
                    <button type="button"
                            onClick={() => setShowDropDown(true)}
                            className={`inline-flex items-center justify-center px-4 py-2.5 w-full h-full rounded-${roundBtn} shadow-md text-base text-white bg-primary hover:bg-primaryDark`}
                            id="options-menu" aria-haspopup="true" aria-expanded="true">
                        Ordenar

                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>

                {/** <!-- Options DropDawn sort by.--> */}
                <DropDawn isShow={showDropDown}
                          inputOptions={optionsSortBy}
                          outOption={SelectSortBy}
                          aling='right'
                />

            </div>
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
        <div className="w-full flex flex-col px-2 md:px-10 md:my-8">

            {/** <!-- Search action.--> */}
            <Search roundBtn={true}
                    fSumbmit={onSubmitSearch}/>

            {/** <!-- "Form filters" and "dropdawn sort by" in desktop.--> */}
            <div className="hidden md:block my-5">

                {/** <!--Order by.--> */}
                <div className="my-5">
                    <h5 className="text-gray-600 inline-flex">
                        <i className="mr-1">
                            <IconSort color="#52525b"/>
                        </i>
                        Ordenar</h5>
                    <hr className="mb-5"/>

                    {/** <!-- componentSortBy.--> */}
                    {componentSortBy('lg')}
                </div>

                {/** <!--Filter by.--> */}
                <div className="my-10">
                    <h5 className="text-gray-600 inline-flex">
                        <i className="mr-1">
                            <IconFilter color="#52525b"/>
                        </i>
                        Filtrar</h5>
                    <hr/>

                    {/** <!-- componentForm.--> */}
                    {componentForm(fieldsFilter, 'Aplicar')}
                </div>
            </div>


            {/** <!--" Modal filter" and "dropdawn sort by" in mobile.--> */}
            <div className="block md:hidden grid grid-cols-2 gap-1 my-5">

                <div className="bg-primary rounded-l-lg">

                    {/** <!-- Button show modal filter.--> */}
                    <button
                        className="inline-flex items-center justify-center px-4 py-2.5 w-full rounded-l-lg shadow-md text-base text-white bg-primary hover:bg-primaryDark"

                        onClick={() => setShowModal(true)}>
                        <span className="mr-1">
                             <IconFilter color="#FFFFFF"/>
                        </span>
                        Filtrar
                    </button>
                </div>

                <div className="bg-primary rounded-r-lg">

                    {/** <!-- componentSortBy.--> */}
                    {componentSortBy('r-lg')}
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
    )
}