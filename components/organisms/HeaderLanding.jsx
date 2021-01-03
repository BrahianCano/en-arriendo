// Import molecules //
import Search from "../molecules/Search";


export default function HeaderLanding() {

    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <section className="my-20 font-axiformaMedium">

            <div className="mx-10 text-center">
                <h1 className="text-4xl md:text-5xl">
                    Titulo<span className="text-primary font-axiformaHeavy"> SEO</span>
                    <br/>
                    para posicionamiento
                </h1>

                <h4 className="my-3 text-gray-500">
                    Slogan y llamado a la accion
                </h4>
            </div>

            <div className="my-20 mx-5 md:mx-40">

                {/** <!-- Search action.--> */}
                <Search fSumbmit={onSubmit} textBtn="Buscar"/>
            </div>

        </section>
    );
}
