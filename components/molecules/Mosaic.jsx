export default function Mosaic() {
    return (
        <>
            <div className="mx-40 hidden md:block">
                <div className="grid grid-cols-3 grid-rows-4 gap-3 h-96">
                    <div className="col-span-2 row-span-4 bg-primary flex justify-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="slider__img" alt="PENDIENTE SEO"></img>
                    </div>
                    <div className="col-span-1 row-span-2 bg-red-900">
                        <img src="https://i.ibb.co/0D03wrT/img2.jpg" className="slider__img" alt="PENDIENTE SEO"></img>
                    </div>
                    <div className="col-span-1 row-span-2 bg-blue-900">
                        <img src="https://i.ibb.co/0D03wrT/img2.jpg" className="slider__img" alt="PENDIENTE SEO"></img>
                    </div>
                </div>
            </div>
            <div className="slider block md:hidden">
                <ul className="slider__wrapper">
                    <li className="slider__item">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="slider__img" alt="PENDIENTE SEO"></img>
                    </li>
                    <li className="slider__item">
                        <img src="https://i.ibb.co/0D03wrT/img2.jpg" className="slider__img" alt="PENDIENTE SEO"></img>
                    </li>
                    <li className="slider__item">
                        <img src="https://i.ibb.co/0D03wrT/img2.jpg" className="slider__img" alt="PENDIENTE SEO"></img>
                    </li>
                </ul>
            </div>

            <style jsx>{`

              .slider {
                width: 100%;
                justify-content: center;
              }

              .slider__item {
                width: 80%;
                margin-right: 10px;
                height: 250px;
                display: block;
                flex-shrink: 0;
                border-radius: 0.2rem;
                background-color: #F6F6F9;
              }

              .slider__wrapper {
                width: 100%;
                margin: 0 1rem;
                display: flex;
                flex-flow: row nowrap;
                overflow-x: scroll;
              }

              .slider__img {
                height: 100%;
                width: 100%;
                border-radius: 0.2rem;
              }
              
            `}</style>
        </>
    );
}