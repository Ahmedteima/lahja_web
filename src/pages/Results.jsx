import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AudioCard from "../components/AudioCard";
import Footer from "../components/Footer";
import api from "../services/api";

function Results() {
  const navigate = useNavigate();
  const location = useLocation();

  // result = { filename, downloadUrl, originalAudioUrl, convertedAudioUrl, transcript }
  const result = location.state?.result;

  const [media, setMedia] = useState({ video: null, original: null, converted: null });
  const [loading, setLoading] = useState(Boolean(result));
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!result) return;
    let objectUrls = [];
    let cancelled = false;

    async function load() {
      try {
        // Fetch through axios (carries the ngrok-skip header) as blobs, then
        // wrap in object URLs - so media works through tunnels that would
        // otherwise show an interstitial for direct <video>/<a> requests.
        const [v, o, c] = await Promise.all([
          api.get(result.downloadUrl, { responseType: "blob" }),
          api.get(result.originalAudioUrl, { responseType: "blob" }),
          api.get(result.convertedAudioUrl, { responseType: "blob" }),
        ]);
        if (cancelled) return;
        const video = URL.createObjectURL(v.data);
        const original = URL.createObjectURL(o.data);
        const converted = URL.createObjectURL(c.data);
        objectUrls = [video, original, converted];
        setMedia({ video, original, converted });
      } catch (err) {
        console.error(err);
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
      objectUrls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [result]);

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

            {loading && (
              <p className="text-purple-700 font-semibold mb-6">Loading result…</p>
            )}
            {loadError && (
              <p className="text-red-600 font-semibold mb-6">
                Could not load the result files from the server.
              </p>
            )}

            {/* Video preview */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-10">
              {media.video ? (
                <video controls src={media.video} className="w-full rounded-2xl bg-black" />
              ) : (
                <div className="w-full aspect-video rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                  {loading ? "Loading video…" : "Video unavailable"}
                </div>
              )}
            </div>

            {/* Audio comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <AudioCard title="Original Audio" src={media.original} />
              <AudioCard title="Converted Audio" src={media.converted} />
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
                href={media.video || undefined}
                download={result.filename}
                className={`px-8 py-3 rounded-full transition text-center ${
                  media.video
                    ? "bg-purple-700 text-white hover:bg-purple-800"
                    : "bg-gray-200 text-gray-400 pointer-events-none"
                }`}
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
