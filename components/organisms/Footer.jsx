import Link from "next/link";
import Logo from "../molecules/Logo";
import PublishButton from "../molecules/Publish-button";


export default function Footer() {

    const linkFunction = (label, link) =>{
        return (
            <li className="text-center my-2">
                <Link href={`/${link}`}>
                    <a className="text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        {label}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 md:gap-2 mx-3 my-4 text-gray-600">

            <div className="flex flex-col justify-center w-full p-2 md:px-5 md:py-2">
                <div className="my-2">
                    <Logo/>
                </div>
                <div className="my-2">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto.</p>
                </div>
                <div className="my-2">
                    <p>enarriendo@gmail.com</p>
                </div>
            </div>


            <div className="col-span-3 md:col-span-2 flex justify-center w-full p-3 md:px-5 md:py-2">
                <div className="grid grid-cols-2 w-full">
                    <div className="flex flex-col items-center my-1 w-full">
                        <h5 className="font-bold">SERVICIOS</h5>
                        <ul className="mt-3">
                            {linkFunction('Inicio', '')}
                            {linkFunction('Buscar propiedad', 'buscar-propiedad')}
                            <PublishButton/>
                            {linkFunction('Para inmobiliarias', 'para-inmobiliarias')}
                        </ul>
                    </div>
                    <div className="my-1 w-full flex flex-col items-center my-1 w-full">
                        <h5 className="font-bold">CATEGORIAS</h5>
                        <ul className="mt-3">
                            {linkFunction('Apartamentos', '')}
                            {linkFunction('Casas', '')}
                            {linkFunction('Fincas', '')}
                            {linkFunction('Locales', '')}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="col-span-3 flex justify-center w-full p-3 md:px-5 md:py-2">
                <p>© 2021 enarriendo.vercel.app</p>
            </div>
        </footer>
    )
}
