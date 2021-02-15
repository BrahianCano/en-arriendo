// Import organisms //
import SectionCard from "../organisms/Section-card"
import SectionFilters from "../organisms/Section-filters";


/**
 * -- PROPS ENTRIES --
 * @InitialProps prop Object -  Array of properties.
 * @return JSX.Element TemplateSearchRealestate
 */
export default function TemplateSearchRealestate({StaticProps}) {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 md:mx-20 justify-items-center">

                {/** <!-- SECTION LEFT FILTERS.--> */}
                <SectionFilters/>

                {/** <!-- SECTION RIGTH CARD.--> */}
                <section className="col-span-2 w-full px-2 md:px-0 py-7 rounded-md bg-gradient-to-t md:bg-gradient-to-b from-lightgray">
                    <div className="grid grid-cols-1 justify-items-center ">

                        {/** <!-- Dinamic cards RealEstate.--> */}
                        <SectionCard StaticProps={StaticProps}/>
                    </div>
                </section>
            </div>


        </>
    );
}

