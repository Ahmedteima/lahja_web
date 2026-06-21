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

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using Lahja ("the Service"), you agree to these
            Terms of Service. If you do not agree, please do not use the Service.
          </p>
        </Section>

        <Section title="2. Description of the Service">
          <p>
            Lahja is an AI tool that replaces the spoken narration in an uploaded
            video with a voice cloned from that video's own audio, while
            preserving the original timing and background sounds.
          </p>
        </Section>

        <Section title="3. Your Content and Consent">
          <p>
            You are solely responsible for the content you upload. By uploading a
            video, you represent and warrant that you own it or have all
            necessary rights and permissions — including the consent of any
            person whose voice appears in it — to upload the content and to
            create a cloned voice from it.
          </p>
        </Section>

        <Section title="4. Acceptable Use">
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              impersonate any person or clone a voice without that person's
              consent;
            </li>
            <li>
              create misleading, fraudulent, defamatory, or deceptive content
              (including "deepfakes" intended to deceive);
            </li>
            <li>upload unlawful, infringing, or harmful material; or</li>
            <li>violate any applicable law or third-party rights.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            You retain ownership of the content you upload and of the converted
            output. We retain all rights to the Lahja software and brand.
          </p>
        </Section>

        <Section title="6. Free Trial and Pricing">
          <p>
            Lahja is currently offered free of charge for a limited introductory
            period. After this period, continued access will require a paid
            subscription of $8 per month. We will provide notice before any
            charges apply, and pricing or features may change over time.
          </p>
        </Section>

        <Section title="7. Disclaimer">
          <p>
            The Service is provided "as is" and "as available", without
            warranties of any kind. AI-generated voices and transcripts may
            contain inaccuracies, and we do not guarantee any specific result.
          </p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Lahja and its team shall not
            be liable for any indirect, incidental, or consequential damages
            arising from your use of, or inability to use, the Service.
          </p>
        </Section>

        <Section title="9. Termination">
          <p>
            We may suspend or terminate access to the Service at any time if
            these Terms are violated or to protect the Service or its users.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We may update these Terms from time to time. Continued use of the
            Service after changes take effect constitutes acceptance of the
            updated Terms.
          </p>
        </Section>

        <Section title="11. Contact">
          <p>
            Questions about these Terms? Email{" "}
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

export default Terms;
