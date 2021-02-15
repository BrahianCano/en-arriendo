// Import organisms //
import HeaderLanding from "../organisms/Header-landing";
import SectionBestRealEstate from "../organisms/Section-best-realestate";


export default function TemplateLanding() {
    return (
        <>
            <div className="w-full flex flex-col justify-center">
                <HeaderLanding/>
                <section className="py-5 md:py-10 bg-gradient-to-t from-lightgray rounded-md">
                    <SectionBestRealEstate/>
                </section>
            </div>
        </>
    );
}

