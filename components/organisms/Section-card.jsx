//Import molecules//
import SearchCard from "../molecules/Search-Card"


/**
 * -- PROPS ENTRIES --
 * @StaticProps prop Object -  Array of properties to generate multiple cards
 * @return JSX.Element SectionCards
 */
export default function SectionCards({StaticProps}) {

    return (
        <>
            {
                StaticProps.map((value, key) =>
                    <SearchCard key={key}
                                img="https://i.ibb.co/0D03wrT/img2.jpg"
                                location={value.location}
                                code={value.code}
                                id={value.id}
                                type={value.type}
                                price={value.price}
                    />
                )
            }
        </>
    );
}

