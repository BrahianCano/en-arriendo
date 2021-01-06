import IconPublic from "../../assets/svg/icon-apartament";

export default function SectionBestHouses() {


    return (
        <>
            <div className="cardBody flex items-center justify-center overflow-hidden">

                {/* Card 1 */}
                <div style={{gridTemplateAreas: '"image" "text" "stats"'}}
                     class="card grid bg-white text-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl cursor-pointer m-8 grid-cols-cards grid-rows-cards rounded-18 shadow-card duration-500 hover:shadow-cardHover">
                    <div style={{backgroundImage: 'url("https://i.ibb.co/0D03wrT/img2.jpg")', gridArea: 'image'}}
                         class="card-image bg-cover rounded-tl-2xl rounded-tr-2xl"></div>
                    <div style={{gridArea: 'text'}} class="card-text m-6">
                        <span class="date text-pink-600 text-xs">1 days ago</span>
                        <h2 className="mt-0 text-3xl">Casa en Medellin</h2>
                        <p className="text-sm font-light text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur,
                            Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                        <br/>

                        <button
                            class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-100 focus:outline-none"
                        >
                            Success
                        </button>
                    </div>

                </div>

                {/* Card 2 */}

                <div style={{gridTemplateAreas: '"image" "text" "stats"'}}
                     class="card grid bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-center cursor-pointer m-8 grid-cols-cards grid-rows-cards rounded-18 shadow-card duration-500">
                    <div style={{backgroundImage: 'url("https://i.ibb.co/XXgtqMX/img3.jpg")', gridArea: 'image'}}
                         class="card-image bg-cover rounded-tl-2xl rounded-tr-2xl"></div>
                    <div style={{gridArea: 'text'}} class="card-text m-6">
                        <span class="date text-pink-600 text-xs">4 days ago</span>
                        <h2 className="mt-0 text-3xl">Casa en Envigado</h2>
                        <p className="text-sm font-light text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur,
                            Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                        <br/>

                        <button
                            class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-100 focus:outline-none"
                        >
                            Success
                        </button>
                    </div>

                </div>

                {/* Card 3 */}

                <div style={{gridTemplateAreas: '"image" "text" "stats"'}}
                     class="card grid bg-white text-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl cursor-pointer m-8 grid-cols-cards grid-rows-cards rounded-18 shadow-card duration-500">
                    <div style={{backgroundImage: 'url("https://i.ibb.co/hY6LqF9/img1.jpg")', gridArea: 'image'}}
                         class="card-image bg-cover rounded-tl-2xl rounded-tr-2xl"></div>
                    <div style={{gridArea: 'text'}} class="card-text m-6">
                        <span class="date text-pink-600 text-xs">10 days ago</span>
                        <h2 className="mt-0 text-3xl">Casa en Barbosa</h2>
                        <p className="text-sm font-light text-gray-500  mt-2">Lorem ipsum dolor sit amet consectetur,
                            Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
                        <br/>

                        <button
                            class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-100 focus:outline-none"
                        >
                            Success
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}
