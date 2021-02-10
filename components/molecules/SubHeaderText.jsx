/**
 * -- PROPS ENTRIES --
 * @title prop String - That does not exceed 15 characters
 * @subtitle prop String - That does not exceed 90 characters
 * @return JSX.Element SubHeaderText
 */
export default function SubHeaderText({title, subtitle}) {
    return (
        <>
            
            <div className="w-full flex flex-col justify-items-center text-center px-5 md:px-40">
                <h2 className="text-3xl mb-5">{title}</h2>
                <p className="text-gray-600">{subtitle}</p>
            </div>
           
        </>
    );
}

