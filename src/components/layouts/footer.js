
import { useState } from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../../utils/useDarkMode";
const Footer = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [active, setActive] = useState("home");
    // const isActive = router.asPath === item.href;
    return (
        <footer className="w-full bg-white shadow dark:bg-black">
            <div className="justify-center p-4 mx-auto items-center flex flex-wrap md:px-8">
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 md:block md:pb-0 mt-0`}
                    >
                        <ul className="items-center justify-center space-y-8 flex flex-wrap space-x-6 space-y-0">
                            <li className={`flex dark:text-white text-gray-600 hover:text-blue-600 ${active === "home" ? "selected" : ""}`} onClick={()=>setActive("home")}>
                                <Link to="/" className="flex gap-2"><img src="./home-icon.svg"/> {active === "home" ? "Home" : ""}</Link>
                            </li>
                            <li className={`dark:text-white text-gray-600 hover:text-blue-600 ${active === "menu" ? "selected" : ""}`} onClick={()=>setActive("menu")}>
                                <Link to="/menu" className="flex gap-2"><img src="./menu-icon.svg"/> {active === "menu" ? "Menu" : ""}</Link>
                            </li>
                            <li className={`dark:text-white text-gray-600 hover:text-blue-600 ${active === "call" ? "selected" : ""}`} onClick={()=>setActive("call")}>
                                <Link to="/call" className="flex gap-2"><img src="./call-icon.svg"/>  {active === "call" ? "Call" : ""}</Link>
                            </li>
                            <li className={`dark:text-white text-gray-600 hover:text-blue-600 ${active === "admin" ? "selected" : ""}`} onClick={()=>setActive("admin")}>
                                <Link to="/admin" className="flex gap-2"><img src="./admin-icon.svg"/>  {active === "admin" ? "Admin" : ""}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative bottom-[130px] float-right">
                {colorTheme === "light" ? (
                    <svg
                        onClick={() => setTheme("light")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-indigo-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                    </svg>
                ) : (
                    <svg
                        onClick={() => setTheme("dark")}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                )}
            </div>
        </footer>
    )
}
export default Footer;