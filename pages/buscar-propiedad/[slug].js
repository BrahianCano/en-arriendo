import Head from "next/head";

// Import Hooks //
import {SlugFormatter} from 'assets/hooks/SlugFormatter';
import {GetObjDocument} from 'assets/hooks/GetDocument';
import GetMultipleDocs from "assets/hooks/GetMultipleDocs";


/**
 * -- PROPS ENTRIES --
 * @props prop Object - Array captured from the database with the url parameter by getStaticProps
 * @return JSX.Element SectionCards
 */
export default function DescriptionRealEstate({props}) {
    //const {payload} = props;

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
                {/*<h1>{payload.realestate}</h1>*/}
            </main>
        </>
    )
}


/**
 * If you export an async function called getStaticProps from a page, Next.js will pre-render
 * this page at build time using the props returned by getStaticProps.
 *
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
/*
export const getStaticProps = async ({params}) => {
    const {slug} = params
    const arrParams = slug.split('-');

    const id = arrParams[arrParams.length - 2];
    const code = arrParams[arrParams.length - 1];

    const out = await GetObjDocument('Agencies', id, code);

    return {
        props: {props: out}, // will be passed to the page component as props
    }

}
*/

/**
 * The paths key determines which paths will be pre-rendered.
 * For example, suppose that you have a page that uses dynamic routes named pages/posts/[id].js.
 * If you export getStaticPaths from this page and return the following for paths:
 *
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
/*
export async function getStaticPaths() {
    const {payload} = await GetMultipleDocs('Agencies');

    return {
        paths: payload.map(doc => {
            const slug = SlugFormatter(doc.type, doc.location, doc.id, doc.code);

            return {
                params: {slug: slug}
            };
        }),

        fallback: false
    };

}*/