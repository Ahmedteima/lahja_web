import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-purple-700">Lahja AI</h3>
          <p className="text-gray-500 text-sm">
            © 2026 Lahja AI. Elevating voices everywhere.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0 text-gray-600">
          <Link to="/privacy" className="hover:text-purple-700 transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-purple-700 transition">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-purple-700 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
