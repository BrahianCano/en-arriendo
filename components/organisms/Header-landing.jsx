// Import molecules //
import Search from "../molecules/Search";


export default function HeaderLanding() {


    /**
     * function onSubmit
     * @out json form data
     * @return out Data inputs
     */
    const onSubmit = (out) => {
        console.log(out);
    }

    return (
        <section className="py-20 mx-5 md:mx-40">

            <div className="text-center">
                <h1 className="text-4xl md:text-5xl text-gray-900">
                    Titulo<span className="text-primary font-axiformaHeavy"> SEO</span>
                    <br/>
                    para posicionamiento
                </h1>

                <h4 className="my-3 text-base text-gray-500 md:text-xl">
                    Slogan y llamado a la accion
                </h4>
            </div>

            <div className="my-10">

                {/** <!-- Search action.--> */}
                <Search fSumbmit={onSubmit}
                        textBtn="Buscar"/>
            </div>

        </section>
    );
}
