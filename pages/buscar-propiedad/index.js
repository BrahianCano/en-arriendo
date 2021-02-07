import {useEffect} from 'react'
import Head from "next/head";
import fetch from 'isomorphic-unfetch';

// Import template //
import TemplateSearchRealestate from "../../components/templates/Template-search-realestate"

// Import Firebase //
import firebase from "../../assets/js/firebase";
import 'firebase/firestore';

/**
 * -- PROPS ENTRIES --
 * @payload prop Object - Array of properties obtained from the database by getInitialProps
 * @return JSX.Element SearchRealEstate
 */
export default function SearchRealEstate({payload}) {

    return (
        <>
            <Head>
                {/** <!-- SEO / Home --> */}
                <title>PENDIENTE ESTUDIO SEO</title>
                <meta name="description" content="PENDIENTE ESTUDIO SEO"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="robots" content="index, follow"/>

                {/** <!-- Open Graph / Facebook --> */}
                <meta property="og:title" content="PENDIENTE SEO" key="title"/>
                <meta
                    property="og:description"
                    content="PENDIENTE SEO"
                    key="description"
                />
                <meta
                    property="og:image"
                    content="https://midominio.com/logo200x200.png"
                />
                <meta property="og:url" content="https://midominio.com/"/>
            </Head>

            <main className="mt-20 font-axiformaMedium">
                <TemplateSearchRealestate InitialProps={payload}/>
            </main>
        </>
    )
}


/**
 * getInitialProps enables server-side rendering in a page and allows you to do initial data population,
 * it means sending the page with the data already populated from the server. This is especially useful for SEO.
 *
 * https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
 */
SearchRealEstate.getInitialProps = async () => {
    const db = firebase.firestore(firebase)

    let realestatesRef = db.collection('Agencies');
    try {
        let out = []
        let allRealestates = await realestatesRef.get();
        for (const doc of allRealestates.docs) {
            const {data} = doc.data();
            const docId = doc.id;

            data.forEach(element => {
                element = {...element, id: docId}
                out.push(element)
            });
        }
        return {
            payload: out
        };
    } catch (err) {
        console.log('Error getting documents', err);
    }

}