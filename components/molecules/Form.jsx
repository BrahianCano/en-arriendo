import {useForm} from "react-hook-form";


/**
 * -- PROPS ENTRIES --
 * @arrFields prop Array - Fields to be displayed
 * @fSumbmit prop Function - Capture the form data
 * @textBtn prop String - Button text of action submit
 * @return JSX.Element Form
 */
export default function Form({arrFields, fSumbmit, textBtn}) {
    const {register, handleSubmit, errors} = useForm();


    return (
        <>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit((data, event) => {
                fSumbmit(data)
                event.target.reset()
            })}>

                {/* Show array of fields*/}
                {
                    arrFields.map((inputItem, key) =>
                        <div key={key} className="my-5">
                            <label htmlFor={inputItem.name}
                                   className="block text-sm text-gray-700">{inputItem.placeholder}</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                {

                                    /* If {inputItem.type} is different from "select" it renders <input>, otherwise it renders <select> */
                                    inputItem.type !== "select" ?
                                        <input type={inputItem.type} name={inputItem.name}
                                               className="focus:ring-primary focus:border-primary block w-full pl-3 pr-12 border-gray-300 rounded-md"
                                               placeholder={inputItem.placeholder}
                                               ref={register({required: true})}/>
                                        :

                                        /* Otherwise render select*/
                                        <select name={inputItem.name} ref={register({required: true})}
                                                className="focus:ring-primary focus:border-primary block w-full pl-3 pr-12 border-gray-300 rounded-md">
                                            {
                                                inputItem.options.map((itemOption, key) =>
                                                    <option key={key} value={itemOption}>{itemOption}</option>
                                                )
                                            }
                                        </select>
                                }
                            </div>

                            {errors[inputItem.name] &&
                            <span className="text-sm text-red-700">Este campo es obligatorio</span>}
                        </div>
                    )
                }

                {/* Show button action*/}
                <div className="my-5">
                    <button type="submit"
                            className="inline-flex items-center justify-center px-4 py-2.5 w-full border border-transparent rounded-md shadow-md text-base text-white bg-primary hover:bg-primaryDark">
                        {textBtn}
                    </button>
                </div>
            </form>
        </>
    );
}
