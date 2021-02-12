import {useRouter} from 'next/router';

// Import Hooks //
import {SlugFormatter} from '../../assets/hooks/SlugFormatter';

// Import icons svg //
import IconBed from '../../assets/svg/icon-bed';


/**
 * -- PROPS ENTRIES --
 * @img prop String - The image has to be a separate resource
 * @location String - The location
 * @type String - The type ['Casa', 'Apartamento', 'Finca', 'Local']
 * @id String - The collection 'id'
 * @code String - The property code
 * @return JSX.Element SearchCard
 */
export default function SearchCard({img, location, type, id, code, price}) {
    const router = useRouter();
    const slug = SlugFormatter(type, location, id, code);


    return (
        <article onClick={() => router.push(`/buscar-propiedad/${slug}`)}
                 className="md:w-11/12 w-full rounded-md shadow-xl bg-white p-2 my-3 transform transition motion-reduce:transform-none hover:scale-105 duration-500">

            <h2 className="text-center">{type} en {location}</h2>
            <div className="flex my-5">
                <div>
                    <img src={img} alt="PENDIENTE SEO" className="max-h-20 max-w-20"></img>
                </div>

                <div className="flex flex-col ml-3 md:ml-10">
                    <div className="grid grid-cols-2 gap-1 justify-items-center">
                        <p>$ {price}</p>
                        <p className="">Nueva</p>
                    </div>

                    <div className="flex mt-4">
                        <p className="text-xs">{location}</p>
                    </div>

                    <div className="grid grid-cols-2 mt-4 gap-1 items-end">
                            <span className="flex items-end">
                                <IconBed/>
                                <p className="text-sm">4 Hab</p>
                            </span>
                        <p className="text-sm">{type}</p>
                    </div>

                </div>
            </div>

        </article>
    );
}

