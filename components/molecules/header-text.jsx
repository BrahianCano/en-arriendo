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

      <div className="w-21 ml-auto mr-auto sm1:w-25 sm2:w-31 sm3:w-35 md:w-38 lg:w-41 h-14 rounded-4xl flex shadow-searchBar bg-primaryDark pt-1.5 pb-2 flex">
        <input
          type="text"
          placeholder="Search your home..."
          required
          className="bg-white border-r-0 border-b-0 border-l-0 float-left h-10 text-xs leading-3 px-6 pt-1 w-60 font-mono font-bold border-0 rounded-4xl outline-none m-0.5 ml-4 rounded-r-none"
        />
       
        <div class="select">
        <select name="slct" id="slct">
          <option selected disabled>
            Choose an option
          </option>
          <option value="1">Pure CSS</option>
          <option value="2">No JS</option>
          <option value="3">Nice!</option>
        </select>
      </div>
      <button
          type="submit"
          className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-32 bg-secondary rounded-full shadow-button font-mono text-xs text-white outline-none focus:outline-none ml-3 mr-2 mt-0-5 hover:bg-purple-900"
        >
          Search
        </button>
      </div>

   

      <br />
      <br />
      <br />

    
    </section>
  );
}
