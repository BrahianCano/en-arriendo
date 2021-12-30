import '../assets/css/globals.css';

// Import molecules //
import Navbar from "components/organisms/Navbar";
import Footer from "components/organisms/Footer";


export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Navbar/>
                <Component {...pageProps} />
            <Footer/>
        </>
    )
}
