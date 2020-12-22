import '../assets/css/globals.css'

// Import molecules //
import Navbar from "../components/organisms/Navbar";


export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}
