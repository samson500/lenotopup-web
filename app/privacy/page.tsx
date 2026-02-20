export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-3xl font-bold text-green-700 mb-2">LENOTOPUP</h1>
      <h2 className="text-xl font-semibold mb-1">Privacy Policy</h2>
      <p className="text-sm text-gray-400 mb-10">Last updated: February 20, 2026</p>

      <p className="mb-6">
        Welcome to LENOTOPUP. This Privacy Policy explains how LENOTOPUP Limited ("we", "us", or "our")
        handles your information when you use our mobile application.
      </p>

      <Section title="1. Who We Are">
        LENOTOPUP Limited is the developer of the LENOTOPUP app. If you have any questions about this
        policy, you can contact us at{" "}
        <a href="mailto:lenotopup@gmail.com" className="text-green-600 underline">
          lenotopup@gmail.com
        </a>.
      </Section>

      <Section title="2. Information We Collect">
        We do not collect, store, or process any personal information from users of this app.
        The LENOTOPUP app does not require you to create an account, log in, or provide any
        personal details. The app serves as an informational platform that displays content
        and redirects users to the official LENOTOPUP web platform.
      </Section>

      <Section title="3. No Data Storage">
        Since we do not collect any user data, we do not store any information on our servers.
        We have no access to your name, email address, phone number, location, or any other
        personal information.
      </Section>

      <Section title="4. External Redirect">
        This app redirects users to the official LENOTOPUP web platform at{" "}
        <a href="https://lenotopup.com" className="text-green-600 underline">
          lenotopup.com
        </a>
        , which is owned and operated by LENOTOPUP Limited. No third-party services are involved.
      </Section>

      <Section title="5. Children's Privacy">
        Our app does not collect any data from anyone, including children under the age of 18.
        The app is safe for all users as no personal information is requested or stored at any point.
      </Section>

      <Section title="6. Changes to This Policy">
        We may update this Privacy Policy from time to time. When we do, we will revise the
        "Last updated" date at the top of this page. We encourage you to review this policy periodically.
      </Section>

      <Section title="7. Contact Us">
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
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