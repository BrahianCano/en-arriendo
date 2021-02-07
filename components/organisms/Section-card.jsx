//Import molecules//
import SearchCard from "../molecules/Search-Card"


/**
 * -- PROPS ENTRIES --
 * @InitialProps prop Object -  Array of properties to generate multiple cards
 * @return JSX.Element SectionCards
 */
export default function SectionCards({InitialProps}) {

    return (
        <>
            {
                InitialProps.map((value, key) =>
                    <SearchCard key={key}
                                img="https://i.ibb.co/0D03wrT/img2.jpg"
                                title={`${value.type} en ${value.location}`}
                                code={value.code}
                                id={value.id}
                                subtitle="subtitle card new"
                                description="description of card new"
                    />
                )
            }

        </>
    );
}

