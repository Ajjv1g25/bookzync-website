import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms governing your use of BookZync's website and AI services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="April 2026"
      intro="Please read these Terms of Service carefully before using the BookZync website or purchasing our AI automation services."
    >
      <LegalSection num={1} title="Acceptance of terms">
        <p>
          By accessing or using our website, you agree to be bound by these
          Terms. If you disagree with any part of the terms, you may not access
          the service.
        </p>
      </LegalSection>

      <LegalSection num={2} title="Description of service">
        <p>
          BookZync provides AI chat automation, lead capture, and (on Growth+)
          custom website development tailored for service businesses —
          including dental clinics, medical practices, salons, and gyms. All
          services, including timelines, deliverables, and ongoing hosting,
          will be outlined in a separate client agreement upon purchase.
        </p>
      </LegalSection>

      <LegalSection num={3} title="AI disclaimer and limitation of liability">
        <p>
          While we strive to provide highly accurate AI agents, Artificial
          Intelligence is an emerging technology that may occasionally generate
          inaccurate information (&ldquo;hallucinations&rdquo;).
        </p>
        <p>
          <strong className="text-text">
            BookZync is not liable for any lost revenue, scheduling errors, or
            miscommunications that occur as a result of AI-generated responses.
          </strong>{" "}
          It is the responsibility of the business to monitor AI interactions
          and provide correct knowledge base documents during setup.
        </p>
        <p>
          For medical and healthcare contexts: the AI is explicitly trained
          never to diagnose, give medical advice, or attempt to handle
          emergencies. Urgent symptoms are directed to 911 or your nurse line.
          You are responsible for keeping your knowledge base accurate.
        </p>
      </LegalSection>

      <LegalSection num={4} title="Customer responsibilities">
        <p>You agree to:</p>
        <ul className="my-4 space-y-2.5">
          <li className="flex items-start gap-2.5 leading-relaxed text-text-muted">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-subtle" />
            <span>
              Provide accurate information about your services, hours, pricing,
              and policies during AI training.
            </span>
          </li>
          <li className="flex items-start gap-2.5 leading-relaxed text-text-muted">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-subtle" />
            <span>
              Review AI conversations periodically and notify us of any
              recurring errors so we can retrain.
            </span>
          </li>
          <li className="flex items-start gap-2.5 leading-relaxed text-text-muted">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-subtle" />
            <span>
              Comply with applicable laws regarding customer data, marketing
              consent (TCPA, GDPR), and industry-specific regulations (HIPAA
              for healthcare).
            </span>
          </li>
          <li className="flex items-start gap-2.5 leading-relaxed text-text-muted">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-text-subtle" />
            <span>
              Not use BookZync to spam, harass, or send unsolicited messages.
            </span>
          </li>
        </ul>
      </LegalSection>

      <LegalSection num={5} title="Intellectual property">
        <p>
          The original content, features, and functionality of this website
          and the BookZync platform are and will remain the exclusive property
          of BookZync and its licensors.
        </p>
        <p>
          On Growth+, custom websites built for clients will have ownership
          rights transferred according to the specific client contract.
          Generally: design, copy, and codebase ownership transfers to you
          after the final invoice is paid; the underlying chat platform
          remains BookZync&apos;s.
        </p>
      </LegalSection>

      <LegalSection num={6} title="Termination">
        <p>
          We may terminate or suspend access to our service immediately,
          without prior notice or liability, for any reason — including but
          not limited to a breach of these Terms.
        </p>
        <p>
          On termination, your right to use the service ceases immediately. You
          will have 30 days to export your lead and conversation data before
          deletion.
        </p>
      </LegalSection>

      <LegalSection num={7} title="Changes to terms">
        <p>
          We reserve the right to modify or replace these Terms at any time. We
          will notify active subscribers of material changes by email at least
          30 days before they take effect. By continuing to access or use our
          Service after revisions become effective, you agree to be bound by
          the revised terms.
        </p>
      </LegalSection>

      <LegalSection num={8} title="Contact us">
        <p>
          Questions about these Terms? Email{" "}
          <a
            href="mailto:hello@bookzync.com"
            className="font-medium text-text underline decoration-border underline-offset-4 hover:decoration-text"
          >
            hello@bookzync.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
