import { CartIcon, CloseIcon, HamburgerIcon } from "@/assets/icons";
import { useCart } from "@/store/useCart";
import Logo from "@assets/images/logo.png";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { name: "Products", path: "/products" },
  { name: "Orders", path: "/orders" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 43.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={clsx(
          "border-y-gray border-y text-dark w-full z-30 transition-all duration-200",
          isSticky ? "fixed top-0 bg-white/70 backdrop-blur-2xl" : "bg-white",
        )}
      >
        <div className="flex items-center container justify-between">
          <div className="flex items-center">
            <Link to="/" className="h-16 flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="min-w-40 min-h-10 w-40 h-10"
              />
            </Link>

            <nav className="ml-10">
              <ul className="hidden lg:flex">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      className="h-16 px-1.5 text-[13px] font-medium hover:text-primary transition flex items-center justify-center"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-1">
            <Link
              to={"/cart"}
              className="relative hover:opacity-80 h-16 px-2.5 flex items-center justify-center transition cursor-pointer"
            >
              <CartIcon className="h-5 w-5 " />

              <span className="absolute top-3 right-0 text-[9px] text-light bg-primary rounded-full h-4 w-4 shadow-2xl flex items-center justify-center">
                {getTotalItems()}
              </span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden relative hover:opacity-80 h-16 pl-2.5 flex items-center justify-center transition cursor-pointer"
            >
              <HamburgerIcon className="h-5 w-5 " />
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={clsx(
          "fixed flex text-dark flex-col top-0 left-0 h-full border-r border-r-gray w-[90%] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="hover:opacity-80 group hover:border-red-500 cursor-pointer p-1.5 border border-gray rounded-full m-2.5 ml-auto transition"
        >
          <CloseIcon className="h-4 w-4 group-hover:stroke-red-500 transition" />
        </button>

        <nav className="px-2.5">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:opacity-80 transition font-medium text-[13px] border-b border-gray pb-2.5 mb-2.5"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {isSticky && <div className="h-16" />}
    </>
  );
};

export default Navbar;
