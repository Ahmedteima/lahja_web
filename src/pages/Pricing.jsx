import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Pricing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lahja is currently free to try for a limited time. Experience the
            full pipeline today — no credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free trial */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-purple-600 relative">
            <span className="absolute -top-3 left-8 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              LIMITED-TIME OFFER
            </span>
            <h2 className="text-2xl font-bold mb-2">Free Trial</h2>
            <p className="text-4xl font-extrabold mb-1">
              $0<span className="text-base font-medium text-gray-500"> / now</span>
            </p>
            <p className="text-gray-500 mb-6">
              Free for a limited time while we launch.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ Full voice-conversion pipeline</li>
              <li>✔ Original voice identity preserved</li>
              <li>✔ Transcript &amp; downloadable result</li>
            </ul>
            <button
              onClick={() => navigate("/")}
              className="w-full px-6 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
            >
              Try it now
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <p className="text-4xl font-extrabold mb-1">
              $8<span className="text-base font-medium text-gray-500"> / month</span>
            </p>
            <p className="text-gray-500 mb-6">
              Pricing that applies once the free trial period ends.
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✔ Everything in the Free Trial</li>
              <li>✔ Priority processing</li>
              <li>✔ Higher monthly usage limits</li>
            </ul>
            <button
              disabled
              className="w-full px-6 py-3 bg-gray-200 text-gray-500 rounded-full font-semibold cursor-not-allowed"
            >
              Coming soon
            </button>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          Prices in USD. The Pro plan will become available after the
          introductory free period.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Pricing;
