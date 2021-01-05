// Import molecules //
import Form from "../molecules/Form";


export default function SectionForRealEstate() {

    const arrFields = [
        {name: "inpu0", placeholder: "Nombre Apellido", type: "text"},
        {name: "inpu4", placeholder: "Correo electronico", type: "email"},
        {name: "inpu5", placeholder: "Numero celular", type: "tel"},
    ]


    /**
     * function onSubmit
     * @out json form data
     * @return out Data inputs
     */
    const onSubmit = (out) => {
        console.log(out)
    }

    return (
        <>
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto h-full">
                    <div
                        className="relative h-full z-10 pb-8 bg-white sm:pb-16 lg:max-w-2xl lg:w-full">

                        {/** <!--Svg separator between the image and the form.--> */}
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>

                        {/** <!--Main left container.--> */}
                        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                            <div className="sm:text-center lg:text-left">

                                    {/** <!--Title of main left container.--> */}
                                <h1 className="text-4xl md:text-5xl tracking-tight text-gray-900">
                                    <span className="block xl:inline">En arriendo para</span>
                                    <span
                                        className="block text-primary xl:inline font-axiformaHeavy"> Inmobiliarias</span>
                                </h1>

                                {/** <!--Call to action of main left container.--> */}
                                <p className="my-5 md:my-8 text-base text-gray-500 md:text-xl lg:mx-0">
                                    Comuníquese con nuestros agentes, para trabajar juntos y
                                    <span className="block text-primary xl:inline"> crear una campaña publicitaria </span>
                                    en nuestro portal web.
                                </p>

                                <div className="mt-10 md:mt-7 sm:flex sm:justify-center lg:justify-start">

                                    {/** <!--Form contact of main left container.--> */}
                                    <Form arrFields={arrFields}
                                          fSumbmit={onSubmit}
                                          textBtn="Enviar datos"
                                    />

                                </div>
                            </div>
                        </main>

                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">

                    {/** <!--Right picture.--> */}
                    <img className="h-56 w-full object-cover sm:h-72 md:h-full lg:w-full lg:h-full"
                         src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                         alt="PENDIENTE SEO"
                    />

                </div>
            </div>
        </>
    );
}
