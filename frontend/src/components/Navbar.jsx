
const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center py-6'>
            <div className="flex justify-between items-center text-white ">
                <div className="text-shadow-indigo-300 text-2xl bg-black px-8 py-2.5 rounded-2xl mx-3">Probability</div>
                <ul className="flex items-center space-x-4">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">Trading</a></li>
                    <li><a href="#" className="hover:text-gray-400">Team 11</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Services</a></li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 px-20">
              <button className='px-8 py-2.5 rounded-2xl  text-white font-medium bg-black cursor-pointer'>Login / Singup</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar