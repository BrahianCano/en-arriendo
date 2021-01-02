// Import icons svg //
import IconApartament from "../../assets/svg/icon-apartament";


export default function Search() {
    return (
            <form className="md:flex md:justify-center grid grid-cols-1">

                    <div className="relative rounded-md shadow-sm">

                             {/** <!--Icon input.--> */}
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                               <IconApartament />
                            </div>

                             {/** <!--Input search.--> */}
                            <input type="search" name="location"
                                   className="focus:ring-primary focus:border-primary block w-full pl-12 pr-36 sm:text-sm border-gray-300 rounded-md"
                                   placeholder="Ciudad, Barrio"/>

                             {/** <!--Select category.--> */}
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                    <label htmlFor="category" className="sr-only">Category</label>
                                    <select name="category"
                                            className="focus:ring-primary focus:primary h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                        <option>Apartamento</option>
                                        <option>Casa</option>
                                        <option>Local</option>
                                        <option>Finca</option>
                                    </select>
                            </div>
                    </div>

                {/** <!--Button search.--> */}
                <div className="my-3 md:my-0 mx-0 md:mx-5">
                        <input
                            className="whitespace-nowrap w-full md:w-32 inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-md shadow-sm text-base text-white bg-primary hover:bg-primaryDark"
                            value="Buscar"
                            type="submit"/>
                </div>
            </form>
    );
}
