import Mosaic from "../molecules/Mosaic";


export default function TemplateDescription() {
    return (
        <>
            <div className="mt-20 font-axiformaMedium w-full flex flex-col justify-center">
                <section>
                    <Mosaic/>
                </section>
            </div>

            <style jsx>{`

              section {
                background-color: #FBFCFC;
              }

            `}</style>
        </>
    );
}

