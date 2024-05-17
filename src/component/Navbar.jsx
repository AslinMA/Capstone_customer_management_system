import { useState } from "react";
import logo from "../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Order", path: "Order" },
    { link: "Bills", path: "Bills" },
    { link: "Tapping", path: "Tapping" },
    { link: "Contact", path: "Contact" },
    { link: "Tearms & Condition", path: "Contact" },
    
  ];
  return (
    <>
      <nav className="bg-white md:px-12  max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x items-center">
            <a
              href=""
              className="text-2xl font-semibold flx items-center space-x-6 text-primary"
            >
              <img
                src={logo}
                alt="logo"
                className="inline-block items-center"
                style={{ width: "150px", height: "100px", marginRight: "4em" }}
              />
              {/* <span className='pr-4'>Latex Harvester</span> */}
            </a>
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <a key={link} href="path" className="block hover:text-gray-300">
                  {link}
                </a>
              ))}
            </ul>
          </div>
          {/* ======================================langage and sing butten ===========================================================================*/}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary "
            >
              <GrLanguage className="mr-2" />
              Language
            </a>

            <button className="bg-green  py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-dark_grenn">
              Sing up
            </button>
          </div>

          {/*======================================= manu butten.only display on mobile ======================================*/}
          <div className="md:hidden px-4">
            <button
              onClick={toggleMenu}
              className="text-white text-lg focus:outline-none
           focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary " />
              ) : (
                <FaBars className="w-6 h-6 text-primary text-lg " />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-green text-lg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        {
           navItems.map(({ link, path }) => (<a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
                   ))
        }
      </div>
    </>
  );
};

export default Navbar;
