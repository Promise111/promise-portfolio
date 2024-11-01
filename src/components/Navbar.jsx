import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const handleNavigate = (route) => {
    return (window.location.href = route);
  };
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="promise-ihunna" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() =>
            handleNavigate(
              "https://www.linkedin.com/in/promise-ihunna-3a4423145"
            )
          }
        />
        <FaGithub
          onClick={() => handleNavigate("https://github.com/Promise111")}
        />
        <FaSquareXTwitter />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
