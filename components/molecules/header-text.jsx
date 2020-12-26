export default function HeaderText() {
  return (
    <section className="my-10 font-axiformaHeavy">
      <h1 className="text-darkgray text-4xl text-center ml-2 mr-2">
        Encuentra la <span className="text-primary">casa de tus sueños</span>
        <br />
        Con En Arriendo
      </h1>
      <br />
      <h4 className="text-lightgray text-xs text-center ml-2 mr-2">
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

      <div className="md:w-36 ml-auto mr-auto hidden sm1:hidden sm2:hidden sm3:hidden md:flex lg:flex h-14 rounded-4xl flex shadow-searchBar bg-primaryDark pt-1.5 pb-2">
        <input
          type="text"
          placeholder="Search your home..."
          required
          className="bg-white border-r-0 border-b-0 border-l-0 float-left h-10 text-xs leading-3 px-6 pt-1 w-60 font-mono font-bold border-0 rounded-4xl outline-none m-0.5 ml-4 rounded-r-none"
        />

        <div class="select relative h-10 overflow-hidden rounded-lg rounded-tl-none rounded-bl-none w-52 leading-3 bg-white m-0.5 flex">
          <select name="slct" id="slct">
            <option selected disabled>
              Choose Location
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-32 bg-secondary rounded-full shadow-button font-mono text-xs text-white outline-none focus:outline-none ml-3 mr-2 mt-0-5 hover:bg-purple-900"
        >
          Search
        </button>
      </div>

      <div class="block w-60 h-40 searchbar-mobile block ml-auto mr-auto sm1:block sm2:block sm3:block md:hidden lg:hidden">
        <input
          type="text"
          placeholder="Search your home..."
          required
          className="w-full block bg-gray-100 float-left h-11 text-xs leading-3 px-6 pt-1 font-mono font-bold border-2 border-solid border-gray-100 rounded-4xl outline-none"
        />

        <br />
        <br />

        <div class="select relative h-11 overflow-hidden rounded-4xl  w-full leading-3  m-0.5 bg-gray-100">
          <select name="slct" id="slct" className="w-full bg-gray-100 h-11">
            <option selected disabled className="bg-gray-100">
              Choose Location
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

<br/>


        <button
          type="submit"
          className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-full bg-secondary rounded-full shadow-button font-mono text-xs text-white outline-none focus:outline-none  hover:bg-purple-900"
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
