import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EMAIL = "ahmedtamer4970@gmail.com";

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
      <div className="text-gray-700 leading-8 space-y-3">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <Section title="1. Introduction">
          <p>
            Lahja ("we", "us") provides an AI tool that replaces the narration
            in a video with a voice cloned from that video's own audio. This
            Privacy Policy explains what information we process and how we use
            it. By using Lahja, you agree to this policy.
          </p>
        </Section>

        <Section title="2. Information We Process">
          <p>
            To perform a conversion we process the video files you upload and
            the audio and transcript derived from them. We may also process
            basic technical information (such as request timestamps) needed to
            operate the service. We do not require you to create an account or
            provide personal details to use the tool.
          </p>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>
            Your uploaded content is used solely to deliver the result you
            requested: extracting audio, transcribing it, generating a cloned
            voice, and producing the converted video. We do not use your content
            for advertising, and we do not sell it.
          </p>
        </Section>

        <Section title="4. Third-Party Processing">
          <p>
            Converting your video requires sending audio and text to third-party
            AI providers — including MiniMax (text-to-speech and voice cloning)
            and NVIDIA (transcript refinement). These providers process the data
            only to return the requested result and are subject to their own
            privacy terms.
          </p>
        </Section>

        <Section title="5. Voice Cloning">
          <p>
            A short sample of the uploaded audio is used to create a temporary
            voice model that generates the converted narration. This model is
            used only to fulfil your conversion and is not used to identify you
            or for any unrelated purpose.
          </p>
        </Section>

        <Section title="6. Data Retention">
          <p>
            Uploaded files and generated results are stored temporarily on our
            processing server so we can deliver the output to you. Please
            download your result promptly. We periodically delete processing
            files. You may request deletion of your data at any time by
            contacting us.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            You may request access to, or deletion of, data associated with your
            use of the service by emailing{" "}
            <a className="text-purple-700 underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this policy from time to time. Material changes will be
            reflected by updating the date above.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Questions about this policy? Email{" "}
            <a className="text-purple-700 underline" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            .
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default Privacy;
