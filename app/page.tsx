export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="rounded-lg border border-border bg-card p-8 shadow-sm transition-colors duration-200">
          <h1 className="border-b-2 border-primary pb-4 text-3xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: March 8, 2026</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Welcome to our Privacy Policy page. Your privacy is critically important to us.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We collect several different types of information for various purposes to provide and
              improve our services to you.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Personal Data:</strong> While using our service,
                we may ask you to provide us with certain personally identifiable information.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong> We may also collect
                information on how the service is accessed and used.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Use of Data</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We use the collected data for various purposes:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>
                To allow you to participate in interactive features of our service when you choose
                to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can improve the service
              </li>
              <li>To monitor the usage of the service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Transfer of Data</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Your information, including Personal Data, may be transferred to — and maintained on —
              computers located outside of your state, province, country or other governmental
              jurisdiction.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Disclosure of Data</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We may disclose personal information that we collect, or you provide:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>Legal Requirements</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Security of Data</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              The security of your data is important to us, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We may update our Privacy Policy from time to time.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Contact Us</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@yourcompany.com"
                  className="text-primary underline hover:text-primary/80"
                >
                  support@yourcompany.com
                </a>
              </li>
            </ul>
          </section>

          <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
            <p>© 2026 Your Company Name. All Rights Reserved.</p>
          </footer>
        </article>
      </div>
    </main>
  )
}
