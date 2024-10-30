import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className="bg-red-500 text-white text-xl flex-col justify-center md:flex-row items-center md:justify-center py-8 md:py-0 w-full">
                <div className="md:hidden text-3xl w-10 ml-4" onClick={()=> setOpen(!open)}>
                    {
                        open ? <IoClose /> : <IoMenu />
                    }
                </div>
                <ul className={`flex flex-col md:flex-row items-center md:gap-16 justify-center py-2 bg-red-500 absolute md:static duration-1000 ${open ? "top-20" : "-top-96"}`}>
                    <NavLink className="p-5" to="/">Home</NavLink>
                    <NavLink to="/comments">Comment</NavLink>
                    <NavLink className="p-5" to="/about">About</NavLink>
                    <NavLink className="p-5" to="/contact">Contact</NavLink>
                    <NavLink className="p-5" to="/blog">Blog</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;