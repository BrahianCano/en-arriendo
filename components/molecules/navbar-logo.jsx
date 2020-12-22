import Link from "next/link";


export default function NavbarLogo() {

    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
                <a>
                    <span className="sr-only">En arriendo</span>
                    <img className="h-8 w-auto sm:h-10"
                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                         alt=""/>
                </a>
            </Link>
        </div>
    )
}