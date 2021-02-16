import IconBed from "../../assets/svg/icon-bed";
export default function Mosaic() {
  return (
    <>
        <div className="container grid grid-cols-10 gap-1 2xl:block">
          <div className="tile col-span-6 2xl:mb-6 row-end-1 row-span-2">

            <img
              className="w-full h-full object-cover"
              src="https://images.alphacoders.com/435/435117.jpg"
            />
          </div>

          <div className="tile col-span-4 2xl:mb-4 row-end-0 row-span-1">
            <img
              className="w-full h-full object-cover"
              src="https://www.wallpapertip.com/wmimgs/44-449198_full-hd-background-home.jpg"
            />
          </div>

          <div className="tile col-span-2 2xl:mb-4">
            <img
              className="w-full h-full object-cover"
              src="https://www.wallpapertip.com/wmimgs/35-359079_home-cinema-wallpaper-home-theater-wallpaper-hd.jpg"
            />
          </div>

          <div className="tile col-span-2 2xl:mb-4">
            <img
              className="w-full h-full object-cover"
              src="https://www.wallpapertip.com/wmimgs/38-385386_dream-home-dream-house.jpg"
            />
          </div>
        </div>
     

      <style jsx>{`
        article:hover {
          transition: transform 0.2s;
          transform: scale(1.03);
        }
        .container{
            grid-template-rows: 50px 100px 40px 60px;
        }
      `}</style>
    </>
  );
}
