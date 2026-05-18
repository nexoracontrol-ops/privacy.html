import { FileCode, Settings, Plug, Terminal, BookOpen, Lightbulb, ArrowRight } from "lucide-react"

export default function AdapterPathDocsPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="rounded-lg border border-border bg-card p-8 shadow-sm transition-colors duration-200">
          {/* Header */}
          <div className="border-b-2 border-primary pb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Settings className="h-4 w-4" />
              <span>next.config.js</span>
            </div>
            <h1 className="mt-2 text-3xl font-bold text-foreground">adapterPath</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              A configuration option that tells Next.js where to find your custom adapter module
            </p>
          </div>

          {/* What is it section */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">What is adapterPath?</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">adapterPath</code> is 
              a configuration option in your <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">next.config.js</code> file 
              that specifies the path to a custom adapter module.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Think of an adapter as a <strong className="text-foreground">bridge</strong> between Next.js and 
              the platform where your app will run. It allows deployment platforms (like Vercel, Netlify, or your 
              own servers) to integrate with the Next.js build process.
            </p>
          </section>

          {/* Where is it used section */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <FileCode className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Where is it used?</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              You configure <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">adapterPath</code> in 
              your <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">next.config.js</code> file, 
              which is the main configuration file for your Next.js application located at the root of your project.
            </p>
          </section>

          {/* How to use it section */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">How to Use It</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To use an adapter, you specify the path to your adapter module using the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">adapterPath</code> option:
            </p>
            
            {/* Code example */}
            <div className="mt-4 overflow-hidden rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2">
                <FileCode className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">next.config.js</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-foreground">{`/** @type {import('next').NextConfig} */
const nextConfig = {
  adapterPath: require.resolve('./my-adapter.js'),
}

module.exports = nextConfig`}</code>
              </pre>
            </div>

            <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">💡 Tip:</strong> Using <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">require.resolve()</code> ensures 
                that Node.js resolves the full path to your adapter file, preventing path-related issues.
              </p>
            </div>
          </section>

          {/* Environment variable section */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <Plug className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Alternative: Environment Variable</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Instead of setting <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">adapterPath</code> in 
              your config file, you can also use the <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">NEXT_ADAPTER_PATH</code> environment 
              variable.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              This is particularly useful for deployment platforms that want to provide <strong className="text-foreground">zero-config</strong> adapter 
              integration — the platform can set this environment variable automatically without requiring you to modify your config file.
            </p>

            {/* Code example */}
            <div className="mt-4 overflow-hidden rounded-lg border border-border bg-muted/50">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Terminal / Environment</span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-foreground">NEXT_ADAPTER_PATH=/path/to/adapter.js</code>
              </pre>
            </div>
          </section>

          {/* What does it do section */}
          <section className="mt-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">What Does It Do?</h2>
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              When you specify an <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">adapterPath</code>, 
              Next.js will use that adapter to:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Integrate with the build process</strong> — The adapter hooks into 
                  how Next.js builds your application.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Handle runtime behavior</strong> — It can affect how API routes and 
                  server-side features work on different platforms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Customize deployment output</strong> — Different platforms may need 
                  different output formats or structures.
                </span>
              </li>
            </ul>
          </section>

          {/* Reference implementation section */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Reference Implementation</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              For a complete example of how to build an adapter, Next.js recommends looking at the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">nextjs/adapter-vercel</code> adapter, 
              which is the official adapter used for deploying Next.js apps to Vercel.
            </p>
          </section>

          {/* Key takeaways section */}
          <section className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
            <h2 className="text-lg font-semibold text-foreground">Key Takeaways</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><code className="rounded bg-muted px-1 text-sm font-mono text-foreground">adapterPath</code> points to a custom adapter module</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Configure it in <code className="rounded bg-muted px-1 text-sm font-mono text-foreground">next.config.js</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Or use the <code className="rounded bg-muted px-1 text-sm font-mono text-foreground">NEXT_ADAPTER_PATH</code> environment variable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Adapters bridge Next.js with deployment platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Most users won&apos;t need to configure this — it&apos;s mainly for platform providers</span>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
            <p>
              Based on the official{" "}
              <a
                href="https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80"
              >
                Next.js documentation
              </a>
            </p>
          </footer>
        </article>
      </div>
    </main>
  )
}
</code>
