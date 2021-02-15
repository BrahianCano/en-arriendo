import Head from "next/head";

// Import template //
import TemplateSearchRealestate from "../../components/templates/Template-search-realestate"

// Import hooks //
import GetMultipleDocs from "../../assets/hooks/GetMultipleDocs";


/**
 * -- PROPS ENTRIES --
 * @props prop Object - Array of properties obtained from the database by getStaticProps
 * @return JSX.Element SearchRealEstate
 */
export default function SearchRealEstate({props}) {
    const {payload} = props;

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
                <TemplateSearchRealestate StaticProps={payload}/>
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

export async function getStaticProps() {
    const out = await GetMultipleDocs('Agencies');

    return {
        props: {props: out}, // will be passed to the page component as props
    }
}
