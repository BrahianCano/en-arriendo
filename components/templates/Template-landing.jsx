import HeaderLanding from "../organisms/Header-landing";
import SectionBestRealEstate from "../organisms/Section-best-realestate";


export default function TemplateLanding() {
    return (
        <>
            <div className="font-axiformaMedium w-full flex flex-col justify-center mt-20 ">
                <HeaderLanding/>
                <section>
                    <SectionBestRealEstate/>
                </section>
            </div>

            <style jsx>{`

              section {
                background-color: #F4F6F7;
                padding: 3rem 0rem 3rem 0rem;
              }

            `}</style>
        </>
    );
}

