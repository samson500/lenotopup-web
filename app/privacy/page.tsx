export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-green-700 mb-2">LENOTOPUP</h1>
      <h2 className="text-xl font-semibold mb-1">Privacy Policy</h2>
      <p className="text-sm text-gray-400 mb-10">Last updated: February 20, 2026</p>

      <p className="mb-6">
        Welcome to LENOTOPUP. This Privacy Policy explains how LENOTOPUP Limited ("we", "us", or "our")
        collects, uses, and protects your information when you use our mobile application and services.
      </p>

      <Section title="1. Who We Are">
        LENOTOPUP Limited is the data controller responsible for your personal information. If you have
        any questions about this policy, you can contact us at{" "}
        <a href="mailto:lenotopup@gmail.com" className="text-green-600 underline">
          lenotopup@gmail.com
        </a>.
      </Section>

      <Section title="2. Information We Collect">
        <p className="mb-3">
          To provide our services, we collect the following information when you register and use the LENOTOPUP app:
        </p>
        <p className="mb-3">
          <strong>Account Information:</strong> Your name, email address, and phone number provided during registration.
        </p>
        <p className="mb-3">
          <strong>Financial Information:</strong> Bank account details you provide for the purpose of withdrawals
          and payments. We do not store full card details on our servers.
        </p>
        <p className="mb-3">
          <strong>Transaction Data:</strong> Records of airtime purchases, data purchases, bill payments,
          and commissions earned through your account.
        </p>
        <p>
          <strong>Usage Data:</strong> Information about how you interact with our app, including login
          activity and feature usage, to help us improve our service.
        </p>
      </Section>

      <Section title="3. How We Use Your Information">
        <p className="mb-2">We use your information to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Create and manage your LENOTOPUP account.</li>
          <li>Process airtime, data, and bill payment transactions.</li>
          <li>Calculate and credit your agent commissions.</li>
          <li>Process withdrawals to your bank account.</li>
          <li>Send you important account notifications and updates.</li>
          <li>Comply with legal and regulatory obligations.</li>
          <li>Detect and prevent fraud or unauthorized activity.</li>
        </ul>
      </Section>

      <Section title="4. How We Share Your Information">
        <p className="mb-3">
          We do not sell your personal information to any third party. We may share your information
          only in the following circumstances:
        </p>
        <p className="mb-3">
          <strong>Service Providers:</strong> With trusted payment processors and telecom partners
          strictly to fulfil transactions you initiate.
        </p>
        <p className="mb-3">
          <strong>Legal Requirements:</strong> When required by law, court order, or government authority.
        </p>
        <p>
          <strong>Business Protection:</strong> To investigate or prevent fraud, security breaches, or illegal activity.
        </p>
      </Section>

      <Section title="5. Data Retention">
        We retain your personal data for as long as your account is active or as needed to provide you
        services. If you request account deletion, we will delete your data within 30 days, except where
        we are required by law to retain it longer (e.g. financial transaction records).
      </Section>

      <Section title="6. Data Security">
        We take the security of your data seriously. We use industry-standard encryption and security
        measures to protect your information from unauthorized access, disclosure, or misuse. However,
        no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </Section>

      <Section title="7. Your Rights">
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your account and personal data.</li>
          <li>Withdraw consent at any time where processing is based on consent.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:lenotopup@gmail.com" className="text-green-600 underline">
            lenotopup@gmail.com
          </a>.
        </p>
      </Section>

      <Section title="8. Children's Privacy">
        LENOTOPUP is not intended for use by anyone under the age of 18. We do not knowingly collect
        personal information from minors. If we become aware that a minor has provided us with personal
        information, we will delete it immediately.
      </Section>

      <Section title="9. Changes to This Policy">
        We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated"
        date at the top of this page and notify you via the app or email. We encourage you to review
        this policy periodically.
      </Section>

      <Section title="10. Contact Us">
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
        <p className="mt-3">
          <strong>LENOTOPUP Limited</strong><br />
          Email:{" "}
          <a href="mailto:lenotopup@gmail.com" className="text-green-600 underline">
            lenotopup@gmail.com
          </a><br />
          Website:{" "}
          <a href="https://lenotopup.com" className="text-green-600 underline">
            lenotopup.com
          </a>
        </p>
      </Section>

      <p className="mt-16 text-sm text-gray-400 text-center">
        &copy; 2026 LENOTOPUP Limited. All rights reserved.
      </p>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold text-green-700 border-b border-green-100 pb-2 mb-3">
        {title}
      </h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}