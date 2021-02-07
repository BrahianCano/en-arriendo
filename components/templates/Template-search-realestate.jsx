// Import organisms //
import SectionCard from "../organisms/Section-card"
import SectionFilters from "../organisms/Section-filters";


/**
 * -- PROPS ENTRIES --
 * @InitialProps prop Object -  Array of properties.
 * @return JSX.Element TemplateSearchRealestate
 */
export default function TemplateSearchRealestate({InitialProps}) {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">

                {/** <!-- SECTION LEFT FILTERS.--> */}
                <SectionFilters/>

                {/** <!-- SECTION RIGTH CARD.--> */}
                <section className="col-span-3 w-full px-2 md:px-0 py-8">
                    <div className="grid grid-cols-1 justify-items-center">

                        {/** <!-- Dinamic cards RealEstate.--> */}
                        <SectionCard InitialProps={InitialProps}/>
                    </div>
                </section>
            </div>

            <style jsx>{`

              section {
                background-color: #F4F6F7;
              }

            `}</style>

        </>
    );
}

