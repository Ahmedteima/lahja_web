function AudioCard({ title, src }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="font-bold text-xl mb-4">{title}</h2>

      {src ? (
        <audio controls className="w-full">
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p className="text-gray-400 text-sm">Audio not available.</p>
      )}
    </div>
  );
}

export default AudioCard;
