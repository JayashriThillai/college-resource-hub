export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <nav className="flex items-center justify-between px-8 py-5 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-cyan-400">
          College Resource Hub
        </h1>

        <div className="flex gap-6 text-sm">

          <a href="/" className="hover:text-cyan-400">
            Home
          </a>

          <a href="/upload" className="hover:text-cyan-400">
            Upload
          </a>

          <a href="/resources" className="hover:text-cyan-400">
            Resources
          </a>

        </div>

      </nav>

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="text-5xl font-bold leading-tight">

          Access Notes,
          <span className="text-cyan-400">
            {" "}Previous Papers{" "}
          </span>
          and Study Resources Easily

        </h2>

        <p className="mt-8 text-slate-300 text-lg max-w-2xl mx-auto">

          A centralized platform where students can upload,
          discover, and download academic resources
          organized by department and semester.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="/resources"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl"
          >
            Browse Resources
          </a>

          <a
            href="/upload"
            className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-xl"
          >
            Upload Notes
          </a>

        </div>

      </section>

    </main>
  );
}