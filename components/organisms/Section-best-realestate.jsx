import Card from "../molecules/Card";


export default function SectionBestRealEstate() {

        const arrData = [{
            img: "https://i.ibb.co/0D03wrT/img2.jpg",
            title: "Titulo card",
            subtitle: "subtitle",
            description: "descripcion card"
        },
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
        }]

    return (

        <>
            <div className="w-full flex flex-col justify-items-center text-center px-5 md:px-40">
                <h2 className="text-3xl mb-5">Pendiente para definir (SEO)</h2>
                <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer
                    took a galley of type and scrambled it to make a type s</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-10 px-5 md:px-20">


                {
                    arrData.map((item, key) =>
                        <div className="flex justify-center w-full">
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

