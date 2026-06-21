import { Link } from "react-router-dom";

const GITHUB_URL = "https://github.com/Ahmedteima/lahja";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-sm bg-white">
      <Link to="/" className="text-2xl font-bold text-purple-700">
        Lahja
      </Link>

      <div className="flex gap-6 items-center text-gray-700">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-700 transition"
        >
          How it Works
        </a>
        <Link to="/pricing" className="hover:text-purple-700 transition">
          Pricing
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
