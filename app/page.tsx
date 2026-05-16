import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-200">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="rounded-lg border border-border bg-card p-8 shadow-sm transition-colors duration-200">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-3xl font-bold text-foreground">
              Next.js Documentation
            </h1>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Beginner-friendly explanations of Next.js configuration options and features.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-foreground">Configuration Options</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/docs/adapter-path"
                  className="group flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4 transition-colors hover:border-primary/50 hover:bg-muted/50"
                >
                  <div>
                    <h3 className="font-medium text-foreground">adapterPath</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Configure a custom adapter module for deployment platforms
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
              </li>
            </ul>
          </section>

          <footer className="mt-12 border-t pt-6 text-sm text-muted-foreground">
            <p>Based on the official Next.js documentation</p>
          </footer>
        </article>
      </div>
    </main>
  )
}
