import { LegalPage, LegalSection, LegalList } from "@/components/legal-page";

export const metadata = {
  title: "Refund Policy",
  description:
    "BookZync's refund policy for setup fees, monthly subscriptions, and service performance.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      lastUpdated="May 2026"
      intro={`At BookZync, we are committed to providing high-quality AI solutions for service businesses — dental clinics, medical practices, salons, and gyms. Because our services involve significant custom technical labor and third-party API costs, we have established the following refund policy. Please read it carefully before starting onboarding. By paying a setup fee or starting a subscription, you agree to these terms.`}
    >
      <LegalSection num={1} title="One-time setup fees">
        <p>
          BookZync charges a one-time setup fee that covers the manual labor
          involved in training your custom AI, configuring your database, and
          (on Growth+) building your custom website. Current setup fees:
        </p>
        <LegalList
          items={[
            "Starter: $99 one-time setup",
            "Growth: $199 one-time setup",
            "Growth+: $499 one-time setup (includes a custom website built by our team)",
          ]}
        />
        <p>
          <strong className="text-text">Setup fees are non-refundable</strong>{" "}
          once the onboarding process has begun. We dedicate engineering hours
          to your specific business immediately upon payment — AI training,
          calendar configuration, brand voice tuning, and (on Growth+) website
          design — and these costs cannot be recovered.
        </p>
      </LegalSection>

      <LegalSection num={2} title="Monthly subscriptions">
        <p>
          Our monthly subscription plans are billed on a recurring basis every
          30 days. Current monthly pricing:
        </p>
        <LegalList
          items={[
            "Starter: $149 / month",
            "Growth: $349 / month",
            "Growth+: $599 / month",
          ]}
        />
        <p>
          Annual plans give you 2 months free (priced at 10× the monthly rate
          paid upfront).
        </p>
        <p>
          <strong className="text-text">Cancel anytime.</strong> You may cancel
          your subscription at any time by contacting our support team or
          through your dashboard. Service remains active until the end of your
          current paid period.
        </p>
        <p>
          <strong className="text-text">No prorated refunds.</strong> We do not
          offer partial or prorated refunds for unused days within a billing
          cycle. If you cancel mid-month, your AI service will remain active
          until the end of your current paid period, then stop. No further
          charges.
        </p>
      </LegalSection>

      <LegalSection num={3} title="Annual subscriptions">
        <p>
          Annual subscriptions are paid upfront and discounted (2 months free
          vs monthly billing). If you cancel an annual subscription mid-term:
        </p>
        <LegalList
          items={[
            "Service remains active until the end of the annual term.",
            "We do not refund the remaining months of an annual plan.",
            "You will not be auto-billed for the next annual term.",
          ]}
        />
      </LegalSection>

      <LegalSection num={4} title="Service uptime & performance">
        <p>
          Our system relies on third-party AI providers (such as Anthropic and
          OpenAI). We cannot guarantee 100% uptime, though we target 99.9%.
          Service interruptions related to third-party AI or hosting outages
          are not grounds for a refund.
        </p>
        <p>
          We will, however, work diligently to restore service in any event of
          a BookZync-specific error. If a confirmed BookZync-side outage
          exceeds 7 days within a single billing cycle and we cannot fix it,
          you may request a prorated credit for the affected days. Email
          hello@bookzync.com to request.
        </p>
      </LegalSection>

      <LegalSection num={5} title="Chargebacks and payment disputes">
        <p>
          We encourage clients to contact us directly to resolve any billing
          issues. Unauthorized chargebacks or payment disputes filed without
          first contacting our team will result in the immediate suspension of
          your AI assistant and any associated services.
        </p>
        <p>
          Most billing concerns are resolved within one business day when raised
          directly. We always prefer a conversation over a dispute.
        </p>
      </LegalSection>

      <LegalSection num={6} title="Contact us">
        <p>
          If you have any questions regarding your billing or this policy,
          please reach out to our team:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:hello@bookzync.com"
            className="font-medium text-text underline decoration-border underline-offset-4 hover:decoration-text"
          >
            hello@bookzync.com
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
