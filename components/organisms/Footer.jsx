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
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 m-3 text-gray-600">

            <div className="flex flex-col justify-center w-full p-3 md:p-5">
                <div className="my-3">
                    <Logo/>
                </div>
                <div className="my-3">
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto.</p>
                </div>
                <div className="my-3">
                    <p>enarriendo@gmail.com</p>
                </div>
            </div>


            <div className="col-span-3 md:col-span-2 flex justify-center w-full p-3 md:p-5">
                <div className="grid grid-cols-2 w-full">
                    <div className="flex flex-col items-center my-1 w-full">
                        <h3 className="font-bold">SERVICIOS</h3>
                        <ul className="mt-4">
                            {linkFunction('Inicio', '')}
                            {linkFunction('Buscar propiedad', 'buscar-propiedad')}
                            <PublishButton/>
                            {linkFunction('Para inmobiliarias', 'para-inmobiliarias')}
                        </ul>
                    </div>
                    <div className="my-1 w-full flex flex-col items-center my-1 w-full">
                        <h3 className="font-bold">CATEGORIAS</h3>
                        <ul className="mt-4">
                            {linkFunction('Apartamentos', '')}
                            {linkFunction('Casas', '')}
                            {linkFunction('Fincas', '')}
                            {linkFunction('Locales', '')}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="col-span-3 flex justify-center w-full p-3 md:p-5">
                <p>© 2021 enarriendo.vercel.app</p>
            </div>
        </div>
    )
}
