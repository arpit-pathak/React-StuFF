import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex  justify-center mx-4 my-6 xl:m-[2rem] items-center ">
      <ul className="w-[35rem] h-[3.5rem] bg-gray-900 text-white flex flex-row items-center justify-evenly rounded-3xl shadow-lg shadow-gray-500/30 ">
        <li className="hover:text-black text-lg px-3 py-1 hover:bg-white rounded-3xl transition duration-250 ease-out hover:ease-in-out">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:text-black text-lg px-3 py-1 hover:bg-white rounded-3xl transition duration-250 ease-out hover:ease-in-out">
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li className="hover:text-black text-lg px-3 py-1 hover:bg-white rounded-3xl transition duration-250 ease-out hover:ease-in-out">
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li className="hover:text-black text-lg px-3 py-1 hover:bg-white rounded-3xl transition duration-250 ease-out hover:ease-in-out">
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
