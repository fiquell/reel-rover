const Header = () => {
    return ( 
        <header className="flex-row md:flex bg-neutral-800 text-white p-4
        justify-between border-b border-neutral-700">
            <h1 className="text-white font-bold text-3xl ml-10 md:mb-0 mb-4">Movies</h1>
            <nav className="mr-10 ml-10">
                <input type="text" placeholder="Search Movies..." className="p-1 rounded-full bg-neutral-900 text-white text-center mr-2"/>
                <button className="bg-neutral-900 p-1 pl-2 pr-2 rounded-full text-sm">Search</button>
            </nav>
        </header>
     );
}
 
export default Header;