import Link from 'next/link';


export default function NavbarButton() {

    return (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/para-inmobiliarias">
                <a
                    className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent rounded-md shadow-md text-base text-white bg-primary hover:bg-primaryDark">
                    Para Inmobiliarias
                </a>
            </Link>
        </div>
    );
}