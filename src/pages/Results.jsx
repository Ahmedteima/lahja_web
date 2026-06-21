import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AudioCard from "../components/AudioCard";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../services/api";

function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  // result = { filename, downloadUrl, originalAudioUrl, convertedAudioUrl, transcript }
  const result = location.state?.result;
  const url = (path) => (path ? `${API_BASE_URL}${path}` : null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        {!result ? (
          <div className="text-center py-24">
            <h1 className="text-3xl font-bold mb-4">No result to show</h1>
            <p className="text-gray-600 mb-8">
              Start by uploading a video on the home page.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition"
            >
              Go to Home
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-5xl font-bold mb-4">Your video is ready</h1>
              <p className="text-gray-600 text-lg">
                The narration was replaced with the cloned voice while keeping
                the original timing and background sounds.
              </p>
            </div>

            {/* Video preview */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">
              <video
                controls
                src={url(result.downloadUrl)}
                className="w-full rounded-2xl bg-black"
              />
            </div>

            {/* Audio comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <AudioCard title="Original Audio" src={url(result.originalAudioUrl)} />
              <AudioCard title="Converted Audio" src={url(result.convertedAudioUrl)} />
            </div>

            {/* Transcript */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mt-12">
              <h2 className="text-2xl font-bold mb-4">Transcription</h2>
              <p className="text-gray-700 leading-8 whitespace-pre-wrap">
                {result.transcript || "Transcript not available."}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
              <a
                href={url(result.downloadUrl)}
                download={result.filename}
                className="px-8 py-3 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition text-center"
              >
                Download Video
              </a>

              <button
                onClick={() => navigate("/")}
                className="px-8 py-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                Try Another Video
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Results;
