import { LegalPage, LegalSection, LegalList } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How BookZync collects, uses, and protects your information across our website and AI services.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="April 2026"
      intro={`BookZync ("we", "us", or "our") operates the website and AI automation services provided to service businesses — dental clinics, medical practices, salons, and gyms. This Privacy Policy explains how we collect, use, and protect your information.`}
    >
      <LegalSection num={1} title="Information we collect">
        <p>
          When you visit our website or interact with our AI agents, we may
          collect:
        </p>
        <LegalList
          items={[
            "Personal details: name, email address, phone number, and business name when you submit a form.",
            "Usage data: chat logs with our AI bot, IP addresses, browser types, and pages visited to help us improve our service.",
            "Lead and booking data: information your customers share with the AI to request an appointment (name, contact, requested time, intent).",
          ]}
        />
      </LegalSection>

      <LegalSection num={2} title="How we use your information">
        <p>We use the collected information to:</p>
        <LegalList
          items={[
            "Provide, operate, and maintain our website and AI services.",
            "Communicate with you regarding demos, pricing, and support.",
            "Improve our AI models and website functionality.",
            "Send booking confirmations and lead notifications to your team.",
          ]}
        />
      </LegalSection>

      <LegalSection num={3} title="HIPAA & sensitive customer data">
        <p>
          BookZync is building tools designed to be HIPAA-compliant for medical
          and dental practices, but we are not HIPAA-certified yet. We are
          transparent about this on our medical and dental industry pages.
        </p>
        <p>
          As a visitor browsing our main website, any information you submit
          via our contact forms or public AI chatbot is treated as standard B2B
          communication. <strong className="text-text">Do not submit Protected Health Information (PHI) through our public-facing website.</strong>
        </p>
        <p>
          Our AI is explicitly instructed never to collect diagnoses, symptoms,
          or medical history from your customers. Only name, contact, intent,
          and requested time are stored.
        </p>
      </LegalSection>

      <LegalSection num={4} title="Third-party services">
        <p>
          We may use third-party services (such as Anthropic or OpenAI for AI
          processing, Stripe for payments, and hosting providers). These third
          parties have access to your Personal Information only to perform
          tasks on our behalf and are obligated not to disclose or use it for
          any other purpose.
        </p>
      </LegalSection>

      <LegalSection num={5} title="Data retention">
        <p>
          Chat logs and lead data are retained for as long as your subscription
          is active. On cancellation, we retain data for 30 days for export,
          then delete unless legally required to keep it longer (e.g., for tax
          records).
        </p>
      </LegalSection>

      <LegalSection num={6} title="Your rights">
        <p>You have the right to:</p>
        <LegalList
          items={[
            "Access the personal information we hold about you.",
            "Request correction or deletion of your data.",
            "Export your customer lead and booking history at any time.",
            "Object to or restrict certain processing of your data.",
          ]}
        />
        <p>Email hello@bookzync.com to exercise any of these rights.</p>
      </LegalSection>

      <LegalSection num={7} title="Contact us">
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at{" "}
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
