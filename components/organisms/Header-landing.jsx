// Import molecules //
import Search from "../molecules/Search";
import SectionBestHouses from "../molecules/Section-Best-Houses";



export default function HeaderLanding() {


    /**
     * function onSubmit
     * @out json form data
     * @return out Data inputs
     */
    const onSubmit = (out) =>{
        console.log(out);
    }

    return (
        <section className="my-20 font-axiformaMedium">

            <div className="mx-10 text-center">
                <h1 className="text-4xl md:text-5xl text-gray-900">
                    Titulo<span className="text-primary font-axiformaHeavy"> SEO</span>
                    <br/>
                    para posicionamiento
                </h1>

                <h4 className="my-3 text-base text-gray-500 md:text-xl">
                    Slogan y llamado a la accion
                </h4>
            </div>

            <div className="my-20 mx-5 md:mx-40">

                {/** <!-- Search action.--> */}
                <Search fSumbmit={onSubmit} textBtn="Buscar"/>
            </div>

            <div className="my-20">
                <SectionBestHouses/>
            </div>

        </section>
    );
}
