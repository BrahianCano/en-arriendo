// Import organisms //
import SectionCard from "../organisms/Section-card";
import SectionFilters from "../organisms/Section-filters";
import Search from "../molecules/Search";


/**
 * -- PROPS ENTRIES --
 * @InitialProps prop Object -  Array of properties.
 * @return JSX.Element TemplateSearchRealestate
 */
export default function TemplateSearchRealestate({StaticProps}) {

    /**
     * function onSubmit
     * @out json form data
     * @return out Data inputs
     */
    const onSubmitSearch = (out) => {
        console.log(out);
    }
    return (
        <>
            <div className="md:py-8 mx-2 md:mx-0 rounded-md hover:shadow-xl duration-500">

                {/** <!-- BUTTON SEARCH.--> */}
                <Search roundBtn={true}
                        fSumbmit={onSubmitSearch}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 md:mx-20 my-5 justify-items-center">

                {/** <!-- SECTION LEFT FILTERS.--> */}
                <SectionFilters/>

                {/** <!-- SECTION RIGTH CARD.--> */}
                <section className="col-span-3 w-full px-2 md:px-0 py-7 rounded-md bg-gradient-to-t md:bg-gradient-to-b from-lightgray">
                    <div className="grid grid-cols-1 justify-items-center">

                        {/** <!-- Dinamic cards RealEstate.--> */}
                        <SectionCard StaticProps={StaticProps}/>
                    </div>
                </section>
            </div>


        </>
    );
}

