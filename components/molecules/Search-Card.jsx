import {useRouter} from 'next/router'

// Import icons svg //
import IconBed from '../../assets/svg/icon-bed'


/**
 * -- PROPS ENTRIES --
 * @img prop String - The image has to be a separate resource
 * @title String - The main title
 * @subtitle String - The secondary subtitle
 * @description String - The body of the card
 * @return JSX.Element Card
 */
export default function SearchCard({img, title, subtitle, description}) {
    const router = useRouter();

    const createSlug = (entry) => {
        return entry.toString().toLowerCase()
            .replace(/\s+/g, '-')      // Replace spaces with -
            .replace(/[^\w\-]+/g, '')  // Remove all non-word chars
            .replace(/\-\-+/g, '-')    // Replace multiple - with single -
            .replace(/^-+/, '')        // Trim - from start of text
            .replace(/-+$/, '');       // Trim - from end of text
    }

    const slug = createSlug(title);

    return (
        <>
            <article onClick={() => router.push(`/buscar-propiedad/${slug}`)}
                     className="md:w-11/12 w-full rounded-md shadow-2xl bg-white p-2 my-3 transform transition motion-reduce:transform-none hover:scale-110 duration-500">
                <h2 className="text-center">{title}</h2>
                <div className="flex my-5">
                    <div>
                        <img src="https://i.ibb.co/0D03wrT/img2.jpg" alt="img" className="max-h-20 max-w-20"></img>
                    </div>

                    <div className="flex flex-col ml-3 md:ml-10">
                        <div className="grid grid-cols-2 gap-1 justify-items-center">
                            <p>680.000$</p>
                            <p className="">Nueva</p>
                        </div>

                        <div className="flex mt-4">
                            <p className="text-xs">Medellin,Colombia</p>
                        </div>

                        <div className="grid grid-cols-2 mt-4 gap-1 items-end">
                <span className="flex items-end"><IconBed/><p className="text-sm">4 Hab</p>
                </span>
                            <p className="text-sm">Arriendo</p>
                        </div>


                    </div>
                </div>

            </article>

            <style jsx>{`

              article:hover {
                transition: transform .2s;
                transform: scale(1.03);
              }

            `}</style>
        </>
    );
}

