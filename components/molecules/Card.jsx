/**
 * -- PROPS ENTRIES --
 * @img prop String - The image has to be a separate resource
 * @title String - The main title
 * @subtitle String - The secondary subtitle
 * @description String - The body of the card
 * @return JSX.Element Card
 */
export default function Card({img, title, subtitle, description}) {
    return (
        <>
            <article className="w-11/12 md:w-4/6 m-3 md:m-5 bg-white rounded-md shadow-xl transform transition motion-reduce:transform-none hover:scale-110 duration-500">

                <div className="flex justify-center w-full h-44">
                    <img className="rounded w-full h-full" src={img} alt="PENDIENTE SEO"/>
                </div>

                <div className="w-full m-5">
                    <h3 className="text-3xl pr-10">{title}</h3>
                    <p className="mb-5 text-base text-gray-500 pr-10">{subtitle}</p>
                    <p className="break-words text-gray-800 pr-10">{description}</p>
                </div>

                <div className="flex justify-center w-full my-5">
                    <button
                        className="w-11/12 inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-md shadow-md text-base text-white bg-primary hover:bg-primaryDark">Call
                        to action
                    </button>
                </div>

            </article> 

        </>
    );
}

