import Card from "../molecules/Card";
import SubHeaderText from "../molecules/SubHeaderText"


export default function SectionBestRealEstate() {

    const arrData = [
        {
            img: "https://i.ibb.co/0D03wrT/img2.jpg",
            title: "Titulo card 1",
            subtitle: "subtitle 1",
            description: "descripcion card 1"
        },
        {
            img: "https://i.ibb.co/0D03wrT/img2.jpg",
            title: "Titulo card 2",
            subtitle: "subtitle 2",
            description: "descripcion card 2"
        },
        {
            img: "https://i.ibb.co/0D03wrT/img2.jpg",
            title: "Titulo card 3",
            subtitle: "subtitle 3",
            description: "descripcion card 3"
        }]

    return (

        <>
            <SubHeaderText title="Titulo seccion card (SEO)"
                           subtitle="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-10 px-5 md:px-20">

                {
                    arrData.map((item, key) =>
                        <div key={key} className="flex justify-center w-full">
                            <Card img={item.img}
                                  title={item.title}
                                  subtitle={item.subtitle}
                                  description={item.description}
                            />
                        </div>
                    )
                }

            </div>
        </>
    );
}

