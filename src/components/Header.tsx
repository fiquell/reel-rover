const Header = () => {
    return ( 
        <header className="flex-row md:flex bg-slate-900 text-white p-4
        justify-between border-b border-neutral-700">
            <h1 className="text-white font-bold text-3xl ml-10 md:mb-0 mb-4">Movies</h1>
            <nav className="mr-10 ml-10">
                <input type="text" placeholder="Search Movies..." className="p-2 rounded-sm bg-neutral-900 text-white text-center mr-2"/>
                <button className="bg-blue-600 py-2 px-8 rounded-sm text-sm">LOGIN</button>
            </nav>
        </header>
     );
}
 
export default Header;