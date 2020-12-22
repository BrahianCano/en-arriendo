import Link from 'next/link'


export default function NavbarButton() {

    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/para-empresas">
                <a
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-white bg-primary hover:bg-primaryDark">
                    Para empresas
                </a>
            </Link>
        </div>
    );
}