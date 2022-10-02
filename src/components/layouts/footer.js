const Footer = () =>{
    return(
        <footer className="w-full bg-white shadow">
            <div className="justify-between p-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/">Home</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/menu">Menu</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/call">Call</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;