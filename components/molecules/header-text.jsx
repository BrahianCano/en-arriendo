

export default function HeaderText() {
  return (
    <div className="">
      <h1 className="text-darkgray font-axiformaHeavy text-4xl text-center mt-10">
        Encuentra la <span className="text-primary">casa de tus sueños</span>
        <br />
        Con En Arriendo
      </h1>
      <br />
      <h4 className="font-axiformaHeavy text-lightgray text-xs text-center">
        Registrate ahora para tener acceso a cientos de casas diseñadas para ti
      </h4>

   {/*    <div class="relative mr-6 my-2">
  <input type="search" class="px-10 py-2.5 rounded font-sans" placeholder="Search by name..."></input>
  <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-normal py-2 px-4 mr-1 rounded inputSearch">Button</button>
		
</div> */}

{/* <div class="relative text-gray-600">
  <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-1 border-solid border-inputColor mt-16 block mr-auto ml-auto min-w-400"></input>

</div> */}

<form class="search-wrapper cf bg-transparent mx-auto mb-12 mt-16 w-input rounded-3xl shadow-form table clear-both scale-100 border-1.7">
        <input type="text" placeholder="Search your home..." required className="bg-white border-r-0 border-b-0 border-l-0 float-left h-10 text-xs leading-3 px-6 pt-1 w-80 font-mono font-bold border-0 rounded-3xl outline-none"></input>
        <button type="submit" className="border-0 cursor-pointer float-right h-10 overflow-visible p-0 relative text-white uppercase w-28 bg-primary rounded-3xl shadow-button font-mono text-xs text-white outline-none focus:outline-none m-0.5">Search</button>
    </form>

<br/>
<br/>



 
  </div>
  );
}
