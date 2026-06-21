import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EMAIL = "ahmedtamer4970@gmail.com";
const GITHUB_URL = "https://github.com/Ahmedteima/lahja";

const TEAM = [
  "Ahmed Tamer Abd El-Latief El-Saied Teima",
  "Tasneem Mohamed Ahmed Abd El-Maksoud",
  "Yousef Mohamed Fawzy Shehab El-dein",
  "Menna Ahmed Mohamed Ahmed",
  "Yasmeen Mohamed Ahdy El-Akkad",
  "Ziad Asaad Abd El-Fatah Hassan",
];

// Distinct gradient per avatar for a lively grid.
const GRADIENTS = [
  "from-purple-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-sky-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-fuchsia-500 to-purple-500",
];

function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">Get in touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or feedback about Lahja? Reach out to the team — we'd
            love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href={`mailto:${EMAIL}`}
              className="px-8 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
            >
              ✉ {EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition"
            >
              ★ GitHub
            </a>
          </div>
        </div>

        {/* Team */}
        <h2 className="text-2xl font-bold text-center mb-8">The Lahja Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((name, i) => (
            <div
              key={name}
              className="bg-white rounded-3xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} text-white flex items-center justify-center text-2xl font-bold mb-4 shadow`}
              >
                {initials(name)}
              </div>
              <h3 className="font-semibold text-gray-800 leading-snug">{name}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
