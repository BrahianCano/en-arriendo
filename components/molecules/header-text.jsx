export default function HeaderText() {
  return (
    <section className="my-10 font-axiformaHeavy">
      <h1 className="text-darkgray text-4xl text-center">
        Encuentra la <span className="text-primary">casa de tus sueños</span>
        <br />
        Con En Arriendo
      </h1>
      <br />
      <h4 className="text-lightgray text-xs text-center">
        Registrate ahora para tener acceso a cientos de casas diseñadas para ti
      </h4>

   

    {/*   <form class="search-wrapper cf bg-transparent mx-auto mb-12 mt-16 w-input rounded-3xl shadow-form table clear-both scale-100 border-1.7">
        <input
          type="text"
          placeholder="Search your home..."
          required
          className="bg-white border-r-0 border-b-0 border-l-0 float-left h-10 text-xs leading-3 px-6 pt-1 w-80 font-mono font-bold border-0 rounded-3xl outline-none"
        ></input>
        <button
          type="submit"
          className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-28 bg-primary rounded-3xl shadow-button font-mono text-xs text-white outline-none focus:outline-none m-0.5"
        >
          Search
        </button>
      </form> */}



      <br />
      <br />

      <div className="w-full  h-16 rounded-4xl flex shadow-searchBar bg-primaryDark">
      <input
          type="text"
          placeholder="Search your home..."
          required
          className="bg-white border-r-0 border-b-0 border-l-0 float-left h-1xl text-xs leading-3 px-6 pt-1 w-60 font-mono font-bold border-0 rounded-4xl outline-none m-0.5"
        ></input>
        <button
          type="submit"
          className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-28 bg-primary rounded-3xl shadow-button font-mono text-xs text-white outline-none focus:outline-none mt-3 ml-60"
        >
          Search
        </button> 

      </div>

    </section>




  );
}
