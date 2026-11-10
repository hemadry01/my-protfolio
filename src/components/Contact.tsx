export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-[#080816] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Get in touch
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
           Let&apos;s Work Together
          <span className="text-purple-400">.</span>
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          Have a project in mind? Let&apos;s discuss your ideas and create something
          amazing together.
        </p>

        {/* Contact Content */}
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold">
              Let&apos;s talk about your project
            </h3>

            <p className="mt-5 max-w-md leading-8 text-gray-400">
              I&apos;m always interested in hearing about new projects, creative
              ideas and opportunities to be part of your vision. Feel free to
              reach out.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@example.com"
              className="mt-9 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <div>
                <p className="text-xs text-gray-500">Email Me</p>
                <p className="mt-1 text-sm font-medium text-gray-200">
                  sumanb843@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="mailto:sumanb843@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-[#080816] px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Email
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-[#080816] px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#080816] px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-purple-600/20"
            >
              Send Message
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
