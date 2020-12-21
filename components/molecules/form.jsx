import {useForm} from "react-hook-form";


/**
 * -- PROPS ENTRIES --
 * @arrFields prop Array
 * @fSumbmit Function
 * @textBtn String
 * @return Form
 */
export default function Form({arrFields, fSumbmit, textBtn}) {
    const {register, handleSubmit, errors} = useForm();

    return (
        <>
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form onSubmit={handleSubmit((data) => fSumbmit(data))}>

                {/* Show array of fields*/}
                {
                    arrFields.map((inputItem, key) =>
                        <div key={key} className="my-5">
                            <label htmlFor={inputItem.name}
                                   className="block text-sm text-gray-700">{inputItem.name}</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input type={inputItem.type} name={inputItem.name}
                                       className="focus:ring-indigo-500 focus:border-primary block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                       placeholder={inputItem.placeholder}
                                       ref={register({required: true})}/>
                            </div>

                            {errors[inputItem.name] &&
                            <span className="text-sm text-red-700">This field is required</span>}
                        </div>
                    )
                }

                {/* Show button action*/}
                <button type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-3 sm:w-auto sm:text-sm">
                    {textBtn}
                </button>
            </form>
        </>
    );
}
