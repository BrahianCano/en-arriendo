// Import molecules //
import Search from "../molecules/Search";

// Import icons svg //
import IconPublic from "../../assets/svg/icon-apartament";


export default function HeaderLanding() {
    return (
        <section className="my-20 mx-10 font-axiformaMedium">
            <h1 className="text-4xl text-center">
                Titulo<span className="text-primary font-axiformaHeavy"> SEO</span>
                <br/>
                para posicionamiento
            </h1>

            <h4 className="text-sm text-center my-3 text-gray-500	">
                Slogan y llamado a la accion
            </h4>

            <div className="my-20">
                <Search/>
            </div>

        </section>
    );
}
