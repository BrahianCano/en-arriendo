//Import molecules//
import SearchCard from "../molecules/Search-Card"


export default function SectionCards({dataGetInitialProps}) {

    return (
        <>
            {
                dataGetInitialProps.map((value, key) =>
                    <SearchCard key={key}
                                img="https://i.ibb.co/0D03wrT/img2.jpg"
                                title={value.title}
                                subtitle="subtitle card new"
                                description="description of card new"
                    />
                )
            }

        </>
    );
}

