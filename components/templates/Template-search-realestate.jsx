import SectionCard from "../organisms/Section-card"
import Search from "../molecules/Search"
import Form from "../molecules/Form"


export default function TemplateSearchRealestate() {

    const arrFields = [
      
      
        {
            name: "inpu6", placeholder: "N° Habitaciones", type: "select",
            options: ["1","2","3","4","Más"]
        },
        {name: "inpu2", placeholder: "Desde $", type: "text"},
        {name: "inpu2", placeholder: "Hasta $", type: "text"}
    ]

    const onSubmit = (out) => {
        console.log(out)
        setShowModal(false)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center my-10">
                <div className="w-full md:pr-20 md:ml-12 flex flex-col px-5 md:px-2">
                    <Search isShow={false}/>
                     <Form
                    arrFields={arrFields}
                    fSumbmit={onSubmit}
                    textBtn="Aplicar"
                />
                </div>

                <section className="col-span-2 w-full px-2 md:px-2 py-10">
                    <div className="grid grid-cols-1">
                    <SectionCard/>
                   
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

