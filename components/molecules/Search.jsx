import IconPublic from "../../assets/svg/icon-apartament";

export default function Search() {
    return (
            <form>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="ml-0 sm:text-sm">
                       <IconPublic/>
                      </span>
                    </div>
                    <input type="text" name="price" id="price"
                           className="ml-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                           placeholder="¿Que buscas?"/>
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" className="sr-only">Currency</label>
                        <select id="Currency" name="currency"
                                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                            <option>Medellin</option>
                            <option>Itagui</option>
                            <option>Sabaneta</option>
                        </select>
                    </div>
                </div>
            </form>
    );
}
