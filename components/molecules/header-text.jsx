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

<div class="relative text-gray-600">
  <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-1 border-solid border-inputColor mt-16 block mr-auto ml-auto min-w-400"></input>

</div>
 
  </div>
  );
}
